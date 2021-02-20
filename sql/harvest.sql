CREATE TEMP FUNCTION PARSE_TRACE(data STRING)
RETURNS STRUCT< reserve STRING, amount STRING, error STRING > LANGUAGE js AS """
    var abi = {"constant": false, "inputs": [{"internalType": "address", "name": "reserve", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "harvest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"};
    var interface_instance = new ethers.utils.Interface([abi]);

    var result = {};
    try {
        var parsedTransaction = interface_instance.parseTransaction({data: data});
        var parsedArgs = parsedTransaction.args;

        if (parsedArgs && parsedArgs.length >= abi.inputs.length) {
            for (var i = 0; i < abi.inputs.length; i++) {
                var paramName = abi.inputs[i].name;
                var paramValue = parsedArgs[i];
                if (abi.inputs[i].type === 'address' && typeof paramValue === 'string') {
                    // For consistency all addresses are lowercase.
                    paramValue = paramValue.toLowerCase();
                }
                result[paramName] = paramValue;
            }
        } else {
            result['error'] = 'Parsed transaction args is empty or has too few values.';
        }
    } catch (e) {
        result['error'] = e.message;
    }

    return result;
""" OPTIONS
  (library = "gs://blockchain-etl-bigquery/ethers.js");
WITH
  parsed_traces AS (
    SELECT
      traces.block_timestamp AS block_timestamp,
      traces.block_number AS block_number,
      traces.transaction_hash AS transaction_hash,
      traces.trace_address AS trace_address,
      PARSE_TRACE(traces.input) AS parsed
    FROM
      `bigquery-public-data.crypto_ethereum.traces` AS traces
    WHERE
      to_address = '0xacd43e627e64355f1861cec6d3a6688b31a6f952' AND STARTS_WITH(traces.input, '0x018ee9b7')
  )
SELECT
  block_timestamp,
  block_number,
  transaction_hash,
  trace_address,
  parsed.error AS error,
  parsed.reserve AS reserve,
  parsed.amount AS amount
FROM
  parsed_traces;

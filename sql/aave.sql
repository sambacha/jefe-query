CREATE TEMP FUNCTION PARSE_LOG(data STRING, topics ARRAY< STRING >)
RETURNS STRUCT< liquidator STRING, borrower STRING, repayAmount STRING, cTokenCollateral STRING, seizeTokens STRING >
LANGUAGE js AS """
    var parsedEvent = {"anonymous": false, "inputs": [{"indexed": false, "name": "liquidator", "type": "address"}, {"indexed": false, "name": "borrower", "type": "address"}, {"indexed": false, "name": "repayAmount", "type": "uint256"}, {"indexed": false, "name": "cTokenCollateral", "type": "address"}, {"indexed": false, "name": "seizeTokens", "type": "uint256"}], "name": "LiquidateBorrow", "type": "event"}
    return abi.decodeEvent(parsedEvent, data, topics, false);
""" OPTIONS
  (library = "https://storage.googleapis.com/ethlab-183014.appspot.com/ethjs-abi.js");
WITH
  parsed_logs AS (
    SELECT
      logs.block_timestamp AS block_timestamp,
      logs.block_number AS block_number,
      logs.transaction_hash AS transaction_hash,
      logs.log_index AS log_index,
      PARSE_LOG(logs.data, logs.topics) AS parsed
    FROM
      `bigquery-public-data.crypto_ethereum.logs` AS logs
    WHERE
      address = '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5' AND topics[SAFE_OFFSET(0)] = '0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52'
  )
SELECT
  block_timestamp,
  block_number,
  transaction_hash,
  log_index,
  parsed.liquidator AS liquidator,
  parsed.borrower AS borrower,
  parsed.repayAmount AS repayAmount,
  parsed.cTokenCollateral AS cTokenCollateral,
  parsed.seizeTokens AS seizeTokens
FROM
  parsed_logs;

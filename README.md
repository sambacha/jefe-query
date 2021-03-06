# jefe-query

SQL Table Definitions for Ethereum Transactions

## Transactions

| **Field name**              | **Type**  | **Mode** | **Description**                                                                          |
| --------------------------- | --------- | -------- | ---------------------------------------------------------------------------------------- |
| hash                        | STRING    | REQUIRED | Hash of the transaction                                                                  |
| nonce                       | INTEGER   | REQUIRED | The number of transactions made by the sender prior to this one                          |
| transaction_index           | INTEGER   | REQUIRED | Integer of the transactions index position in the block                                  |
| from_address                | STRING    | REQUIRED | Address of the sender                                                                    |
| to_address                  | STRING    | NULLABLE | Address of the receiver. null when its a contract creation transaction                   |
| value                       | NUMERIC   | NULLABLE | Value transferred in Wei                                                                 |
| gas                         | INTEGER   | NULLABLE | Gas provided by the sender                                                               |
| gas_price                   | INTEGER   | NULLABLE | Gas price provided by the sender in Wei                                                  |
| input                       | STRING    | NULLABLE | The data sent along with the transaction                                                 |
| receipt_cumulative_gas_used | INTEGER   | NULLABLE | The total amount of gas used when this transaction was executed in the block             |
| receipt_gas_used            | INTEGER   | NULLABLE | The amount of gas used by this specific transaction alone                                |
| receipt_contract_address    | STRING    | NULLABLE | The contract address created, if the transaction was a contract creation, otherwise null |
| receipt_root                | STRING    | NULLABLE | 32 bytes of post-transaction stateroot (pre Byzantium)                                   |
| receipt_status              | INTEGER   | NULLABLE | Either 1 (success) or 0 (failure) (post Byzantium)                                       |
| block_timestamp             | TIMESTAMP | REQUIRED | Timestamp of the block where this transaction was in                                     |
| block_number                | INTEGER   | REQUIRED | Block number where this transaction was in                                               |
| block_hash                  | STRING    | REQUIRED | Hash of the block where this transaction was in                                          |

### Tracing

| **Field name**              | **Type**  | **Mode** | **Description**                                                                          |
| --------------------------- | --------- | -------- | ---------------------------------------------------------------------------------------- |
| hash                        | STRING    | REQUIRED | Hash of the transaction                                                                  |
| nonce                       | INTEGER   | REQUIRED | The number of transactions made by the sender prior to this one                          |
| transaction_index           | INTEGER   | REQUIRED | Integer of the transactions index position in the block                                  |
| from_address                | STRING    | REQUIRED | Address of the sender                                                                    |
| to_address                  | STRING    | NULLABLE | Address of the receiver. null when its a contract creation transaction                   |
| value                       | NUMERIC   | NULLABLE | Value transferred in Wei                                                                 |
| gas                         | INTEGER   | NULLABLE | Gas provided by the sender                                                               |
| gas_price                   | INTEGER   | NULLABLE | Gas price provided by the sender in Wei                                                  |
| input                       | STRING    | NULLABLE | The data sent along with the transaction                                                 |
| receipt_cumulative_gas_used | INTEGER   | NULLABLE | The total amount of gas used when this transaction was executed in the block             |
| receipt_gas_used            | INTEGER   | NULLABLE | The amount of gas used by this specific transaction alone                                |
| receipt_contract_address    | STRING    | NULLABLE | The contract address created, if the transaction was a contract creation, otherwise null |
| receipt_root                | STRING    | NULLABLE | 32 bytes of post-transaction stateroot (pre Byzantium)                                   |
| receipt_status              | INTEGER   | NULLABLE | Either 1 (success) or 0 (failure) (post Byzantium)                                       |
| block_timestamp             | TIMESTAMP | REQUIRED | Timestamp of the block where this transaction was in                                     |
| block_number                | INTEGER   | REQUIRED | Block number where this transaction was in                                               |
| block_hash                  | STRING    | REQUIRED | Hash of the block where this transaction was in                                          |

## Tokens

| **Field name**  | **Type**  | **Mode** | **Description**                                                                        |
| --------------- | --------- | -------- | -------------------------------------------------------------------------------------- |
| address         | STRING    | REQUIRED | The address of the ERC20 token                                                         |
| symbol          | STRING    | NULLABLE | The symbol of the ERC20 token                                                          |
| name            | STRING    | NULLABLE | The name of the ERC20 token                                                            |
| decimals        | STRING    | NULLABLE | The number of decimals the token uses. Use safe_cast for casting to NUMERIC or FLOAT64 |
| total_supply    | STRING    | NULLABLE | The total token supply. Use safe_cast for casting to NUMERIC or FLOAT64                |
| block_timestamp | TIMESTAMP | REQUIRED | Timestamp of the block where this token was created                                    |
| block_number    | INTEGER   | REQUIRED | Block number where this token was created                                              |
| block_hash      | STRING    | REQUIRED | Hash of the block where this token was created                                         |



## Adding a Javascript Library for use in a BigQuery UDF

In order to host an npm package in the bigquery-utils GCS bucket, add the npm package name and version
to the [js_libs.yaml](js_libs.yaml) file. Make sure the npm package name is exactly as it's listed
in the [npm registry](https://www.npmjs.com/).
 
You can then import the npm package into your BigQuery UDF using the following syntax: 
```
CREATE FUNCTION myFunc(a FLOAT64, b STRING)
  RETURNS STRING
  LANGUAGE js
  OPTIONS ( 
    library=["${JS_BUCKET}/LIBRARY-NAME-v1.2.3.min.js"] 
  )
  AS 
  """
  return LIBRARY_NAME.func_from_lib(a, b);
  """;
  ```

**Note: When your UDF makes a call to the javascript library,
 make sure to convert any dashes '-' to underscores '_' in the javascript library name.** (e.g. LIBRARY-NAME in example
 above is invoked as LIBRARY_NAME in the UDF body.)

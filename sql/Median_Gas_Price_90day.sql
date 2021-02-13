SELECT
    DATE_TRUNC('day',block_time) AS dt
    , (PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY gas_price)) / 1e9  AS median_gas_price_gwei
FROM ethereum.transactions
WHERE
    block_time >= (DATE_TRUNC('day',CURRENT_TIMESTAMP) - '90 days'::INTERVAL)
GROUP BY 1
ORDER BY 1;
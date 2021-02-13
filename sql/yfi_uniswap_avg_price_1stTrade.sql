select '10' as numtrades, avg(ethratio) as priceineth, sum(token_a_amount) as yfibought from (
SELECT 1/token_a_amount * token_b_amount as ethratio, token_a_amount
FROM dex."trades"
where token_a_symbol = 'YFI'
  and token_b_symbol = 'WETH'
order by block_time limit 10
)x union all
select '100' as numtrades, avg(ethratio) as priceineth, sum(token_a_amount) as yfibought from (
SELECT 1/token_a_amount * token_b_amount as ethratio, token_a_amount
FROM dex."trades"
where token_a_symbol = 'YFI'
  and token_b_symbol = 'WETH'
order by block_time limit 100
)x union all
select '1000' as numtrades, avg(ethratio) as priceineth, sum(token_a_amount) as yfibought from (
SELECT 1/token_a_amount * token_b_amount as ethratio, token_a_amount
FROM dex."trades"
where token_a_symbol = 'YFI'
  and token_b_symbol = 'WETH'
order by block_time limit 1000
)x union all
select '10000' as numtrades, avg(ethratio) as priceineth, sum(token_a_amount) as yfibought from (
SELECT 1/token_a_amount * token_b_amount as ethratio, token_a_amount
FROM dex."trades"
where token_a_symbol = 'YFI'
  and token_b_symbol = 'WETH'
order by block_time limit 10000
)x union all
select '100000' as numtrades, avg(ethratio) as priceineth, sum(token_a_amount) as yfibought from (
SELECT 1/token_a_amount * token_b_amount as ethratio, token_a_amount
FROM dex."trades"
where token_a_symbol = 'YFI'
  and token_b_symbol = 'WETH'
order by block_time limit 100000
)x
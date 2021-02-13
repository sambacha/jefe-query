select sum(link.value) / 1e18 as amount
from yearn."StrategyControllerV2_call_delegatedHarvest" s
left join erc20."ERC20_evt_Transfer" link
    on link.evt_tx_hash = s.call_tx_hash
where s.contract_address = '\x2be5d998c95de70d9a38b3d78e49751f10f9e88b'
    and s.call_success = 'true'
    and link.to = '\x29E240CFD7946BA20895a7a02eDb25C210f9f324'
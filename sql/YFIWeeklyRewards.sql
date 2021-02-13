(SELECT date_trunc('week', evt_block_time) as time,
    sum(reward / 1e18) as reward
    from yearn."YearnGovernance_YFI_evt_RewardAdded"
    group by time)

UNION

(SELECT date_trunc('week', evt_block_time) as time,
    sum(reward / 1e18) as reward
    from yearn."YearnRewards_evt_RewardAdded"
    group by time)
order by time asc
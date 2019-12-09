// @flow
import React from 'react'
import { Divider } from 'antd'
import LatestTable from '../components/organisms/LatestTable'
import withLatestData from '../hoc/withLatestData'

const data = [
	{
		'id': 1,
		'name': 'Bitcoin',
		'symbol': 'BTC',
		'slug': 'bitcoin',
		'num_market_pairs': 7761,
		'date_added': '2013-04-28T00:00:00.000Z',
		'tags': [
			'mineable'
		],
		'max_supply': 21000000,
		'circulating_supply': 18088812,
		'total_supply': 18088812,
		'platform': null,
		'cmc_rank': 1,
		'last_updated': '2019-12-07T19:20:36.000Z',
		'quote': {
			'USD': {
				'price': 7565.0864267,
				'volume_24h': 15911134167.7392,
				'percent_change_1h': -0.0226888,
				'percent_change_24h': 1.35684,
				'percent_change_7d': -0.0867307,
				'market_cap': 136843426136.32808,
				'last_updated': '2019-12-07T19:20:36.000Z'
			}
		}
	},
	{
		'id': 1027,
		'name': 'Ethereum',
		'symbol': 'ETH',
		'slug': 'ethereum',
		'num_market_pairs': 5360,
		'date_added': '2015-08-07T00:00:00.000Z',
		'tags': [
			'mineable'
		],
		'max_supply': null,
		'circulating_supply': 108833191.5615,
		'total_supply': 108833191.5615,
		'platform': null,
		'cmc_rank': 2,
		'last_updated': '2019-12-07T19:21:24.000Z',
		'quote': {
			'USD': {
				'price': 148.906547513,
				'volume_24h': 5965220166.40555,
				'percent_change_1h': -0.087986,
				'percent_change_24h': -0.0480374,
				'percent_change_7d': -2.19366,
				'market_cap': 16205974810.243929,
				'last_updated': '2019-12-07T19:21:24.000Z'
			}
		}
	},
	{
		'id': 52,
		'name': 'XRP',
		'symbol': 'XRP',
		'slug': 'xrp',
		'num_market_pairs': 513,
		'date_added': '2013-08-04T00:00:00.000Z',
		'tags': [],
		'max_supply': 100000000000,
		'circulating_supply': 43285660917,
		'total_supply': 99991237614,
		'platform': null,
		'cmc_rank': 3,
		'last_updated': '2019-12-07T19:21:04.000Z',
		'quote': {
			'USD': {
				'price': 0.227630621674,
				'volume_24h': 1105766516.33785,
				'percent_change_1h': -0.109943,
				'percent_change_24h': 1.38856,
				'percent_change_7d': 0.61814,
				'market_cap': 9853141904.106674,
				'last_updated': '2019-12-07T19:21:04.000Z'
			}
		}
	},
]

// todo: remove; it's just for testing
const LatestTableWithData = withLatestData<{||}>(LatestTable)

const MarketOverviewContainer = () => (
	<>
		<LatestTableWithData />
		<Divider />
		<LatestTable data={data} />
	</>
)

export default MarketOverviewContainer
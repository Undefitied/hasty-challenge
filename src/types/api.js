// @flow
export type LatestDataType = {
	'id': number,
	'name': string,
	'symbol': string,
	'slug': string,
	'num_market_pairs': number,
	'date_added': string,
	'tags': Array<string>,
	'max_supply': null | number,
	'circulating_supply': number,
	'total_supply': number,
	'platform': null,
	'cmc_rank': number,
	'last_updated': string,
	'quote': {
		'USD': {
			'price': number,
			'volume_24h': number,
			'percent_change_1h': number,
			'percent_change_24h': number,
			'percent_change_7d': number,
			'market_cap': number,
			'last_updated': string
		}
	}
}
// @flow
import MarketOverviewContainer from '../containers/MarketOverviewContainer'

export const PAGES_ID = Object.freeze({
	OVERVIEW: 'MARKET_OVERVIEW',
	LIQUIDITY: 'LIQUIDITY_ANALYSIS'
})

export const PAGES_MAP = Object.freeze({
	[PAGES_ID.OVERVIEW]: {
		id: PAGES_ID.OVERVIEW,
		route: {
			path: '/',
			component: MarketOverviewContainer,
		},
		title: 'Market Overview',
	},
	[PAGES_ID.LIQUIDITY]: {
		id: PAGES_ID.LIQUIDITY,
		route: {
			path: '/liquidity',
			component: () => null,
		},
		title: 'Liquidity analysis',
	},
})

export const PAGES_BY_PATH = (Object.values(PAGES_MAP): any).reduce((result, pageMap) => {
	result[pageMap.route.path] = PAGES_MAP[pageMap.id]
	return result
}, {})

export const LATEST_LIMIT_OPTIONS = Object.freeze({
	DEFAULT: '',
	TEN: 10,
	FIFTY: 50,
	ALL: 5000,
})

export const LATEST_LIMIT_LABELS = Object.freeze({
	[LATEST_LIMIT_OPTIONS.DEFAULT]: 'Default',
	[LATEST_LIMIT_OPTIONS.TEN]: '10',
	[LATEST_LIMIT_OPTIONS.FIFTY]: '50',
	[LATEST_LIMIT_OPTIONS.ALL]: 'All',
})

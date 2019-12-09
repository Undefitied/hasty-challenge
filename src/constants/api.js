// @flow
import type { ApiListType } from '../types'

export const API_LIST = Object.freeze({
	LATEST: '/cryptocurrency/listings/latest'
})

export const API_URL = (section: ApiListType) => `https://pro-api.coinmarketcap.com/v1${section}`
export const API_KEY = 'ab3437ed-faac-4e77-9db6-eec49a1f111f'
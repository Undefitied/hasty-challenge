import { LATEST_LIMIT_OPTIONS } from '../constants'

const defaultStore = {
	uiGlobal: {
		currentPageId: null,
		latestLimit: LATEST_LIMIT_OPTIONS.DEFAULT
	},
	api: {
		latest: null
	}
}

export default defaultStore

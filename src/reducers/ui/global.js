// @flow
import { TYPES } from '../../actions'
import type { ReduxStoreType } from '../../types'
import defaultStore from '../../config/defaultStore'

const uiGlobal = (state: ReduxStoreType = defaultStore, action: any) => {
	switch (action.type) {
	case TYPES.SET_CURRENT_PAGE:
		return {
			...state,
			currentPageId: action.pageId
		}

	case TYPES.SET_LATEST_DROPDOWN:
		return {
			...state,
			latestLimit: action.latestLimit
		}

	default:
		return state
	}
}

export default uiGlobal
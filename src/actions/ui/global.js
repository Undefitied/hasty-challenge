// @flow
import type { LatestDropdownValueType, PageIdType } from '../../types'

export const TYPES = {
	SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
	SET_LATEST_DROPDOWN: 'SET_LATEST_DROPDOWN'
}

export const setCurrentPage = (pageId: PageIdType) => ({
	type: TYPES.SET_CURRENT_PAGE,
	pageId
})

export const setLatestDropdown = (latestLimit: LatestDropdownValueType) => ({
	type: TYPES.SET_LATEST_DROPDOWN,
	latestLimit
})
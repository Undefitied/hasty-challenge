// @flow
import { LATEST_LIMIT_OPTIONS, PAGES_ID, PAGES_MAP } from '../constants'
import defaultStore from '../config/defaultStore'
import { TYPES } from '../actions'

export type ReduxStoreType = $Shape<typeof defaultStore>
export type PageIdType = $Values<typeof PAGES_ID>
export type PageMapType = $Values<typeof PAGES_MAP>
export type LatestDropdownValueType = $Values<typeof LATEST_LIMIT_OPTIONS>
export type UiGlobalActionType = $Values<typeof TYPES>
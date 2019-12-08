// @flow
import { PAGES_MAP } from '../constants'
import type { PageMapType, ReduxStoreType } from '../types'

export const getCurrentPage = (store: ReduxStoreType): PageMapType => PAGES_MAP[store.uiGlobal.currentPageId]
import { createStore } from 'redux'
import rootReducer from '../reducers'
import defaultStore from './defaultStore'

export const store = createStore(rootReducer, defaultStore)
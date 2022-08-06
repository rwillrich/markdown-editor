import { combineReducers, createStore } from 'redux'

import { reducer as editor } from './modules/editor/redux'

const rootReducer = combineReducers({ editor })

export const store = createStore(rootReducer)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

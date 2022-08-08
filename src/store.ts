import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { reducer as editor } from './modules/editor/redux'

const rootReducer = combineReducers({ editor })

export const store = configureStore({ reducer: rootReducer })

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

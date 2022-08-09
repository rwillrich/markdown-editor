import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import {
  reducer as editor,
  nonSerializableActions as editorNonSerializableActions,
  nonSerializableStatePaths as editorNonSerializableStatePaths,
} from './modules/editor/redux'

const rootReducer = combineReducers({ editor })

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [...editorNonSerializableActions],
        ignoredPaths: [...editorNonSerializableStatePaths],
      },
    }),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

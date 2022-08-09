import { produce } from 'immer'

import { DraftJsEditorState } from '../draft-js'

import {
  RESET_DRAFT_JS_EDITOR_STATE,
  SET_DRAFT_JS_EDITOR_STATE,
} from './actionTypes'
import { EditorAction } from './actions'
import { EditorState } from './types'

const initialState: EditorState = {
  draftJsEditorState: DraftJsEditorState.createEmpty(),
}

export const reducer = produce((draft: EditorState, action: EditorAction) => {
  switch (action.type) {
    case SET_DRAFT_JS_EDITOR_STATE:
      draft.draftJsEditorState = action.payload
      break
    case RESET_DRAFT_JS_EDITOR_STATE:
      draft.draftJsEditorState = DraftJsEditorState.createEmpty()
      break
    default:
      break
  }
}, initialState)

export const nonSerializableStatePaths = ['editor.draftJsEditorState']

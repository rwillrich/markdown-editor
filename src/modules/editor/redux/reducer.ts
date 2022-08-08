import produce from 'immer'

import { DraftJsEditorState } from '../../draft-js'

import { EditorAction } from './actions'
import {
  RESET_DRAFT_JS_EDITOR_STATE,
  SET_DRAFT_JS_EDITOR_STATE,
} from './actionTypes'

export type EditorState = {
  draftJsEditorState: DraftJsEditorState
}

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

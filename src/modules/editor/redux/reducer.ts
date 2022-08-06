import produce from 'immer'

import { DraftJsEditorState } from '../../draft-js'

import { EditorAction, SET_DRAFT_JS_EDITOR_STATE } from './actions'

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
    default:
      break
  }
}, initialState)

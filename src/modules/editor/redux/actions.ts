import { DraftJsEditorState } from '../../draft-js'
import { actionCreator } from '../../shared/redux/helpers'
import {
  RESET_DRAFT_JS_EDITOR_STATE,
  SET_DRAFT_JS_EDITOR_STATE,
} from './actionTypes'

export const setDraftJsEditorState = actionCreator(
  SET_DRAFT_JS_EDITOR_STATE,
  (state: DraftJsEditorState) => state
)

export const resetDraftJsEditorState = actionCreator(
  RESET_DRAFT_JS_EDITOR_STATE,
  () => {}
)

export type EditorAction =
  | ReturnType<typeof setDraftJsEditorState>
  | ReturnType<typeof resetDraftJsEditorState>

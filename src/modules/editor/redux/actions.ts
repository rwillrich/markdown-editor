import { DraftJsEditorState } from '../../draft-js'
import { actionCreator } from '../../shared/redux/helpers'

export const SET_DRAFT_JS_EDITOR_STATE = 'editor/SET_DRAFT_JS_EDITOR_STATE'

export const setDraftJsEditorState = actionCreator(
  SET_DRAFT_JS_EDITOR_STATE,
  (state: DraftJsEditorState) => state
)

export const resetDraftJsEditorState = actionCreator(
  SET_DRAFT_JS_EDITOR_STATE,
  () => DraftJsEditorState.createEmpty()
)

export type EditorAction =
  | ReturnType<typeof setDraftJsEditorState>
  | ReturnType<typeof resetDraftJsEditorState>

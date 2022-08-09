import { createSelector } from '@reduxjs/toolkit'

import { DraftJsEditorState } from '../../draft-js'
import { AppState } from '../../store'

export const selectEditorDraftJsEditorState = (
  state: AppState
): DraftJsEditorState => state.editor.draftJsEditorState

export const selectEditorPreviewContent = createSelector(
  selectEditorDraftJsEditorState,
  draftJsEditorState => draftJsEditorState.getCurrentContent().getPlainText()
)

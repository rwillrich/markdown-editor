import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '../../shared/redux'
import { DraftJsEditorState } from '../draft-js'

export const selectEditorDraftJsEditorState = (
  state: AppState
): DraftJsEditorState => state.editor.draftJsEditorState

export const selectEditorPreviewContent = createSelector(
  selectEditorDraftJsEditorState,
  draftJsEditorState => draftJsEditorState.getCurrentContent().getPlainText()
)

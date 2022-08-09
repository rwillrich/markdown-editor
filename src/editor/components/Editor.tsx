import { FunctionComponent, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useIsMounted } from '../../shared/hooks/useIsMounted'
import { AppDispatch, AppState } from '../../shared/redux'
import { DraftJsEditor, DraftJsEditorState } from '../draft-js'
import {
  resetDraftJsEditorState,
  selectEditorDraftJsEditorState,
  setDraftJsEditorState,
} from '../redux'

export type EditorProps = {}

export const Editor: FunctionComponent<EditorProps> = () => {
  const isMounted = useIsMounted()

  const dispatch = useDispatch<AppDispatch>()

  const draftJsEditorState = useSelector<AppState, DraftJsEditorState>(
    selectEditorDraftJsEditorState
  )

  const handleDraftJsEditorStateChange = useCallback(
    (newDraftJsEditorState: DraftJsEditorState) => {
      dispatch(setDraftJsEditorState(newDraftJsEditorState))
    },
    [dispatch]
  )
  const handleClearClick = useCallback(() => {
    dispatch(resetDraftJsEditorState())
  }, [dispatch])

  if (!isMounted) return null

  return (
    <>
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <DraftJsEditor
        editorState={draftJsEditorState}
        onChange={handleDraftJsEditorStateChange}
      />
    </>
  )
}

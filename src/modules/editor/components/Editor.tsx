import { FunctionComponent, useState } from 'react'
import { Editor as DraftJsEditor, EditorState } from 'draft-js'

import { useIsMounted } from '../../shared/hooks/useIsMounted'

export type EditorProps = {}

export const Editor: FunctionComponent<EditorProps> = () => {
  const isMounted = useIsMounted()

  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty()
  )

  if (!isMounted) return null

  return <DraftJsEditor editorState={editorState} onChange={setEditorState} />
}

import { FunctionComponent, useEffect, useState } from 'react'
import { Editor as DraftJsEditor, EditorState } from 'draft-js'

export type EditorProps = {}

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}

export const Editor: FunctionComponent<EditorProps> = () => {
  const isMounted = useIsMounted()

  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty()
  )

  if (!isMounted) return null

  return <DraftJsEditor editorState={editorState} onChange={setEditorState} />
}

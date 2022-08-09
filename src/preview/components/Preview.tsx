import { FunctionComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'

import { selectEditorPreviewContent } from '../../editor/redux'

export type PreviewProps = {}

export const Preview: FunctionComponent<PreviewProps> = () => {
  const previewContent = useSelector(selectEditorPreviewContent)

  return <ReactMarkdown>{previewContent}</ReactMarkdown>
}

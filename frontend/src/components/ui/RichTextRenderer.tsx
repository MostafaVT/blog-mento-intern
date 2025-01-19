import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>An error occurred while rendering the editor.</p>
      {children}
    </div>
  );
};

interface RichTextRendererProps {
  content: any; 
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
  const initialConfig = {
    namespace: 'RichTextRenderer',
    editorState: JSON.stringify(content), // Provide the JSON object to the Lexical editor
    nodes: [], // Include nodes here if needed for custom payload rich text structure
    onError: (error: Error) => console.error(error),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Loading content...</div>}
        ErrorBoundary={ErrorBoundary} 
      />
      <HistoryPlugin />
      <OnChangePlugin
        onChange={(editorState) => {
          console.log('Editor state changed:', editorState.toJSON());
        }}
      />
    </LexicalComposer>
  );
};

export default RichTextRenderer;


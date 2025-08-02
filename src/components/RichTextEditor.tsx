import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert';

const RichTextEditor: React.FC<{ onChange: (html: string) => void }> = ({ onChange }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    onChange(currentContentAsHTML);
  };

  return (
    <div className="rich-text-editor">
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={handleEditorChange}
      />
    </div>
  );
};

export default RichTextEditor;
import Editor from "@monaco-editor/react";

const SqlEditor = ({ value, onChange }) => {
  return (
    <div className="editor">
      <Editor
        height="200px"
        language="sql"
        theme="vs-dark"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SqlEditor;

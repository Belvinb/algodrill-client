import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

const MonacoEditorComponent: React.FC = () => {
  const [code, setCode] = useState<string>('function hello() {\n\tconsole.log("Hello, world!");\n}');


  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
    }
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Editor
        height="100%"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={handleEditorChange}
        theme="vs-dark" // Ensure the theme matches the loaded theme
      />
    </div>
  );
};

export default MonacoEditorComponent;

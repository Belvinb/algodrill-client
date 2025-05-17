'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Editor, OnMount, useMonaco } from '@monaco-editor/react';


// Import JSON files
import tomorrowNight from 'monaco-themes/themes/Tomorrow-Night.json';
import tomorrow from 'monaco-themes/themes/Tomorrow.json';

const themeData = {
  'Tomorrow-Night': tomorrowNight,
  'Tomorrow': tomorrow,
};

interface CodeProps {
  initialContent: string;
  language: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  onRun?: (code: string) => void;
}

export default function Code({
  initialContent,
  language,
  onChange,
  readOnly = false,
  onRun,
}: CodeProps) {
  const [content, setContent] = useState(initialContent);
  const monaco = useMonaco();
  const [monacoTheme, setMonacoTheme] = useState<string | undefined>('Tomorrow');
  const [mounted, setMounted] = useState(false);

  // Track component mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Define themes and set the appropriate theme
  useEffect(() => {
    if (monaco) {
      Object.entries(themeData).forEach(([themeName, themeConfig]) => {
        monaco.editor.defineTheme(themeName, themeConfig as any);
      });
    
    }
  }, [monaco]);

  const handleEditorChange = useCallback(
    (value: string | undefined) => {
      if (value !== undefined) {
        setContent(value);
        onChange(value);
      }
    },
    [onChange]
  );

  const handleEditorDidMount: OnMount = (editor) => {
    editor.focus();
  };

  const editorOptions = {
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    fontSize: 14,
    fontFamily: "'Fira Code', Menlo, Monaco, 'Courier New', monospace",
    fontLigatures: true,
    folding: false,
    lineNumbers: 'on',
    renderSideBySide: false,
    readOnly,
    wordWrap: 'on',
    automaticLayout: true,
    hideCursorInOverviewRuler: true,
    overviewRulerBorder: false,
    overviewRulerLanes: 0,
    renderLineHighlight: 'none',
    scrollbar: {
      vertical: 'hidden',
      horizontal: 'hidden',
    },
    lineDecorationsWidth: 16,
    lineNumbersMinChars: 4,
    glyphMargin: false,
    padding: { top: 16, bottom: 16 },
  };

  if (!mounted || !monacoTheme) {
    return (
      <div className="h-full flex items-center justify-center bg-background rounded-lg">
       Loading...
      </div>
    );
  }

  return (
    <div className="h-full relative bg-background rounded-lg overflow-hidden">
      <Editor
        height="100%"
        language={language}
        value={content}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        // options={editorOptions}
        loading={
          <div className="flex items-center justify-center h-full">
           Loading...
          </div>
        }
        theme={monacoTheme}
        className="rounded-lg overflow-hidden"
      />
    </div>
  );
}
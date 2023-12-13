'use client'

import { Resizable } from "re-resizable"
import AceEditor from 'react-ace'

//languages
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-typescript'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-mysql'
import 'ace-builds/src-noconflict/mode-golang'
import 'ace-builds/src-noconflict/mode-elixir'
import 'ace-builds/src-noconflict/mode-rust'

//themes
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-terminal'
import 'ace-builds/src-noconflict/theme-twilight'
import { useEffect, useState } from "react"
import { IconType } from "react-icons"
import { getExtension, initialCode } from "@/utils/utilities"


interface CodeEditorProps {
  language: string
  theme: string
  Icon: any
  background?: string
  currentPadding?: string
}

const CodeEditor = ({
  language,
  theme,
  Icon,
  background,
  currentPadding,
}: CodeEditorProps) => {

  const [width, setWidth] = useState(1000)
  const [height, setHeight] = useState<number | null>(500)
  const [title, setTitle] = useState("App");
  const [code, setCode] = useState(initialCode);

  const [extension, setExtension] = useState(".js");

  useEffect(() => {
    // Update the extension when the language changes
    setExtension(getExtension(language));
  }, [language]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Extract the title without the extension
    const newTitle = e.target.value.split(".")[0];
    setTitle(newTitle);
  };

  //@ts-ignore
  const handleResize = (event, direction, ref, pos) => {
    const newHeight = ref.style.height
    setHeight(parseInt(newHeight, 10))
  }

  const updateSize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])


  return (
    <Resizable
      minHeight={466}
      minWidth={510}
      maxWidth={1000}
      defaultSize={{
        width,
        height: height || 500
      }}
      onResize={handleResize}
      className="resize-container relative"
      style={{
        background
      }}
    >
      <div className="code-block" style={{ padding: currentPadding }}>
        <div
            className="handle handle-top absolute left-1/2 translate-x-[-50%] top-[-4px] w-2 h-2 
            rounded-full bg-slate-300 hover:bg-slate-50"
          ></div>
          <div
            className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full
          bg-slate-300 hover:bg-slate-50 "
          ></div>
          <div
            className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full 
          bg-slate-300 hover:bg-slate-50 "
          ></div>
          <div
            className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full
          bg-slate-300 hover:bg-slate-50 "
          ></div>
          <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black/80">
            <div className="dots flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5656]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbc6a]" />
              <div className="w-3 h-3 rounded-full bg-[#67f772]" />
            </div>
            <div className="input-control w-full">
              <input 
                type='text' 
                value={`${title}${extension}`}
                onChange={(e) => handleTitleChange(e)}
                style={{
                  lineHeight: "1.8rem",
                }}
                className="w-full text-white/80 outline-none font-normal text-center bg-transparent" 
              />
            </div>
            <div className="icon flex justify-center items-center p-1 bg-black/30 rounded-sm">{Icon}</div>
          </div>
          <AceEditor
            value={code}
            height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`}
            fontSize={16}
            theme={theme}
            mode={language.toLowerCase()}
            name='UNIQUE_ID_OF_DIV'
            showGutter={false}
            wrapEnabled={true}
            showPrintMargin={false}
            highlightActiveLine={false}
            editorProps={{ $blockScrolling: true }}
            className="!w-full"
            onChange={handleCodeChange}
          />
        </div>
    </Resizable>
  )
}

export default CodeEditor
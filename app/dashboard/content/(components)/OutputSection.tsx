import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props{
  aiOutput:string;
}

const OutputSection = ({aiOutput}:props) => {
  const editorRef:any  = useRef();
  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput)
  },[aiOutput])
  return (
    <div className='shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
      <h2>Your Result</h2>
      <Button className='flex gap-2 hover:bg-orange-300' onClick={()=>navigator.clipboard.writeText(aiOutput)}><Copy className='w-4 h-4'/>Copy</Button>
      </div>
      <Editor
      ref = {editorRef}
    initialValue="Your Result will appear here"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    height="600px"
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  /></div>
  )
}

export default OutputSection
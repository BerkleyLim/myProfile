import React from 'react'
import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';


// react-quill 사용 : 웹에디터 (기존 draft.js 버리기)
// 참조 : https://www.npmjs.com/package/react-quill
// 이미지 삽입이 되는 걸로 설정함
const TextEditorComponent = () => {
  const [value, setValue] = useState('');

  return (
    <ReactQuill className="m-3" theme="snow" value={value} onChange={setValue} />
  )
}

export default TextEditorComponent
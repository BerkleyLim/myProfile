import React, { useState, useEffect } from "react";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";
// convertToRaw: editorState 객체가 주어지면 원시 JS 구조로 변환.
// ContentState: https://draftjs.org/docs/api-reference-content-state/
import { EditorState, convertToRaw, ContentState } from "draft-js";
// convertToRaw로 변환시켜준 원시 JS 구조를 HTML로 변환.
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
// import { useDispatch, useSelector} from 'react-redux';
// import { changeField } from 'src/module/write';

const MyBlock = styled.div`
  .wrapper-class {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .editor {
    height: 500px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

// 변환시켜준 editorState 값을 넣기 위한 div 태그 css
const IntroduceContent = styled.div`
  position: relative;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 0.75rem;
  width: 100%;
  margin: 0 auto;
  // margin-bottom: 4rem;
`;

// 참조 : https://haranglog.tistory.com/12
function BoardFormPreview({content}) {
  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // editorState의 현재 contentState 값을 원시 JS 구조로 변환시킨뒤, HTML 태그로 변환시켜준다.
  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );
  
  // const htmlToEditor = `<pre>const editorToHtml = 
  // draftToHtml(convertToRaw(editorState.getCurrentContent()));</pre>
  // <p style="text-align:center;"><strong>ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ
  // </strong></p>`;

  const htmlToEditor = content;
  // console.log(htmlToEditor);

  useEffect(() => {
    const blocksFromHtml = htmlToDraft(htmlToEditor);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      // https://draftjs.org/docs/api-reference-content-state/#createfromblockarray
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      // ContentState를 EditorState기반으로 새 개체를 반환.
      // https://draftjs.org/docs/api-reference-editor-state/#createwithcontent
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
    // 처음 마운트됬을 때만 실행되야 된다. (이것은 비어야하므로)
    // but: 지금은 데이터 받아올려면 부모 컴포넌트의 데이터를 받아야 한다.
    // eslint-disable-next-line
  }, [content]);

  return (
    <MyBlock>
      {
        // 주석처리용
        // dangerouslySetInnerHTML: https://ko.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
      }
      <IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHtml }} />
    </MyBlock>
  );
}

export default BoardFormPreview;

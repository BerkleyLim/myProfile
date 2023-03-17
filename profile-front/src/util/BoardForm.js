import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";
// convertToRaw: editorState 객체가 주어지면 원시 JS 구조로 변환.
// ContentState: https://draftjs.org/docs/api-reference-content-state/
import { EditorState, convertToRaw, ContentState } from "draft-js";
// convertToRaw로 변환시켜준 원시 JS 구조를 HTML로 변환.
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import {Row, Col, Button} from "reactstrap"
import URI from "./URI"

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
// const IntroduceContent = styled.div`
//   position: relative;
//   border: 0.0625rem solid #d7e2eb;
//   border-radius: 0.75rem;
//   overflow: hidden;
//   padding: 1.5rem;
//   width: 100%;
//   margin: 0 auto;
//   margin-bottom: 4rem;
// `;

// 참조 : https://haranglog.tistory.com/12
function BoardForm({title, content}) {
  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // editorState의 현재 contentState 값을 원시 JS 구조로 변환시킨뒤, HTML 태그로 변환시켜준다.
  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  const htmlToEditor = content;

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

  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
    // console.log(editorToHtml)
  };

  const update = () => {
    URI.post(process.env.REACT_APP_API_ROOT + "/api/board/update", {
      bno:1,
      title:title,
      contents:editorToHtml,
      user_name:"admin"
    })
      .then((response) => {
        alert("update success!!")
        // console.log(response.data)
      })
      .catch(
        (e) => console.error(e)
      );
  }

  return (
    <MyBlock>
      <Editor
        // 에디터와 툴바 모두에 적용되는 클래스
        wrapperClassName="wrapper-class"
        // 에디터 주변에 적용된 클래스
        editorClassName="editor"
        // 툴바 주위에 적용된 클래스
        toolbarClassName="toolbar-class"
        // 툴바 설정
        toolbar={{
          // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
        placeholder="내용을 작성해주세요."
        // 한국어 설정
        localization={{
          locale: "ko",
        }}
        // 초기값 설정
        editorState={editorState}
        // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
        onEditorStateChange={onEditorStateChange}
      />
      {
        // 입력 결과 출력 (미리보기)
        // dangerouslySetInnerHTML: https://ko.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
      }
      {/* <IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHtml }} /> */}


      <Row className="justify-content-evenly">
        <Col sm={{offset:1, size:'auto'}}>
          <Button onClick={update}>수정</Button>
        </Col>
        <Col sm={{offset:1, size:'auto'}}>
          <Button>취소</Button>
        </Col>
      </Row>
    </MyBlock>
  );
}

export default BoardForm;

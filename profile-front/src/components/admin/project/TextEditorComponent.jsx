import React from "react";
import { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { Button, Col, Form, Input, Row, Table } from "reactstrap";

// react-quill 사용 : 웹에디터 (기존 draft.js 버리기)
// 참조 : https://www.npmjs.com/package/react-quill
// 이미지 삽입이 되는 걸로 설정함
const TextEditorComponent = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ minHeight: "300px", overflowY: "scroll" }}>
      <h3 className="m-3">프로젝트 추가</h3>
      <Table className="m-3" style={{ width: "90%" }}>
        <tr>
          <th width="20%">링크</th>
          <td width="80%">
            <Input value={`https://www.profile.com`}></Input>
          </td>
        </tr>
        <tr>
          <th width="20%">Github</th>
          <td width="80%">
            <Input value={`https://github.com/hongil/github`}></Input>
          </td>
        </tr>
        <tr>
          <th width="20%">blog</th>
          <td width="80%">
            <Input value={`https://gil.tistory.com/`}></Input>
          </td>
        </tr>
      </Table>
      <ReactQuill
        className="m-3"
        theme="snow"
        value={value}
        onChange={setValue}
      />
      <Form className="mb-3" style={{width:"90%"}}>
        <Row className="justify-content-evenly">
          <Col sm={{ offset: 1, size: "auto" }}>
            <Button>수정</Button>
          </Col>
          <Col sm={{ offset: 1, size: "auto" }}>
            <Button>뒤로가기</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TextEditorComponent;

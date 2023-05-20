import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import "draft-js/dist/Draft.css";
// import EntryNotice from './EntryNotice'
import BoardForm from "../../../util/BoardForm";
import BoardFormPreview from "../../../util/BoardFormPreview";
import URI from "../../../util/URI";
import { Row, Col, Button } from "reactstrap";

import { useSelector } from "react-redux";

const BoardEditorForm = ({ selectedBoard, closeDetail, isCreate }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [title, setTitle] = useState(selectedBoard.title);
  const [contents, setContents] = useState(selectedBoard.contents);
  const user = useSelector((state) => state.user);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    // 조건문
    if (isCreate) {
      setIsUpdate(true);
    }
  }, []);

  // console.log(isCreate);
  // 에디터 불려오기 관련 (태그 포함)
  const parentsOnChange = (editorToHtml) => {
    // console.log(editorToHtml)
    setContents(editorToHtml);
    // return editorToHtml;
  };

  const update = () => {
    if (isCreate) {
      URI.post(process.env.REACT_APP_API_ROOT + "/api/board/", {
        title: title,
        contents: contents,
        user_name: "admin",
      })
        .then((response) => {
          alert("create success!!");
          // console.log(response.data)
        })
        .catch((e) => console.error(e));
    } else {
      URI.post(process.env.REACT_APP_API_ROOT + "/api/board/update", {
        bno: selectedBoard.bno,
        title: title,
        contents: contents,
        user_name: "admin",
      })
        .then((response) => {
          alert("update success!!");
          // console.log(response.data)
        })
        .catch((e) => console.error(e));
    }
  };

  const updateMode = () => {
    if (isCreate) {
      closeDetail();
    } else {
      setIsUpdate(!isUpdate);
    }
  };

  return (
    <div>
      {isUpdate ? (
        // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
        <Form>
          {user.isLogin && (
            <Row className="justify-content-evenly">
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button onClick={update}>{isCreate?"추가":"수정"}</Button>
              </Col>
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button onClick={updateMode}>{isCreate?"뒤로가기":"취소"}</Button>
              </Col>
            </Row>
          )}
          <FormGroup>
            <Input
              type="text"
              name="title"
              defaultValue={selectedBoard.title}
              onChange={changeTitle}
            ></Input>
          </FormGroup>
          <BoardForm
            style={{ height: "280px" }}
            // title={selectedTogether.title}
            content={selectedBoard.contents}
            // bno={selectedTogether.bno}
            parentsOnChange={parentsOnChange}
          />
          {user.isLogin && (
            <Row className="justify-content-evenly">
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button onClick={update}>{isCreate?"추가":"수정"}</Button>
              </Col>
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button onClick={updateMode}>{isCreate?"뒤로가기":"취소"}</Button>
              </Col>
            </Row>
          )}
        </Form>
      ) : (
        <Form>
          <Row className="justify-content-evenly">
            {user.isLogin && (
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button onClick={updateMode}>수정</Button>
              </Col>
            )}
            <Col sm={{ offset: 1, size: "auto" }}>
              <Button onClick={closeDetail}>뒤로가기</Button>
            </Col>
          </Row>

          <FormGroup>
            <div>
              <h3>{selectedBoard.title}</h3>
            </div>
            {/* <BoardFormPreview className="form-control" content={title} /> */}
            <BoardFormPreview
              className="form-control"
              content={selectedBoard.contents}
            />
          </FormGroup>
          <Row className="justify-content-evenly">
            {user.isLogin && (
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button onClick={updateMode}>수정</Button>
              </Col>
            )}
            <Col sm={{ offset: 1, size: "auto" }}>
              <Button onClick={closeDetail}>뒤로가기</Button>
            </Col>
          </Row>
        </Form>
      )}
    </div>
  );
};

export default BoardEditorForm;

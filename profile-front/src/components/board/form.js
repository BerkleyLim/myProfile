import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import "draft-js/dist/Draft.css";
// import EntryNotice from './EntryNotice'
import BoardForm from "../../util/BoardForm";
import BoardFormPreview from "../../util/BoardFormPreview";
import URI from "../../util/URI";
import { Row, Col, Button } from "reactstrap";

import { useSelector } from "react-redux";

const togetherModal = ({ selectedTogether, onClose }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [title, setTitle] = useState(selectedTogether.title);
  const [contents, setContents] = useState(selectedTogether.contents);
  const user = useSelector((state) => state.user);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  useEffect(() => {
    // document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    // return () => {
    //   const scrollY = document.body.style.top;
    //   document.body.style.cssText = `position: ""; top: "";`;
    //   window.scrollTo(0, parseInt(scrollY || "0") * -1);
    // };
  }, []);

  // 에디터 불려오기 관련 (태그 포함)
  const parentsOnChange = (editorToHtml) => {
    // console.log(editorToHtml)
    setContents(editorToHtml);
    // return editorToHtml;
  };

  const update = () => {
    URI.post(process.env.REACT_APP_API_ROOT + "/api/board/update", {
      bno: selectedTogether.bno,
      title: title,
      contents: contents,
      user_name: "admin",
    })
      .then((response) => {
        alert("update success!!");
        // console.log(response.data)
      })
      .catch((e) => console.error(e));
  };

  const updateMode = () => {
    setIsUpdate(!isUpdate);
  }
  
  return (
    <div>
      {isUpdate ? (
        // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
        <Form>
          {user.isLogin && (
            <Row className="justify-content-evenly">
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button onClick={update}>수정</Button>
              </Col>
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button onClick={updateMode}>취소</Button>
              </Col>
            </Row>
          )}
          <FormGroup>
            <Input
              type="text"
              name="title"
              defaultValue={selectedTogether.title}
              onChange={changeTitle}
            ></Input>
          </FormGroup>
          <BoardForm
            style={{ height: "280px" }}
            // title={selectedTogether.title}
            content={selectedTogether.contents}
            // bno={selectedTogether.bno}
            parentsOnChange={parentsOnChange}
          />
          {user.isLogin && (
            <Row className="justify-content-evenly">
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button onClick={update}>수정</Button>
              </Col>
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button onClick={updateMode}>취소</Button>
              </Col>
            </Row>
          )}
        </Form>
      ) : (
        <Form>
          {
            user.isLogin &&
          <Row className="justify-content-evenly">
            <Col sm={{ offset: 1, size: "auto" }}>
              <Button onClick={updateMode}>수정</Button>
            </Col>
            <Col sm={{ offset: 1, size: "auto" }}>
              <Button>취소</Button>
            </Col>
          </Row>

          }
          <FormGroup>
            <div>
              <h3>{selectedTogether.title}</h3>
            </div>
            {/* <BoardFormPreview className="form-control" content={title} /> */}
            <BoardFormPreview
              className="form-control"
              content={selectedTogether.contents}
            />
          </FormGroup>
          {
            user.isLogin &&
          <Row className="justify-content-evenly">
            <Col sm={{ offset: 1, size: "auto" }}>
              <Button onClick={updateMode}>수정</Button>
            </Col>
            <Col sm={{ offset: 1, size: "auto" }}>
              <Button>취소</Button>
            </Col>
          </Row>
          }
        </Form>
      )}
    </div>
  );
};

export default togetherModal;

import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import "draft-js/dist/Draft.css";
// import EntryNotice from './EntryNotice'
import BoardForm from "../../../util/BoardForm";
import BoardFormPreview from "../../../util/BoardFormPreview";
import URI from "../../../util/URI";
import { Row, Col, Button } from "reactstrap";

import { useSelector } from "react-redux";
import propTypes from "prop-types";
import styled from "styled-components";
import Portal from "./Portal";

const togetherModal = ({
  className,
  visible,
  // children,
  onClose,
  maskClosable,
  // closable,
  selectedTogether,
}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  // const close = (e) => {
  //   if (onClose) {
  //     onClose(e);
  //   }
  // };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  // let [bno, setBno] = useState(0);
  let [title, setTitle] = useState("");
  let [contents, setContents] = useState("");
  const user = useSelector((state) => state.user);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

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
  // console.log(selectedTogether);
  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        tabIndex="-1"
        visible={visible}
        onClick={maskClosable ? onMaskClick : null}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {/* {closable && <CloseButton className="modal-close" onClick={close} />} */}
          {/* {children} */}
          {isUpdate ? (
            // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
            <Form>
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
              {
                user.isLogin &&
                  <Row className="justify-content-evenly">
                    <Col sm={{ offset: 1, size: "auto" }}>
                      <Button onClick={update}>수정</Button>
                    </Col>
                    <Col sm={{ offset: 1, size: "auto" }}>
                      <Button>취소</Button>
                    </Col>
                  </Row>
              }
            </Form>
          ) : (
            <Form>
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
              <Row className="justify-content-evenly">
                <Col sm={{ offset: 1, size: "auto" }}>
                  <Button onClick={update}>수정</Button>
                </Col>
                <Col sm={{ offset: 1, size: "auto" }}>
                  <Button>취소</Button>
                </Col>
              </Row>
            </Form>
          )}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

export default togetherModal;

togetherModal.propTypes = {
  visible: propTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  overflow: auto;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 1200px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  height: 720px;
`;

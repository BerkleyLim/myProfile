import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import "draft-js/dist/Draft.css";
// import EntryNotice from './EntryNotice'
import BoardForm from "../../../util/BoardForm";
import BoardFormPreview from "../../../util/BoardFormPreview";
// import URI from "../util/URI"

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
}) => {
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

  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  const user = useSelector(state => state.user);

  // useEffect(() => {
  //   URI.get(process.env.REACT_APP_API_ROOT + "/api/board/1")
  //     .then((response) => {
  //       // console.log(response.data)
  //       setTitle(response.data.title);
  //       setContent(response.data.contents);
  //     })
  //     .catch(
  //       (e) => console.error(e)
  //     );
  // },[])

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
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
          {user.isLogin ? (
            // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  defaultValue={title}
                  onChange={changeTitle}
                ></Input>
              </FormGroup>
              <BoardForm style={{height: "300px"}} title={title} content={content} />
            </Form>
          ) : (
            <div>
              <Form>
                <FormGroup>
                  <div>
                    <h3>{title}</h3>
                  </div>
                  {/* <BoardFormPreview className="form-control" content={title} /> */}
                  <BoardFormPreview
                    className="form-control"
                    content={content}
                  />
                </FormGroup>
              </Form>
            </div>
          )}

          <div className="title">
            <h4>개발중</h4>
          </div>
          <div className="content">
            지금 현재 기능 여부의 대해 에디터 개발 및 디자인 등 아이디어 구성
            작업 중입니다.
          </div>
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
  overflow:auto;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 900px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  height: 700px;
`;

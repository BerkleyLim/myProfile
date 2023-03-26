import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Portal from "../Portal";
import "./login.css";
import URI from "../../util/URI";

import { useDispatch } from "react-redux";

// 참조 :  https://medium.com/@bestseob93/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%AA%A8%EB%8B%AC-react-modal-%EB%A7%8C%EB%93%A4%EA%B8%B0-bd003458e9d
// const CloseButton = () => <FontAwesomeIcon icon={faTimes} />;
const LoginModal = ({
  className,
  visible,
  onClose,
  maskClosable,
  closable,
}) => {
  const [inputs, setInputs] = useState();
  const dispatch = useDispatch();

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  // 입력
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const loginButton = () => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    URI.post(process.env.REACT_APP_API_ROOT + "/api/auth/simplelogin", {
      id: inputs.id,
      password: inputs.password,
    })
    .then((response) => {
      if (response.data) {
        alert("로그인 성공")
        onClose();
        dispatch({type:"setUser", isLogin:response.data, userId:"ad", role_admin:"admin"});
      } else {
        alert("로그인 실패")
      }
    })
    .catch((e) => console.error(e));
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
        <ModalInner tabIndex="0" className="modal-inner modal-login">
          <div className="login-logo"></div>
          <div className="login-title">로그인을 하여 주시기 바랍니다.</div>
          <div className="login-form">
            <div className="flex-input">
              <label className="flex-label-left">
                id :{" "}
              </label>
              <input
                id="exampleId"
                name="id"
                placeholder="id"
                type="id"
                className="flex-label-right"
                onChange={onChange}
              />
            </div>
            <div className="flex-input">
              <label className="flex-label-left">
                Password :{" "}
              </label>
              <input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                className="flex-label-right"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="login-button-component">
            <button className="primary common-button login-button" onClick={loginButton}>
              로그인
            </button>
            <button className="secondary common-button sign-in-button">회원가입</button>
            <button className="secondary common-button find-id-password-button">아이디/비밀번호 찾기</button>
          </div>
          {/* <div style={{padding:"20px 20px 20px 20px"}}>
            <br></br>
            <p># 다음은 로그인 폼 UI를 어떻게 할지, 또는 권한을 무엇으로 드려야 할지 고민중입니다.</p>
            <p> berkleylim16@gmail.com 으로 아이디어를 제시해주시면 감사드립니다. </p>
          </div> */}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

export default LoginModal;

// ModalComponent.defaultProps = {
//   closable: true,
//   maskClosable: true,
//   visible: false
// }

LoginModal.propTypes = {
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
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 500px;
  height: 550px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  // padding: 40px 20px;
  // padding: 0 150px 10px 150px;
`;

// max-width: 1000px;

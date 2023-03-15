// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as React from "react";
import "./App.css";
import "./Corstest";
import HeaderComponent from "./components/common/HeaderComponent";
import FooterComponent from "./components/common/FooterComponent";
import IntroductionComponent from "./components/introduction/IntroductionComponent";
import CareerComponent from "./components/career/CareerComponent";
// import ProjectComponent from "./components/project/ProjectComponent";
import ProjectComponentSample from "./components/project/ProjectComponentSample";
import AppComponent from "./components/AppComponent";
import TogetherComponent from "./components/together/TogetherComponent";
import Login from "./components/login/login";

function App() {
  // 프록시 설정 참조 : https://junhyunny.github.io/information/react/react-proxy/

  let [isLogin, setIsLogin] = useState(false);

  // 로그인 모달
  const [modalVisiable, setModalVisiable] = useState(false);
  // const [unmountOnClose, setUnmountOnClose] = useState(true);

  // 여기서 isLogin 상태를 jwt 토큰값이 존재시에만 ㅇㅋ
  // useEffect(() => {
  //   // sessionStorage.getItem('loginUser') === 'admin' ?
  //   // setIsLogin(true) :
  //   // setIsLogin(false)
  // }, [isLogin, modal]);
  useEffect(() => {
    // sessionStorage.getItem('loginUser') === 'admin' ?
    // setIsLogin(true) :
    // setIsLogin(false)
  }, [isLogin]);

  const openModal = () => {
    setModalVisiable(true)
  };
  const closeModal = () => {
    setModalVisiable(false)
  };


  // 여기서 jwt token 정보를 저장한다
  // const toggleLogin = (id, password) => {
  //   LoginService.login(id, password);
  //   setIsLogin(!isLogin);
  //     LoginService.logout();
  //     setIsLogin();
  // };

  const toggleLogout = () => {
    // setModalVisiable(!modalVisiable)
    setIsLogin(false)
  }
  const toggleLogin = () => {
    setModalVisiable(!modalVisiable)
    // setIsLogin(true)
  }

  return (
    <div className="App">
    {
     modalVisiable && 
      <Login 
      visible={modalVisiable}
      closable={true}
      maskClosable={true}
      onClose={closeModal}
      setIsLogin={setIsLogin}
      setModalVisiable={setModalVisiable}
      />
    }

      <Router>
        <HeaderComponent
          isLogin={isLogin}
          openModal={openModal}
          toggleLogout={toggleLogout}
          toggleLogin={toggleLogin}
          />

        {/* <Corstest /> */}
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <AppComponent isLogin={isLogin} setIsLogin={setIsLogin} />
              }
            />
            <Route
              path="/introduction"
              element={<IntroductionComponent isLogin={isLogin} />}
            />
            <Route
              path="/career"
              element={<CareerComponent isLogin={isLogin} />}
            />
            {/* <Route
              path="/project"
              element={<ProjectComponent isLogin={isLogin} />}
            /> */}
            <Route
              path="/project"
              element={<ProjectComponentSample isLogin={isLogin} />}
            />
            <Route
              path="/together"
              element={<TogetherComponent isLogin={isLogin} />}
            />
          </Routes>
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

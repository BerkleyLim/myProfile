// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as React from "react";
import "./App.css";
import "./Corstest";
import HeaderComponent from "./components/common/HeaderComponent";
import FooterComponent from "./components/common/FooterComponent";
import IntroductionComponent from "./components/introduction/IntroductionComponent";
import IntroductionFormComponent from "./components/introduction/IntroductionFormComponent";
import CareerComponent from "./components/career/CareerComponent";
import CareerFormComponent from "./components/career/CareerFormComponent";
import SkillFormComponent from "./components/career/SkillFormComponent";
import ProjectComponent from "./components/project/ProjectComponent";
import ProjectComponentSample from "./components/project/ProjectComponentSample";
import AppComponent from "./components/AppComponent";
import TogetherComponent from "./components/together/TogetherComponent";
import LoginService from "./service/LoginService";
import LoginModalComponent from "./components/login/LoginModalComponent";

function App() {
  // 프록시 설정 참조 : https://junhyunny.github.io/information/react/react-proxy/

  let [isLogin, setIsLogin] = useState(false);

  // 로그인 모달
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

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

  // 여기서 jwt token 정보를 저장한다
  const toggleLogin = (id, password) => {
    LoginService.login(id, password);
    setIsLogin(!isLogin);
      LoginService.logout();
      setIsLogin();
  };

  // const openModal = () => {
  //   return <LoginModalComponent modal={modal} toggle={toggle} />;
  // }

  // const DOMAIN_LOCAL = "http://localhost:3000";
  const BACK_END_LOCAL = "http://localhost:8080";
  // const AWS_SERVER = "http://35.90.180.8:8080";

  // const url = DOMAIN_LOCAL;
  const url = BACK_END_LOCAL;
  return (
    <div className="App">
    {/* {modal && <LoginModalComponent modal={modal} toggle={toggle} />} */}
    <LoginModalComponent modal={modal} toggle={toggle} />

      <Router>
        <HeaderComponent
          isLogin={isLogin}
          url={url}
          toggleLogin={toggleLogin}
          />

        {/* <Corstest /> */}
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <AppComponent isLogin={isLogin} setIsLogin={setIsLogin} toggle={toggle} />
              }
            />
            <Route
              path="/introduction"
              element={<IntroductionComponent isLogin={isLogin} />}
            />
            <Route
              path="/introduction-form/:ino"
              element={<IntroductionFormComponent isLogin={isLogin} />}
            />
            <Route
              path="/career"
              element={<CareerComponent isLogin={isLogin} />}
            />
            <Route
              path="/career-form/:cno"
              element={<CareerFormComponent isLogin={isLogin} />}
            />
            <Route
              path="/skill-form/:category/:no/:rootNo"
              element={<SkillFormComponent isLogin={isLogin} />}
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

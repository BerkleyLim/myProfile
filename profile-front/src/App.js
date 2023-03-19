import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import "./App.css";
import "./Corstest";
import HeaderComponent from "./components/common/HeaderComponent";
import FooterComponent from "./components/common/FooterComponent";
import IntroductionComponent from "./components/introduction/IntroductionComponent";
import CareerComponent from "./components/career/CareerComponent";
import ProjectComponent from "./components/project/ProjectComponent";
import AppComponent from "./components/AppComponent";
import TogetherComponent from "./components/together/TogetherComponent";
import Login from "./components/login/login";

import { useDispatch } from "react-redux";

function App() {
  // 프록시 설정 참조 : https://junhyunny.github.io/information/react/react-proxy/
  // 로그인 모달
  const [modalVisiable, setModalVisiable] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalVisiable(true);
  };
  const closeModal = () => {
    setModalVisiable(false);
  };

  const toggleLogout = () => {
    dispatch({ type: "logout" });
  };
  const toggleLogin = () => {
    setModalVisiable(!modalVisiable);
  };

  return (
    <div className="App">
      {modalVisiable && (
        <Login
          visible={modalVisiable}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          setModalVisiable={setModalVisiable}
        />
      )}

      <Router>
        <HeaderComponent
          openModal={openModal}
          toggleLogout={toggleLogout}
          toggleLogin={toggleLogin}
        />

        {/* <Corstest /> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<AppComponent />} />
            <Route path="/introduction" element={<IntroductionComponent />} />
            <Route path="/career" element={<CareerComponent />} />
            <Route path="/project" element={<ProjectComponent />} />
            <Route path="/together" element={<TogetherComponent />} />
          </Routes>
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

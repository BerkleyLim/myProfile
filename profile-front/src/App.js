import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import "./App.css";
import "./Corstest";
import HeaderComponent from "./components/common/HeaderComponent";
import FooterComponent from "./components/common/FooterComponent";
import Introduction from "./components/introduction/index";
import Career from "./components/career/index";
import Project from "./components/project/index";
import AppComponent from "./components/AppComponent";
// import TogetherComponent from "./components/together/TogetherComponent";
// import Together from "./components/together/index";
import Board from "./components/board/index";
import AdminPage from "./components/admin/index";
import Login from "./components/login/login";
import Print from "./components/print/index";

import { useDispatch } from "react-redux";
import RequestIndex from "./components/request/index";

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
        {!window.location.href.includes("/admin") && (
          <HeaderComponent
            openModal={openModal}
            toggleLogout={toggleLogout}
            toggleLogin={toggleLogin}
          />
        )}

        {/* <Corstest /> */}
        <div className={!window.location.href.includes("/admin") && "container"}>
          <Routes>
            <Route path="/" element={<AppComponent />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/career" element={<Career />} />
            <Route path="/project" element={<Project />} />
            <Route path="/board" element={<Board />} />
            {/* <Route path="/print" element={<Print />} /> */}
            <Route path="/request" element={<RequestIndex />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>

        {!window.location.href.includes("/admin") && <FooterComponent />}
      </Router>
    </div>
  );
}

export default App;

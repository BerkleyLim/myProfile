import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import "./Corstest";
import HeaderComponent from "./components/common/HeaderComponent";
import FooterComponent from "./components/common/FooterComponent";
import Introduction from "./components/introduction/index";
import Skill from "./components/skill/index";
import Project from "./components/project/index";
import AppComponent from "./components/AppComponent";
// import TogetherComponent from "./components/together/TogetherComponent";
// import Together from "./components/together/index";
import Board from "./components/admin/board/index";
import AdminPage from "./components/admin/index";
import Login from "./components/login/login";
import styles from "./App.module.scss";

import { useDispatch } from "react-redux";
import RequestIndex from "./components/request/index";
import { useQuery } from "react-query";

import URI from './util/URI'
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  // 프록시 설정 참조 : https://junhyunny.github.io/information/react/react-proxy/
  // 로그인 모달
  const [modalVisiable, setModalVisiable] = useState(false);
  const dispatch = useDispatch();

  const masterHeader = useSelector(state => state.masterHeader)

  const { isLoading, error, data } = useQuery("masterHeader", () => {
    URI.get(process.env.REACT_APP_API_ROOT + "master/header/")
      .then((response) => {
        // console.log(response);
        dispatch({type:"setAllMasterHeader", masterHeader: response.data})
      })
      .catch((e) => {
        console.error(e);
      });
  });
  // header 화면 렌더링
  useEffect(()=> {
    URI.get(process.env.REACT_APP_API_ROOT + "master/header/")
      .then((response) => {
        console.log(response.data)
        dispatch({type:"setAllMasterHeader", masterHeader: response.data})
      })
      .catch((e) => {
        console.error(e)
      })
    }, [])
    console.log(masterHeader)

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
    <div className={`${styles?.App}`}>
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
        {!window.location.href.includes("/admin") ? (
          <div className={`${styles?.container}`}>
            <Routes>
              <Route path="/" element={<AppComponent />} />

              <Route path="/introduction" element={<Introduction />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/project" element={<Project />} />
              <Route path="/request" element={<RequestIndex />} />
            </Routes>
          </div>
        ) : (
          <div>
            <AdminPage />
          </div>
        )}

        {!window.location.href.includes("/admin") && <FooterComponent />}
      </Router>
    </div>
  );
}

export default App;

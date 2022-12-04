import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import HeaderColumn from '.HeaderColumn'
// import { StaticRouter as NavLink } from "react-router-dom/server";
// import LoginService from '../../service/LoginService'

export default function HeaderComponent(props) {
  let navigate = useNavigate();

  // 로그인 관련 모달
  const [loginModal, setLoginModal] = useState(false);

  const movePage = (manu) => {
    navigate(manu);
  };

  const handleLoginClick = (data) => {
    // window.alert(data);
    // let session = LoginService.login(data);
    // alert(session);
    props.onLogin(data);
  };

  const handleLogoutClick = () => {
    props.onLogout();
    document.location.reload();
  };

  const searchMenu = (keyword) => {
    if (keyword === "login") {
      // 로그인
      // this.setState({loginStatus: true});
      handleLoginClick(keyword);
      // this.props.onLogin();
      // window.alert(this.state.loginStatus);
    } else if (keyword === "logout") {
      // 로그아웃
      // this.setState({loginStatus: false});
      handleLogoutClick();
      // window.alert(this.state.loginStatus);
    } else {
      // 검색
    }
  };

  return (
    <div className="header">
      <div className="navbar navbar-expand-lg">
        <div className="nav container-fluid">
          <a
            className="nav nav-link"
            aria-current="page"
            href="http://localhost:8080/" 
          >
            My.Dev{" "}
          </a>
          {/* 소개, 이력 및 기술, 프로젝트, 파트너 모집*/}
          {
            HeaderColumn.map((column, index) => 
            
            <li className="nav-item" key={index}>
              <button
                className={column.className}
                onClick={() => movePage(column.linkPath)}
              >
                {column.title}
              </button>
            </li>
            )
          }
          <form className="d-flex">
            <input
              id="search-keyword"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light"
              onClick={() =>
                searchMenu(document.getElementById("search-keyword").value)
              }
            >
              Search
            </button>
          </form>
          <li class="nav-item">
            <button className="nav-link" onClick="info_print()">
              <FontAwesomeIcon icon={faPrint} />
            </button>
          </li>
          {props.isLogin ? (
            // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
            <li className="nav-item">
              <button className="btn" onClick={handleLogoutClick}>
                로그아웃
              </button>
            </li>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import HeaderColumn from "./HeaderColumn";
import LoginModalComponent from '../login/LoginModalComponent'
// import { StaticRouter as NavLink } from "react-router-dom/server";
// import LoginService from '../../service/LoginService'

export default function HeaderComponent({ isLogin, toggleLogin, url }) {
  let navigate = useNavigate();

  const movePage = (manu) => {
    navigate(manu);
  };


  const searchMenu = (keyword) => {
      // 검색
  };

  return (
    <div className="header">
      <div className="navbar navbar-expand-lg">
        <div className="nav container-fluid">
          <a
            className="nav nav-link"
            aria-current="page"
            href="http://localhost:3000/"
          >
            My.Dev{" "}
          </a>
          {/* 소개, 이력 및 기술, 프로젝트, 파트너 모집*/}
          {HeaderColumn.map((column, index) => (
            <li className="nav-item" key={index}>
              <button
                className={column.className}
                onClick={() => movePage(column.linkPath)}
              >
                {column.title}
              </button>
            </li>
          ))}
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
          <li className="nav-item">
            <button className="nav-link">
              <FontAwesomeIcon icon={faPrint} />
            </button>
          </li>
          <li className="nav-item ">
              {
                // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
                isLogin ? 
            <button className="nav-link" onClick={toggleLogin}>
              로그아웃 
            </button>
            :
            <button className="nav-link" onClick={toggleLogin}>
              로그인
            </button>
              }
          </li>
          <></>
        </div>
      </div>
    </div>
  );
}

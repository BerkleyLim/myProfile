import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";
// import { StaticRouter as NavLink } from "react-router-dom/server";
// import LoginService from '../../service/LoginService'

export default function HeaderComponent(props) {
  let navigate = useNavigate();
  // constructor(props) {
  //   super(props);
  //   this.searchMenu = this.searchMenu.bind(this);
  //   this.handleLoginClick = this.handleLoginClick.bind(this);
  //   this.handleLogoutClick = this.handleLogoutClick.bind(this);
  //   this.state = {
  //     isLogin: this.props.isLogin,
  //     onLogin: this.props.onLogin,
  //     onLogout: this.props.onLogout
  //   };
  // }

  // info_print() {
  //   let initBody = document.body;
  //   let hiddenBtn = document.querySelector('.print-button'); 
  //   let hiddenHeader = document.querySelector('#header');
  //   let hiddenNavbar = document.querySelector('.navbar-device');
  //   let hiddenClearfix = document.querySelector('.clearfix');

  //   window.onbeforeprint = function () {
  //     hiddenBtn.style.display = "none";
  //     hiddenHeader.style.display = "none";
  //     hiddenNavbar.style.display = "none";
  //     hiddenClearfix.style.display = "none";
  //     document.body = document.querySelector('.main-container');
  //   }
  //   window.onafterprint = function () {
  //     hiddenBtn.style.display = "block";
  //     hiddenHeader.style.display = "block";
  //     hiddenNavbar.style.display = "block";
  //     hiddenClearfix.style.display = "block";
  //     document.body = initBody;
  //   }
  //   window.print();
  // }

  const movePage = (manu) => {
    navigate(manu);
  }

  const handleLoginClick = (data) => {
    // window.alert(data);
    // let session = LoginService.login(data);
    // alert(session);
    props.onLogin(data);
  }

  const handleLogoutClick = () => {
    props.onLogout();
    document.location.reload();
  }

  const searchMenu = (keyword) => {
    // console.log(this.state.loginStatus)
    // window.alert(keyword);
    if (keyword === "1qa2wad234ewg67uy7t89ouy43ertdrfgedrtedr") {
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
    // window.alert(sessionStorage.length);  
    // window.alert(this.state.isLogin);

  }


  return (
    <div className='header'>
      <div className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="http://localhost:3000">My.Dev </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <li className="nav-item">
              <button className="nav-link active" aria-current="page" onClick={() => movePage('/introduction')}>
                소개
              </button>
            </li>
            <li class="nav-item">
              <button className="nav-link" onClick={() => movePage('/career')}>
                이력 및 기술
              </button>
            </li>
            <li class="nav-item">
              <button className="nav-link" onClick={() => movePage('/project')}>
                프로젝트
              </button>
            </li>
            {/* <li class="nav-item">
                              <Link to="/together" style={{ textDecoration: 'none' }}>
                                <button className="nav-link">
                                  파트너모집
                                </button>
                              </Link>
                            </li> */}
            <form className="d-flex">
              <input id="search-keyword" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" onClick={() => searchMenu(document.getElementById("search-keyword").value)}>Search</button>
            </form>
            <li class="nav-item">
              <button className="nav-link" onClick="info_print()">
                <FontAwesomeIcon icon={faPrint} />
              </button>
            </li>
            {props.isLogin ?
              // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
              <li className="nav-item"><button className="btn" onClick={handleLogoutClick}>로그아웃</button></li> :
              <></>}
          </div>
        </div>
      </div>
    </div>
  )
}



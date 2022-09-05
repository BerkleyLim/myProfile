import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from "react-router-dom";
// import { StaticRouter as NavLink } from "react-router-dom/server";
// import LoginService from '../../service/LoginService'

export default class HeaderComponent extends Component {
    constructor(props) {
      super(props);
      this.searchMenu = this.searchMenu.bind(this);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {
        isLogin: this.props.isLogin,
        onLogin: this.props.onLogin,
        onLogout: this.props.onLogout
      };
    }

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

    componentDidMount() {
      // this.handleLoginClick();
      // this.handleLogoutClick();
    }

    handleLoginClick(data) {
      // window.alert(data);
      // let session = LoginService.login(data);
      // alert(session);
      this.state.onLogin(data);
    }

    handleLogoutClick = () => {
      this.state.onLogout();
      document.location.reload();
    }
    
    searchMenu(keyword) {
      // console.log(this.state.loginStatus)
      // window.alert(keyword);
      if (keyword === "1qa2wad234ewg67uy7t89ouy43ertdrfgedrtedr") {
        // 로그인
        // this.setState({loginStatus: true});
        this.handleLoginClick(keyword);
        // this.props.onLogin();
        // window.alert(this.state.loginStatus);
      } else if (keyword === "logout") {
        // 로그아웃
        // this.setState({loginStatus: false});
        this.handleLogoutClick();
        // window.alert(this.state.loginStatus);
      } else{
        // 검색  
        
      }
      // window.alert(sessionStorage.length);  
      // window.alert(this.state.isLogin);

    }
    render() {
      // const loginStatus = this.state.loginStatus;

      // let loginMenu = null;
      
      // if (sessionStorage.length > 0) {
      //   loginMenu = <li class="nav-item">로그아웃</li>;
      //   // console.log(loginStatus)
      // } else {
      //   loginMenu = null;
      //   // console.log(loginStatus)
      // }
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
                              <Link to="/introduction" style={{ textDecoration: 'none' }}>
                                <button className="nav-link active" aria-current="page" >
                                  소개
                                </button>
                              </Link>
                            </li>
                            <li class="nav-item">
                              <Link to="/career" style={{ textDecoration: 'none' }}>
                                <button className="nav-link">
                                  이력 및 기술
                                </button>
                              </Link>
                            </li>
                            <li class="nav-item">
                              <Link to="/project" style={{ textDecoration: 'none' }}>
                                <button className="nav-link">
                                  프로젝트
                                </button>
                              </Link>
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
                              <button className="btn btn-outline-light" onClick={() => this.searchMenu(document.getElementById("search-keyword").value)}>Search</button>
                            </form>
                            <li class="nav-item">
                              <button className="nav-link" onClick="info_print()">
                                <FontAwesomeIcon icon={faPrint} />
                              </button>
                            </li>
                            {this.state.isLogin ? 
                              // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
                              <li className="nav-item"><button className="btn" onClick={this.handleLogoutClick}>로그아웃</button></li>: 
                              <></>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



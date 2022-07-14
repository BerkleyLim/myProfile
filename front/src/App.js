// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import * as React from "react";
import './App.css';
import './Corstest';
import HeaderComponent from './components/common/HeaderComponent'
import FooterComponent from './components/common/FooterComponent'
import IntroductionComponent from './components/introduction/IntroductionComponent'
import CareerComponent from './components/career/CareerComponent'
import ProjectComponent from './components/project/ProjectComponent'
import AppComponent from './components/AppComponent'
import TogetherComponent from './components/together/TogetherComponent'
import LoginService from './service/LoginService';

// 참조 : https://velog.io/@yaytomato/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%90%EC%84%9C-%EC%95%88%EC%A0%84%ED%95%98%EA%B2%8C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0
// onLogin = (email, password) => {
// 	const data = {
// 		email,
// 		password,
// 	};
// 	axios.post('/login', data).then(response => {
// 		const { accessToken } = response.data;

// 		// API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
// 		axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

// 		// accessToken을 localStorage, cookie 등에 저장하지 않는다!

// 	}).catch(error => {
// 		// ... 에러 처리
// 	});
// };

// 참조 : 
// 1) https://velog.io/@chosh91/React-%EC%9E%90%EC%8B%9D-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-%EB%B6%80%EB%AA%A8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-state-%EB%B0%94%EA%BE%B8%EA%B8%B0
// 2) https://velog.io/@exoluse/React-15.-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90



function App() {
  // 프록시 설정 참조 : https://junhyunny.github.io/information/react/react-proxy/

  let [isLogin, setIsLogin] = useState(false);


  const onLogout = () => {
    // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
    // sessionStorage.removeItem('user_id')
    console.log(isLogin);
    LoginService.logout();
    // setIsLogin(false);
    // App 으로 이동(새로고침)
    // document.location.href = '/'
  }

  const onLogin = (data) => {
    LoginService.login(data);
    // if (sessionStorage.getItem('loginUser') == "admin") {
    //   setIsLogin(true);
    // } else {
    //   setIsLogin(false);
    // }
    // setIsLogin(true);
    // document.location.href = '/'
  }

  // setIsLogin((sessionStorage.getItem('loginUser') == "admin") ? true : false);

  return (

    // <div className='App'>
    <Router>
      <HeaderComponent isLogin={(sessionStorage.getItem('loginUser') == "admin") ? true : false} onLogout={onLogout} onLogin={onLogin} />

      {/* <Corstest /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<AppComponent isLogin={(sessionStorage.getItem('loginUser') == "admin") ? true : false} onLogout={onLogout} onLogin={onLogin} />} />
          <Route path="introduction" element={<IntroductionComponent isLogin={(sessionStorage.getItem('loginUser') == "admin") ? true : false} />} />
          <Route path="career" element={<CareerComponent />} />
          <Route path="project" element={<ProjectComponent />} />
          <Route path="together" element={<TogetherComponent />} />
        </Routes>
      </div>

      <FooterComponent />
    </Router>
    // </div>
  );
}

export default App;

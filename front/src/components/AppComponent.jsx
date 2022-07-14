import React, { Component } from 'react'
import LoginService from '../service/LoginService';

export default class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : "",
            pwd : "",
            isLogin: this.props.isLogin,
            onLogin: this.props.onLogin,
            onLogout: this.props.onLogout
        };
        // this.onLogout = this.onLogout.bind();
        this.onClickLogin = this.onClickLogin.bind();
    }

    // onLogout() {
    // 	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
    //     // App 으로 이동(새로고침)
    //     this.props.isLogin=true;
    //     document.location.href = '/'
    // }

    // onLogout() {
    // 	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
    //     // sessionStorage.removeItem('user_id')
    //     this.state.setIsLogin(false);
    //     // App 으로 이동(새로고침)
    //     document.location.href = '/'
    // }

    onClickLogin() {
        let data ={
            mno: 1,
            id: this.state.id,
            password: this.state.pwd
        }
        this.state.onLogin(this.state.id);
    }

    render() {
        return (
            <div>
                {this.state.isLogin ? 
                // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
                <div>
                    <div>
                        <h2>Main 페이지</h2>
                    </div>
                    <div>
                        <button type='button' onClick={this.state.onLogout}>Logout</button>
                    </div>
                </div> : 
                <div>
                    <h2>Login</h2>
                    <div>
                        <label htmlFor='input_id'>ID : </label>
                        <input type='text' name='input_id' value={this.state.id} />
                    </div>
                    <div>
                        <label htmlFor='input_pw'>PW : </label>
                        <input type='password' name='input_pw' value={this.state.pwd}  />
                    </div>
                    <div>
                        <button type='button' onClick={this.state.onClickLogin}>Login</button>
                    </div>
                </div>}
            </div>
        )
    }
}

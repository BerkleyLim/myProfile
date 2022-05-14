import React, { Component } from 'react'

export default class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind();
    }

    onLogout() {
    	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        // App 으로 이동(새로고침)
        this.props.isLogin=true;
        document.location.href = '/'
    }

    onLogout() {
    	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        sessionStorage.removeItem('user_id')
        this.props.isLogin=false;
        // App 으로 이동(새로고침)
        document.location.href = '/'
    }

    render() {
        return (
            <div>
                {this.props.isLogin ? 
                // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
                <div>
                    <div>
                        <h2>Main 페이지</h2>
                    </div>
                    <div>
                        <button type='button' onClick={this.onLogout}>Logout</button>
                    </div>
                </div> : 
                <div>
                    <h2>Login</h2>
                    <div>
                        <label htmlFor='input_id'>ID : </label>
                        <input type='text' name='input_id' value={this.inputId} onChange={this.handleInputId} />
                    </div>
                    <div>
                        <label htmlFor='input_pw'>PW : </label>
                        <input type='password' name='input_pw' value={this.inputPw} onChange={this.handleInputPw} />
                    </div>
                    <div>
                        <button type='button' onClick={this.onClickLogin}>Login</button>
                    </div>
                </div>}
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class AppComponent extends Component {
    onLogout = () => {
    	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        sessionStorage.removeItem('user_id')
        // App 으로 이동(새로고침)
        document.location.href = '/'
    }

    render() {
        return (
            <div>
                {prop.isLogin ? 
                // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
                <div>
                    <div>
                        <h2>Main 페이지</h2>
                    </div>
                    <div>
                        <button type='button' onClick={onLogout}>Logout</button>
                    </div>
                </div> : 
                <div>
                    <h2>Login</h2>
                    <div>
                        <label htmlFor='input_id'>ID : </label>
                        <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
                    </div>
                    <div>
                        <label htmlFor='input_pw'>PW : </label>
                        <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
                    </div>
                    <div>
                        <button type='button' onClick={onClickLogin}>Login</button>
                    </div>
                </div>}
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class CareerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>

                <h1>경력사항</h1>
                <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                            <tr>
                                <td>기간</td>
                                <td>근무 부서 및 직책</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2019.05 ~ 2020.03</td>
                                <td>(주) JSR .INC  AGV 엔지니어 근무</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h1>학력사항</h1>
                <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                            <tr>
                                <td>기간</td>
                                <td>학교명 및 졸업여부</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2009.03 ~ 2012.02</td>  
                                <td>초지고등학교 졸업</td>
                            </tr>
                            <tr>
                                <td>2012.03 ~ 2016.02</td>
                                <td>신안산대학교 전문학사 졸업</td></tr>
                            <tr>
                                <td>2016.03 ~ 2018.08</td>
                                <td>수원대학교 학사 졸업</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h1>기술</h1>
                <div className="d-flex flex-column bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <div className="p-2 bd-highlight">Programming Language</div>
                            <div className="p-2 bd-highlight">자바 및 자바스크립트를 다룰 수 있다.</div>
                        </div>
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                java
                                <div className="d-flex flex-column bd-highlight mb-3"> 
                                    <div className="p-2 bd-highlight">spring MVC</div>
                                    <div className="p-2 bd-highlight">spring boot</div>
                                    <div className="p-2 bd-highlight">JSP</div>
                                    <div className="p-2 bd-highlight">Servlet</div>
                                </div> 
                            </div>
                            <div className="p-2 bd-highlight">
                                javascript
                                <div>JQuery</div>
                                <div>ReactJS</div>
                                <div>Handlebarjs</div>
                            </div>
                            <div className="p-2 bd-highlight">
                                Groovy
                                <div>Gradle</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bd-highlight">
                        Database
                        <div>
                            <p>
                                MySQL
                                <div>JDBC</div>
                            </p>
                            <p>
                                MyBatis
                            </p>
                            <p>
                                Data Modeling
                            </p>
                        </div>
                    </div>
                    <div className="p-2 bd-highlight">
                        OS
                        <div>
                            <p>
                                AWS
                            </p>
                            <p>
                                Linux
                            </p>
                            <p>
                                Windows
                            </p>
                        </div>
                    </div>
                    <div className="p-2 bd-highlight">
                        Mark-up Language
                        <div>
                            <p>
                                html5
                            </p>
                            <p>
                                XML
                            </p>
                            <p>
                                Mark-down
                            </p>
                        </div>
                    </div>
                    <div className="p-2 bd-highlight">
                        API
                        <div>
                            <p>
                                Daum
                                <div>주소</div>
                            </p>
                            <p>
                                Naver
                                <div>로그인</div>
                                <div>지도</div>
                            </p>
                            <p>
                                Facebook
                                <div>로그인</div>
                                <div>챗봇</div>
                            </p>
                            <p>
                                Google
                                <div>로그인</div>
                            </p>
                            <p>
                                Kakao
                                <div>로그인</div>
                                <div>결제요청</div>
                            </p>
                        </div>
                    </div>
                    <div className="p-2 bd-highlight">
                        Other skill
                        <div>
                            <p>
                                css
                            </p>
                            <p>
                                Ajax
                            </p>
                            <p>
                                JSON
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

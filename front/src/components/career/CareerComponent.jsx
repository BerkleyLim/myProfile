import React, { Component } from 'react'

export default class CareerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>

                <h1>이력사항</h1>
                <div class="table-responsive">
                    <table class="table align-middle">
                        <tbody>
                            <tr>
                                <td>2019.05 ~ 2020.03</td>
                                <td>(주) JSR .INC - AGV 엔지니어 근무</td>
                            </tr>
                            <tr>
                                <td>2018.02 ~ 2018.08</td>
                                <td>(주)비트캠프 - "자바기반 웹&앱 양성과정" 수료</td>
                            </tr>
                            <tr>
                                <td>2016.03 ~ 2018.08</td>
                                <td>수원대학교 컴퓨터학과 학사 졸업</td>
                            </tr>
                            <tr>
                                <td>2012.03 ~ 2016.02</td>
                                <td>신안산대학교 컴퓨터정보과 전문학사 졸업</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                

                <h1>기술</h1>
                <div className="d-flex flex-column bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                        <div className="p-2 bd-highlight">
                            Programming Language - 자바 및 자바스크립트를 다룰 수 있다.
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    java - 자바를 다룰 수 있다
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">spring MVC</div>
                                        <div className="p-2 bd-highlight">spring boot</div>
                                        <div className="p-2 bd-highlight">JSP</div>
                                        <div className="p-2 bd-highlight">Servlet</div>
                                    </div> 
                                </div>
                                <div className="p-2 bd-highlight">
                                    javascript
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">JQuery</div>
                                        <div className="p-2 bd-highlight">ReactJS</div>
                                        <div className="p-2 bd-highlight">Handlebarjs</div>
                                    </div> 
                                </div>
                                <div className="p-2 bd-highlight">
                                    Groovy
                                    <div>Gradle</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bd-highlight">
                        <div className="p-2 bd-highlight">
                            Database - 데이터베이스를 다룰 수 있다
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    MySQL - 마이에스큐엘을 다룰 수 있다
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">JDBC</div>
                                    </div> 
                                </div>
                                <div className="p-2 bd-highlight">
                                    MyBatis
                                    {/* <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">Handlebarjs</div>
                                    </div>  */}
                                </div>
                                <div className="p-2 bd-highlight">
                                    Data-Modeliing
                                    {/* <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">Handlebarjs</div>
                                    </div>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bd-highlight">
                        <div className="p-2 bd-highlight">
                            OS - 운영체제를 다룰 수 있다
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    AWS - 아마존 웹 시스템을 다룰 수 있다
                                    {/* <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">JDBC</div>
                                    </div>  */}
                                </div>
                                <div className="p-2 bd-highlight">
                                    Linux
                                    {/* <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">Handlebarjs</div>
                                    </div>  */}
                                </div>
                                <div className="p-2 bd-highlight">
                                    Windows
                                    {/* <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">Handlebarjs</div>
                                    </div>  */}
                                </div>
                            </div>
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

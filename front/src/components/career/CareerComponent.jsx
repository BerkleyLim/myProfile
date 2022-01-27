import React, { Component } from 'react'
import './career.css'
import CareerService from '../../service/CareerService'

export default class CareerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            careers: [],
            skills: []
        }
    }

    componentDidMount() {
        CareerService.getCareer().then((res) => {
            this.setState({ careers: res.data});
        });
        CareerService.getSkill().then((res)=> {
            this.setState({ skills: res.data});
        });
    }

    render() {
        return (
            <div>

                <h1>이력사항</h1>
                <div className="career">
                    {
                        this.state.careers.map(
                            career =>
                            <>
                                <div className="col-md-2">{career.plan}</div>
                                <div className="col">{career.detail}</div>
                            </>
                            
                        )
                    }
                </div>
                

                <h1>기술</h1>
                <pre>
                    <h5>
                        Programming Language - 자바 및 자바스크립트를 다룰 수 있다.
                    </h5>
                    <blockquote>
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                java - 자바를 다룰 수 있다
                                <blockquote>
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">spring MVC</div>
                                        <div className="p-2 bd-highlight">spring boot</div>
                                        <div className="p-2 bd-highlight">JSP</div>
                                        <div className="p-2 bd-highlight">Servlet</div>
                                    </div> 
                                </blockquote>
                            </div>
                            <div className="p-2 bd-highlight">
                                javascript
                                <blockquote>
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">JQuery</div>
                                        <div className="p-2 bd-highlight">ReactJS</div>
                                        <div className="p-2 bd-highlight">Handlebarjs</div>
                                    </div> 
                                </blockquote>
                            </div>
                            <div className="p-2 bd-highlight">
                                Groovy
                                <blockquote>
                                <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">Gradle</div>
                                    </div> 
                                </blockquote>
                            </div>
                        </div>
                    </blockquote>
                </pre>

                <pre>
                    <h5>
                        Database - 데이터베이스를 다룰 수 있다
                    </h5>
                    <blockquote>
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                MySQL - 마이에스큐엘을 다룰 수 있다
                                <blockquote>
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">My-Batis</div>
                                    </div> 
                                </blockquote>
                            </div>
                            <div className="p-2 bd-highlight">
                                Data-Modeling
                                <blockquote>
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">JQuery</div>
                                        <div className="p-2 bd-highlight">ReactJS</div>
                                        <div className="p-2 bd-highlight">Handlebarjs</div>
                                    </div> 
                                </blockquote>
                            </div>
                        </div>
                    </blockquote>
                    </pre>

                    <pre>
                    <h5>
                        OS - 운영체제를 다룰 수 있다
                    </h5>
                    <blockquote>
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                AWS - 아마존 웹 시스템을 다룰 수 있다
                            </div>
                            <div className="p-2 bd-highlight">
                                Linux
                            </div>
                            <div className="p-2 bd-highlight">
                                Windows
                            </div>
                        </div>
                    </blockquote>
                    </pre>

                    <pre>
                    <h5>
                        Mark-Up Language
                    </h5>
                    <blockquote>
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                html5
                            </div>
                            <div className="p-2 bd-highlight">
                                XML
                            </div>
                            <div className="p-2 bd-highlight">
                                Mark-down
                            </div>
                        </div>
                    </blockquote>
                    </pre>

                    <pre>
                    <h5>
                        API
                    </h5>
                    <blockquote>
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                Daum
                                <blockquote>
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">주소</div>
                                    </div> 
                                </blockquote>
                            </div>
                            <div className="p-2 bd-highlight">
                                Naver
                                <blockquote>
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">로그인</div>
                                        <div className="p-2 bd-highlight">지도</div>
                                    </div> 
                                </blockquote>
                            </div>
                            <div className="p-2 bd-highlight">
                                Facebook
                                <blockquote>
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">로그인</div>
                                        <div className="p-2 bd-highlight">챗봇</div>
                                    </div> 
                                </blockquote>
                            </div>
                            <div className="p-2 bd-highlight">
                                Google
                                <blockquote>
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">로그인</div>
                                    </div> 
                                </blockquote>
                            </div>
                            <div className="p-2 bd-highlight">
                                Kakao
                                <blockquote>
                                    <div className="d-flex flex-column bd-highlight mb-3"> 
                                        <div className="p-2 bd-highlight">로그인</div>
                                        <div className="p-2 bd-highlight">결제요청</div>
                                    </div> 
                                </blockquote>
                            </div>
                        </div>
                    </blockquote>
                    </pre>
                    
                    <pre>
                    <h5>
                        Other Skill
                    </h5>
                    <blockquote>
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                CSS
                            </div>
                            <div className="p-2 bd-highlight">
                                Ajax
                            </div>
                            <div className="p-2 bd-highlight">
                                JSON
                            </div>
                        </div>
                    </blockquote>
                </pre>
            </div>
        )
    }
}

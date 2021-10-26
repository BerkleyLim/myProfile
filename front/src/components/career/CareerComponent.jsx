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

                <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                            <tr><h1>기술</h1></tr>
                        </thead>
                        <tbody>
                            <tr>
                                Programming Language
                            </tr> 
                            <tr>
                                <td>Java</td>  
                                <td></td>
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
                
                <h1>프로젝트</h1>
                <div class="card mb-3">
                    <div class="row g-0">
                    <h3 class="card-title align-middle">Interior</h3>
                    <div class="col-md-4">
                        {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text">개발기간 : 2018.06 ~ 2018.08</p>
                        <p class="card-text">링크 : http://www.interior.xyz</p>
                        <p class="card-text">사용기술 : Java, Spring MVC, HTML, CSS, JavaScript, MySQL, Aphach-Tomcat, My-Batis, Gradle, AWS, Handlebarsjs</p>
                        <p class="card-text">개발자 : 임현식, 성현동, 강동현, 이상경, 경명수, 박서경</p>
                        <p class="card-text">프로젝트 설명 : </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="row g-0">
                    <h3 class="card-title align-middle">C사 부천 물류센터 스마트 팩토리 AGV 피킹 시스템 설치</h3>
                    <div class="col-md-4">
                        {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text">개발기간 : 2019.08 ~ 2019.11</p>
                        <p class="card-text">링크 : </p>
                        <p class="card-text">사용기술 : Java, Spring MVC, HTML, CSS, JavaScript, MySQL, nGinX, AutoCAD, SLAM, QR code</p>
                        <p class="card-text">개발자 : Mo.Ben, 임현식, 문선영</p>
                        <p class="card-text">프로젝트 설명 : </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="row g-0">
                    <h3 class="card-title align-middle">MusicStyle</h3>
                    <div class="col-md-4">
                        {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <p class="card-text">개발기간 : 2019.01 ~ 2021.12</p>
                        <p class="card-text">링크 : http://www.musicstyle.xyz</p>
                        <p class="card-text">사용기술 : Java, Spring MVC, HTML, CSS, JavaScript, MySQL, Aphach-Tomcat, My-Batis, Gradle, AWS, Handlebarsjs</p>
                        <p class="card-text">개발자 : 임현식</p>
                        <p class="card-text">프로젝트 설명 : </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

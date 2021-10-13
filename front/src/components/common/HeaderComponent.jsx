// import './header.js'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import './header.js'

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.goIntroduction = this.goIntroduction.bind(this);
    this.goCareer = this.goCareer.bind(this);
  }

  goIntroduction() {
    // this.props.history.push('/introduction');
    this.props.window.location.href('/introduction');
  }

  goCareer() {
    this.props.history.push('/career');
  }

    render() {
        return (
            <div className='header'>
                <div>
                    S/W Developter Berkley Lim's HomePage
                </div>
                
                <div className='navbar navbar-expand-lg'>
                    <div className='container-fluid'>
                        <a class="navbar-brand" href="http://localhost:3000">My.Dev </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarColor02">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                                <button class="nav-link active" aria-current="page" onClick={this.goIntroduction}>소개</button>
                              </li>
                              <li class="nav-item">
                                <button class="nav-link" onClick={this.goCareer}>이력정보</button>
                              </li>
                              <li class="nav-item">
                                <button class="nav-link" onClick="#">프로젝트</button>
                              </li>
                              <li class="nav-item">
                                <button class="nav-link" onClick="#">개발신청</button>
                              </li>
                            </ul>
                            <form class="d-flex">
                              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                              <button class="btn btn-outline-light" type="submit">Search</button>
                            </form>
                            <FontAwesomeIcon icon={faPrint} onclick="info_print()"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



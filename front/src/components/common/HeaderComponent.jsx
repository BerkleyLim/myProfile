// import './header.js'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import './header.js'

const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
          {children}
  </div>
)


export default class HeaderComponent extends Component {
    render() {
        return (
            <div className='header'>
                <div>
                    S/W Developter Berkley Lim's HomePage
                </div>
                
                <div className='navbar navbar-expand-lg'>
                    <div className='container-fluid'>
                        <a className="navbar-brand" href="http://localhost:3000">My.Dev </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                <button className="nav-link active" aria-current="page" onClick={this.goIntroduction}>소개</button>
                              </li>
                              <li class="nav-item">
                                <button className="nav-link" onClick={this.goCareer}>이력정보</button>
                              </li>
                              <li class="nav-item">
                                <button className="nav-link" onClick="#">프로젝트</button>
                              </li>
                              <li class="nav-item">
                                <button className="nav-link" onClick="#">개발신청</button>
                              </li>
                            </ul>
                            <form className="d-flex">
                              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                              <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                            <FontAwesomeIcon icon={faPrint} onclick="info_print()"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



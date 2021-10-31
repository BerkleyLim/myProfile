// import './header.js'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import './header.js'
import {Link} from "react-router-dom";

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className='header'>
                <div className='navbar navbar-expand-lg'>
                    <div className='container-fluid'>
                        <a className="navbar-brand" href="http://localhost:3000">My.Dev </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/introduction">소개</Link>
                              </li>
                              <li class="nav-item">
                                <Link className="nav-link" to="/career">이력정보</Link>
                              </li>
                              <li class="nav-item">
                                <Link className="nav-link" to="/project">프로젝트</Link>
                              </li>
                              <li class="nav-item">
                                <Link className="nav-link" to="/together">파트너모집</Link>
                              </li>
                            </ul>
                            <form className="d-flex">
                              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                              <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                            <li class="nav-item">
                                <Link className="nav-link" onClick="info_print()">
                                  <FontAwesomeIcon icon={faPrint} />
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



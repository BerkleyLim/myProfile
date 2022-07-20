import React, { Component } from 'react'
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'
import { Link } from "react-router-dom";
import styled from 'styled-components'

export default class IntroductionFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            introductions: [],
            isLogin: this.props.isLogin,
        }


        // this.addContents = this.addContents.bind(this);
        // this.updateContents = this.updateContents.bind(this);
        this.deleteContents = this.deleteContents.bind(this);
    }

    componentDidMount() {
        IntroductionService.getIntroduction().then((res) => {
            this.setState({ introductions: res.data });
        });
    }


    // addContents() {
    //     this.props.history.push(`/introduction-create:_create`);
    // }

    // updateContents(ino) {
    //     this.props.history.push(`/introduction-update:/${ino}`);
    // }

    deleteContents() {
        // this.props.history.push(`/introduction-update/:ino`);
    }

    render() {
        return (
            <div>
                <h1>소개</h1>
                {
                    this.state.introductions.map(
                        introduction =>
                            <div id={introduction.ino} className="card">
                                <h5 className="card-header">{introduction.title}</h5>
                                <div className="card-body">
                                    <p className="card-text"> {introduction.contents}</p>
                                </div>
                                {this.state.isLogin ?
                                    <div className="row">
                                        <Link to ={`/introduction-update/${introduction.ino}`} style={{ textDecoration: 'none' }}>
                                            <button className="col md-6" onClick={() => this.updateContents(introduction.ino)} > 내용 수정 </button>
                                        </Link>
                                        <button className="col md-6" onClick={this.deleteContents} > 내용 삭제 </button>
                                    </div>
                                    : <></>
                                }
                            </div>
                    )
                }
                {this.state.isLogin ?
                    <div>
                        <Link to='/introduction-create:_create' style={{ textDecoration: 'none' }}>
                            <ContentAddButton className="row"> 
                            내용 추가 
                            </ContentAddButton>
                        </Link>
                    </div>

                    : <></>
                }



            </div>
        )
    }
}

const ContentAddButton = styled.button`
    padding: 5vh
`

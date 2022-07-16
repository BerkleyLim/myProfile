import React, { Component } from 'react'
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'
import styled from 'styled-components'

export default class IntroductionFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            introductions: [],
            isLogin: this.props.isLogin,
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentsHandler = this.changeContentsHandler.bind(this);
    }

    componentDidMount() {
        IntroductionService.getIntroduction().then((res) => {
            this.setState({ introductions: res.data });
        });
    }

    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }

    changeContentsHandler = (event) => {
        this.setState({ contents: event.target.value });
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
                                {this.state.isLogin ? <button > 내용 수정 </button> : <></>}
                            </div>
                    )
                }


                {this.state.isLogin ? <ContentAddButton onclick={null}> 내용 추가 </ContentAddButton> : <></>}

            </div>
        )
    }
}

const ContentAddButton = styled.button`
    padding: 5vh
    
`

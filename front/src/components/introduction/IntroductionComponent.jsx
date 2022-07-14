import React, { Component } from 'react'
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'
import styled from 'styled-components'

export default class IntroductionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            introductions: [],
            isLogin: this.props.isLogin
        }
    }

    componentDidMount() {
        IntroductionService.getIntroduction().then((res) => {
            this.setState({ introductions: res.data });
        });
    }

    render() {

        return (
            <div>
                <h1>소개</h1>
                {
                    this.state.isLogin?
                    <>
                        {
                            this.state.introductions.map(
                                introduction =>
                                    <div className="card">
                                        <input type="text" placeholder="title" name={introduction.title} className="card-header"
                                            value={introduction.title} onChange={this.changeTitleHandler} />
                                        <ContentTextArea placeholder="contents" name={introduction.contents} className="card-body"
                                            value={introduction.contents} onChange={this.changeTitleHandler} />
                                        <button> 내용 수정 </button>
                                    </div>

                            )
                        }

                        <ContentAddButton onclick={null}> 내용 추가 </ContentAddButton>
                    </>
                    :
                    <>
                        {
                            this.state.introductions.map(
                                introduction =>
                                    <div id={introduction.ino} className="card">
                                        <h5 className="card-header">{introduction.title}</h5>
                                        <div className="card-body">
                                            <p className="card-text"> {introduction.contents}</p>
                                        </div>
                                    </div>
                            )
                        }
                    </>
                }
            </div>
        )
    }
}

const ContentAddButton = styled.button`
    padding: 5vh
    
`

const ContentTextArea = styled.textarea`
    resize:none;
    overflow:visible;
    min-height: 40vh;
`
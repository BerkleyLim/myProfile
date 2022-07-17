import React, { Component } from 'react'
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'
import styled from 'styled-components'

export default class IntroductionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            ino: 0,
            title: '',
            contents: '',
            view: 0,
            isLogin: this.props.isLogin,
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
                    <div id={this.state.ino} className="card">
                    <input type="text" placeholder="title" name={this.state.title} className="card-header"
                        value={this.state.title} onChange={this.changeTitleHandler} />
                    <ContentTextArea placeholder="contents" name={this.state.contents} className="card-body"
                        value={this.state.contents} onChange={this.changeContentsHandler} />
                    <button onClick={null}> 내용 수정 </button>
                </div>
                {this.state.isLogin ? <ContentAddButton onclick={null}> 내용 추가 </ContentAddButton> : <></>}

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
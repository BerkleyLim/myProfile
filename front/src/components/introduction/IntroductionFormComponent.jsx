import React, { Component } from 'react'
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'
import styled from 'styled-components'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'

export default class IntroductionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

            ino: this.props.match.params.no,
            title: '',
            contents: '',
            // viewNumber: 0,
            isLogin: this.props.isLogin,
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentsHandler = this.changeContentsHandler.bind(this);
        this.createIntroduction = this.createIntroduction.bind(this);
    }

    componentDidMount() {
        if (this.state.ino === '_create') {
            return;
        } else {
            this.setState({
                title: this.state.title,
                contents: this.state.contents,
                // viewNumber: viewNumber
            });
        }
    }

    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }

    changeContentsHandler = (event) => {
        this.setState({ contents: event.target.value });
    }

    createIntroduction = (event) => {
        
    }



    render() {
        const showManu = (this.state.ino === '_create') ? <>추가</> : <>수정</>;


        return (
            <div>
                <h1>소개</h1>
                {
                    (this.state.isLogin) ?
                        <div id={this.state.ino} className="card">
                            <input type="text" placeholder="title" name={this.state.title} className="card-header"
                                value={this.state.title} onChange={this.changeTitleHandler} />
                            <ContentTextArea placeholder="contents" name={this.state.contents} className="card-body"
                                value={this.state.contents} onChange={this.changeContentsHandler} />
                            <ContentAddButton onclick={null}> {showManu} </ContentAddButton>
                            <ContentAddButton onclick={null}> 취소 </ContentAddButton>
                        </div>
                        :
                        <></>
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
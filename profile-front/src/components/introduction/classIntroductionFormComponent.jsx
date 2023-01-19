import React, { Component} from 'react'
import { useNavigate } from 'react-router-dom';
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

export default class IntroductionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ino: '_create',
            title: '',
            contents: '',
            viewNumber: 0,
            isLogin: this.props.isLogin,
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentsHandler = this.changeContentsHandler.bind(this);
        this.createIntroduction = this.createIntroduction.bind(this);
        this.updateIntroduction = this.updateIntroduction.bind(this);
        this.cancelIntroduction = this.cancelIntroduction.bind(this);
    }

    componentDidMount() {
        // let {param} = useParams();
        // alert(param);
        if (this.state.ino === '_create') {
            return;
        } else {
            IntroductionService.getOneIntroduction(this.state.ino)
            .then((res) => {
                let introduction = res.data;
                console.log("introduction => " + JSON.stringify(introduction));

                this.setState({
                    ino: introduction.ino,
                    title: introduction.title,
                    contents: introduction.contents,
                    viewNumber: introduction.viewNumber
                });
            })
            .catch((error) => {
                alert(error);
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

    updateIntroduction = (event) => {

    }

    cancelIntroduction = (event) => {
        // let navigate = useNavigate();
        // navigate(`/introduction`);
        this.props.useNavigate(`/introduction`)
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
                            <ContentAddButton onclick={() => this.cancelIntroduction}> 취소 </ContentAddButton>
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
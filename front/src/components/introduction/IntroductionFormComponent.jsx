import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

export default function IntroductionComponent(props) {
    let [ino, setIno] = useState('_create');
    let [title, setTitle] = useState('');
    let [contents, setContents] = useState('');
    let [viewNumber, setViewNumber] = useState(0);
    let [isLogin, setIsLogin] = useState(props.isLogin);

    useEffect(() => {
        if (ino === '_create') {
            return;
        } else {
            IntroductionService.getOneIntroduction(ino)
            .then((res) => {
                let introduction = res.data;
                console.log("introduction => " + JSON.stringify(introduction));

                setIno(introduction.ino);
                setTitle(introduction.title);
                setContents(introduction.contents);
                setViewNumber(introduction.viewNumber);
            })
            .catch((error) => {
                alert(error);
            });
        }
    }, []) 

    const changeTitleHandler = (event) => {
        setTitle(event.target.value);
    }

    const changeContentsHandler = (event) => {
        setContents(event.target.value);
    }

    const createIntroduction = (event) => {
        
    }

    const updateIntroduction = (event) => {

    }

    const cancelIntroduction = (event) => {
        // let navigate = useNavigate();
        // navigate(`/introduction`);
        this.props.useNavigate(`/introduction`)
    }



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

const ContentAddButton = styled.button`
    padding: 5vh
    
`

const ContentTextArea = styled.textarea`
    resize:none;
    overflow:visible;
    min-height: 40vh;
`
import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'
import styled from 'styled-components'

export default function IntroductionComponent(props) {
    const param = useParams();

    let [ino, setIno] = useState(param.ino);
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
        // alert(param)
    }

    const updateIntroduction = (event) => {

    }

    const cancelIntroduction = () => {
        // let navigate = useNavigate();
        // navigate(`/introduction`);
        alert(param);
        // this.props.useNavigate(`/introduction`)
    }



    const showManu = (ino === '_create') ? 
    <ContentAddButton onclick={createIntroduction}>추가</ContentAddButton> 
    : <ContentAddButton onclick={updateIntroduction}>수정</ContentAddButton>;

    return (
        <div>
            <h1>소개</h1>
            {
                (props.isLogin) ?
                    <div id={ino} className="card">
                        <input type="text" placeholder="title" name={title} className="card-header"
                            value={title} onChange={changeTitleHandler} />
                        <ContentTextArea placeholder="contents" name={contents} className="card-body"
                            value={contents} onChange={changeContentsHandler} />
                        {showManu}
                        <ContentAddButton onclick={cancelIntroduction}> 취소 </ContentAddButton>
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
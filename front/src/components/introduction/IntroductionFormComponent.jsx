import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'
import styled from 'styled-components'

export default function IntroductionFormComponent(props) {
    const param = useParams();
    const navigate = useNavigate();
  
    let [ino, setIno] = useState(param.ino);
    let [title, setTitle] = useState('');
    let [contents, setContents] = useState('');
    let [viewNumber, setViewNumber] = useState('');

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
        event.preventDefault();
        let Introduction = {
            title: title,
            contents: contents
        }
        IntroductionService.createIntroduction(Introduction)
            .then((res) => {
                alert("success");
                navigate(-1);
            })
            .catch((error) => {
                alert(error);
            });
    }

    const updateIntroduction = () => {
        let Introduction = {
            ino: ino,
            title: title,
            contents: contents,
            viewNumber: viewNumber
        }
        IntroductionService.updateIntroduction(ino,Introduction)
            .then((res) => {
                alert("success");
                navigate(-1);
            })
            .catch((error) => {
                alert(error);
            });
    }

    const cancelIntroduction = () => {
        // alert("실패");
        // navigate(`/introduction`, {replace:false});
        navigate(-1);
    }



    const showManu = (ino === '_create') ? 
    <ContentAddButton onClick={createIntroduction}>추가</ContentAddButton> 
    : <ContentAddButton onClick={updateIntroduction}>수정</ContentAddButton>;

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
                        <ContentAddButton onClick={cancelIntroduction}> 취소 </ContentAddButton>
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
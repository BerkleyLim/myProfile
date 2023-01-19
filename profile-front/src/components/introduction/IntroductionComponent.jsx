import React, { useEffect, useState } from 'react'
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

export default function IntroductionComponent({isLogin}) {
    let [introductions, setIntroductions] = useState([]);
    let navigate = useNavigate();


    useEffect(() => {
        IntroductionService.getIntroduction().then((res) => {
            setIntroductions(res.data)});
        console.log(isLogin);
    },[])


    const addContents = () => {
        navigate(`/introduction-form/_create`);
    }

    const updateContents = (ino) => {
        navigate(`/introduction-form/${ino}`);
    }

    const deleteContents = (ino) => {
        IntroductionService.deleteIntroduction(ino);
        navigate(0);
    }

    return (
        <div>
            <h1>소개</h1>
            {
                introductions.map(
                    (introduction, index) => (
                        <div key={index} id={introduction.ino} className="card">
                            <h5 className="card-header">{introduction.title}</h5>
                            <div className="card-body">
                                <span className="card-text"> {introduction.contents}</span>
                            </div>
                            {isLogin ?
                                <div className="card-footer row">
                                    <button className="col md-6" onClick={() => updateContents(introduction.ino)} > 내용 수정 </button>
                                    <button className="col md-6" onClick={() => deleteContents(introduction.ino)} > 내용 삭제 </button>
                                </div>
                                : <></>
                            }
                        </div>
                ))
            }
            {isLogin ?
                <div>
                    <ContentAddButton className="row" onClick={addContents}> 
                    내용 추가 
                    </ContentAddButton>
                </div>
                : <></>
            }



        </div>
    )
}

const ContentAddButton = styled.button`
    padding: 5vh
`

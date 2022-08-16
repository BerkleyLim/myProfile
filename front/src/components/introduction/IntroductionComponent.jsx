import React, { useEffect, useState } from 'react'
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'

export default function IntroductionFormComponent(props) {
    let [introductions, setIntroductions] = useState([]);
    let navigate = useNavigate();


    useEffect(() => {
        IntroductionService.getIntroduction().then((res) => {
            setIntroductions(res.data)});
        console.log(props.isLogin);
    },[])


    const addContents = () => {
        // this.props.history.push(`/introduction-create:_create`);
        navigate(`/introduction-form/_create`);
        // this.props.useNavigate(`/introduction-create:_create`,
        //             {replace:false});
    }

    const updateContents = (ino) => {
        navigate(`/introduction-form/${ino}`);
        // this.props.useNavigate(`/introduction-update:/${ino}`,
        //             {replace:false});
    }

    const deleteContents = () => {
        // this.props.history.push(`/introduction-update/:ino`);
        IntroductionService.deleteIntroduction();
    }

    return (
        <div>
            <h1>소개</h1>
            {
                introductions.map(
                    (introduction) => (
                        <div id={introduction.ino} className="card">
                            <h5 className="card-header">{introduction.title}</h5>
                            <div className="card-body">
                                <p className="card-text"> {introduction.contents}</p>
                            </div>
                            {props.isLogin ?
                                <div className="row">
                                    <button className="col md-6" onClick={() => updateContents(introduction.ino)} > 내용 수정 </button>
                                    <button className="col md-6" onClick={deleteContents} > 내용 삭제 </button>
                                </div>
                                : <></>
                            }
                        </div>
                ))
            }
            {props.isLogin ?
                <div>
                    <ContentAddButton className="row" onClick={addContents}> 
                    내용 추가 
                    </ContentAddButton>
                    {/* <Link to='/introduction-create:_create' style={{ textDecoration: 'none' }}>
                    </Link> */}
                </div>

                : <></>
            }



        </div>
    )
}

const ContentAddButton = styled.button`
    padding: 5vh
`

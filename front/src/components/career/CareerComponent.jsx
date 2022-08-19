import React, { useState, useEffect } from 'react'
import './career.css'
import CareerService from '../../service/CareerService'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

export default function CareerComponent(props) {
    let navigate = useNavigate();
    let [careers, setCareers] = useState([]);
    let [skills, setSkills] = useState([]);

    useEffect(() => {
        CareerService.getCareer().then((res) => {
            setCareers(res.data);
        }).catch((error) => alert(error));
        // CareerService.getSkill().then((res) => {
        //     setSkills(res.data);
        // });
    }, []);

    const careerAdd = () => {
        navigate(`/career-form/_create`);
    }

    const careerUpload = (cno) => {
        navigate(`/career-form/${cno}`);
    }

    const careerDelete = (cno) => {
        CareerService.deleteCareer(cno);
        navigate(0);
    }

    const skillAddContents = () => {
        // navigate(`/skill-form/_create`);
    }


    const skillUpdateContents = (ino) => {
        // navigate(`/skill-form/${ino}`);
    }

    const skillDeleteContents = (ino) => {
        // SkillService.deleteSkills(ino);
        navigate(0);
    }

    return (
        <div>
            <h1>이력사항</h1>
            <div className="career">
                {
                    careers.map(
                        (career) => (
                            <div className="row">
                                <div className="col-md-3">{career.startDate} ~ {career.endDate}</div>
                                <div className="col">{career.detail}</div>
                                {props.isLogin ?
                                    <div className="row">
                                        <button className="col md-6" onClick={() => careerUpload(career.cno)} > 이력 수정 </button>
                                        <button className="col md-6" onClick={() => careerDelete(career.cno)} > 이력 삭제 </button>
                                    </div>
                                    : <></>
                                }
                            </div>
                        ))
                }
                {props.isLogin ?
                    <div>
                        <ContentAddButton className="row" onClick={careerAdd}>
                            이력사항 추가
                        </ContentAddButton>
                    </div>

                    : <></>
                }
            </div>


            <h1>기술</h1>
            {
                skills.map(
                    skill =>
                        <pre>
                            <h5>
                                {skill.bigSkill} - {skill.bigSkillDetail}
                            </h5>
                            <blockquote>
                                <div className="d-flex flex-column bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">
                                        {skill.mediumSkill} - {skill.mediumSkillDetail}
                                        <blockquote>
                                            <div className="d-flex flex-column bd-highlight mb-3">
                                                <div className="p-2 bd-highlight">{skill.smailSkill} - {skill.smailSkillDetail}</div>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                            </blockquote>
                        </pre>

                )
            }
            {props.isLogin ?
                <div>
                    <ContentAddButton className="row" onClick={skillAddContents}>
                        보유 기술 추가
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
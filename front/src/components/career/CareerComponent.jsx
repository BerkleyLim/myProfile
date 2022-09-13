import React, { useState, useEffect } from 'react'
import './career.css'
import CareerService from '../../service/CareerService'
import SkillService from '../../service/SkillService'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

export default function CareerComponent(props) {
    let navigate = useNavigate();
    let [careers, setCareers] = useState([]);
    let [bigSkills, setBigSkills] = useState([]);
    let [mediumSkills, setMediumSkills] = useState([]);
    let [smallSkills, setSmallSkills] = useState([]);

    useEffect(() => {
        CareerService.getCareer().then((res) => {
            setCareers(res.data);
        }).catch((error) => alert(error));
        SkillService.getSkill("big").then((res) => {
            // console.log(res.data[0]);
            setBigSkills(res.data);
            // alert("오류")
        }).catch((error) => alert(error));
        SkillService.getSkill("medium").then((res) => {
            setMediumSkills(res.data);
            // console.log(res.data[0]);
            // alert(res.data);
        }).catch((error) => alert(error));
        SkillService.getSkill("small").then((res) => {
            setSmallSkills(res.data);
            console.log(res.data[0]);
            // alert(res.data);
        }).catch((error) => alert(error));
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

    const skillAdd = (category, rootNo) => {
        navigate(`/skill-form/${category}/_create/${rootNo}`);
    }


    const skillUpdate = (no, category, rootNo) => {
        navigate(`/skill-form/${category}/${no}/${rootNo}`);
        // alert(error);
    }

    const skillDelete = (no, category) => {
        SkillService.deleteSkill(no, category);
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
                bigSkills.map(
                    (bigSkill) =>
                        <pre>
                            <h5>
                                {bigSkill.skill} - {bigSkill.detail}
                            </h5>
                            {props.isLogin ?
                                <div className="row">
                                    <button className="col md-6" onClick={() => skillUpdate(bigSkill.no, 'big', -1)} > 수정 </button>
                                    <button className="col md-6" onClick={() => skillDelete(bigSkill.no, 'big', -1)} > 삭제 </button>
                                </div>
                                : <></>
                            }
                            <blockquote>
                                {
                                    mediumSkills.map(
                                        (mediumSkill) =>
                                            <>
                                                {
                                                    (bigSkill.no == mediumSkill.bigSkill_no) ?
                                                        <div className="d-flex flex-column bd-highlight mb-3">
                                                            <div className="p-2 bd-highlight">
                                                                {mediumSkill.skill} - {mediumSkill.detail}
                                                                {props.isLogin ?
                                                                    <div className="row">
                                                                        <button className="col md-6" onClick={() => skillUpdate(mediumSkill.no, 'medium', bigSkill.no)} > 수정 </button>
                                                                        <button className="col md-6" onClick={() => skillDelete(mediumSkill.no, 'medium', bigSkill.no)} > 삭제 </button>
                                                                    </div>
                                                                    : <></>
                                                                }
                                                                <blockquote>
                                                                    {
                                                                        smallSkills.map(
                                                                            (smallSkill) =>
                                                                                <>
                                                                                    {
                                                                                        (mediumSkill.no == smallSkill.mediumSkill_no) ?
                                                                                            <div className="d-flex flex-column bd-highlight mb-3">
                                                                                                <div className="p-2 bd-highlight">{smallSkill.skill} - {smallSkill.detail}</div>
                                                                                                {
                                                                                                    props.isLogin ?
                                                                                                        <div className="row">
                                                                                                            <button className="col md-6" onClick={() => skillUpdate(smallSkill.no, 'small', mediumSkill.no)} > 수정 </button>
                                                                                                            <button className="col md-6" onClick={() => skillDelete(smallSkill.no, 'small', mediumSkill.no)} > 삭제 </button>
                                                                                                        </div>
                                                                                                        : <></>
                                                                                                }
                                                                                            </div>
                                                                                            : <></>
                                                                                    }
                                                                                </>
                                                                        )
                                                                    }
                                                                    {props.isLogin ?
                                                                        <div>
                                                                            <ContentAddButton className="row" onClick={() => skillAdd('small', mediumSkill.no)}>
                                                                                {mediumSkill.skill} 기술 추가
                                                                            </ContentAddButton>
                                                                        </div>

                                                                        : <></>
                                                                    }
                                                                </blockquote>
                                                            </div>
                                                        </div>
                                                        :
                                                        <></>
                                                }
                                            </>

                                    )
                                }

                                {props.isLogin ?
                                    <div>
                                        <ContentAddButton className="row" onClick={() => skillAdd('medium', bigSkill.no)}>
                                            {bigSkill.skill} 기술 추가
                                        </ContentAddButton>
                                    </div>

                                    : <></>
                                }
                            </blockquote>
                        </pre>
                )
            }
            {props.isLogin ?
                <div>
                    <ContentAddButton className="row" onClick={() => skillAdd('big', -1)}>
                        대분류 기술 추가
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
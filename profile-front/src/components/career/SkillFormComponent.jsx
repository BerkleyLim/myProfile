import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./career.css"
import SkillService from '../../service/SkillService'
import styled from 'styled-components'

export default function SkillFormComponent(props) {
    const param = useParams();
    const navigate = useNavigate();

    let [no, setNo] = useState(param.no);
    let [skills, setSkills] = useState('');
    let [details, setDetails] = useState('');
    let [rootNo, setRootNo] = useState(param.rootNo);

    useEffect(() => {
        if (no === '_create') {
            // console.log(param);
            return;
        } else {
            // console.log(param);
            SkillService.getOneSkill(no,param.category)
            .then((res) => {
                let skill = res.data;
                console.log(param.category + "Skill => " + JSON.stringify(skill));

                setNo(skill.no)
                setSkills(skill.skill);
                setDetails(skill.detail);
            })
            .catch((error) => {
                alert(error);
            });
        }
    }, []) 

    const changeSkillHandler = (event) => {
        setSkills(event.target.value);
    }

    const changeDetailHandler = (event) => {
        setDetails(event.target.value);
    }

    const createSkill = (event) => {
        event.preventDefault();
        let Skill;
        if (rootNo < 0) {
            Skill = {
                skill : skills,
                detail : details
            }
        } else {
            if (param.category === 'medium') {
                Skill = {
                    skill : skills,
                    detail : details,
                    bigSkill_no : rootNo
                }
            } else {
                Skill = {
                    skill : skills,
                    detail : details,
                    mediumSkill_no : rootNo
                }
            }
        }
        SkillService.createSkill(Skill,param.category)
            .then((res) => {
                alert("success");
                navigate(-1);
            })
            .catch((error) => {
                alert(error);
            });
    }

    const updateSkill = () => {
        let Skill;
        if (rootNo < 0) {
            Skill = {
                no: no,
                skill : skills,
                detail : details
            }
        } else {
            if (param.category === 'medium') {
                Skill = {
                    no : no,
                    skill : skills,
                    detail : details,
                    bigSkill_no : rootNo
                }
            } else {
                Skill = {
                    no: no,
                    skill : skills,
                    detail : details,
                    mediumSkill_no : rootNo
                }
            }
        }
        SkillService.updateSkill(no,Skill,param.category)
            .then((res) => {
                alert("success");
                navigate(-1);
            })
            .catch((error) => {
                alert(error);
            });
    }

    const cancelSkill = () => {
        // navigate(`/introduction`, {replace:false});
        navigate(-1);
    }



    const showManu = (no === '_create') ? 
    <ContentAddButton onClick={createSkill}>추가</ContentAddButton> 
    : <ContentAddButton onClick={updateSkill}>수정</ContentAddButton>;

    return (
        <div>
            <h1>소개</h1>
            {
                (props.isLogin) ?
                    <div id={no} className="card">
                        <input type="text" placeholder="skills" name={skills} className="card-header"
                            value={skills} onChange={changeSkillHandler} />
                        <ContentTextArea  placeholder="details" name={details} className="card-header"
                            value={details} onChange={changeDetailHandler} />
                            {showManu}
                        <ContentAddButton onClick={cancelSkill}> 취소 </ContentAddButton>
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
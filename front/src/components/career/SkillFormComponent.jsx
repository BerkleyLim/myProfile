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

    useEffect(() => {
        if (no === '_create') {
            console.log(param);
            return;
        } else {
            SkillService.getOneCareer(cno,param.category)
            .then((res) => {
                let skill = res.data;
                console.log(param.category + "Skill => " + JSON.stringify(skill));

                setNo(skill.no)
                setSkills(skill.skill);
                setDetails(skill.Detail);
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
        let Skill = {
            skill : skills,
            detail : details
        }
        SkillService.createCareer(Skill,param.category)
            .then((res) => {
                alert("success");
                navigate(-1);
            })
            .catch((error) => {
                alert(error);
            });
    }

    const updateSkill = () => {
        let Skill = {
            no: no,
            skill : skills,
            detail : details
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



    const showManu = (cno === '_create') ? 
    <ContentAddButton onClick={createCareer}>추가</ContentAddButton> 
    : <ContentAddButton onClick={updateCareer}>수정</ContentAddButton>;

    return (
        <div>
            <h1>소개</h1>
            {
                (props.isLogin) ?
                    <div id={cno} className="card">
                        <input type="text" placeholder="skills" name={skills} className="card-header"
                            value={skills} onChange={changeSkillHandler} />
                        <input type="text" placeholder="details" name={details} className="card-header"
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
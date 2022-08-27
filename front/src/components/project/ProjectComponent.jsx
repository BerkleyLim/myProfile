import React, { useEffect, useState } from 'react'
import ProjectService from '../../service/ProjectService'
import { useNavigate } from "react-router-dom";
import p_Interior from '../../image/project/Interior.jpg'
import p_MusicStyle from '../../image/project/MusicStyle.png'
import p_Chanel from '../../image/project/Chanel.jpg'
import styled from 'styled-components'

export default function ProjectComponent(props) {
    let navigate = useNavigate();
    let [projects, setProjects] = useState([]);
    let [title, setTitle] = useState('clnewze');
    let [pno, setPno] = useState(0);
    let [img, setImg] = useState('../../image/project/MusicStyle.png');
    let [startDate, setStartDate] = useState('2019-1-1');
    let [endDate, setEndDate] = useState('2020-4-1');
    let [link, setLink] = useState('');
    let [startRunning, setStartRunning] = useState('');
    let [skills, setSkills] = useState('');
    let [people, setPeople] = useState(0);
    let [detail, setDetail] = useState('');
    let [isOperation, setIsOperation] = useState(0);

    useEffect(() => {
        ProjectService.getProject().then((res) => {
            setProjects(res.data);
        }).catch((error) => alert(error));
    }, []);


    return (
        <div>
            <h1>운영 상태 프로젝트</h1>
            {
                projects.map((project) =>
                    <>
                        {
                            (project.isOperation === 1) ?
                                <div class="card mb-3">
                                    <div class="row g-0">
                                        <h3 class="card-title align-middle">{project.title}</h3>
                                        <div class="col-md-4">
                                            <img src={project.img} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <p class="card-text">개발기간 : {project.startDate} ~ {project.endDate}</p>
                                                <p class="card-text">링크 : {project.link}</p>
                                                <p class="card-text">운영 시작 일 : {project.startRunning}</p>
                                                <p class="card-text">사용기술 : {project.skills}</p>
                                                <p class="card-text">프로젝트 인원 : {project.people}</p>
                                                <p class="card-text">프로젝트 설명 : {project.detail}  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <></>
                        }
                    </>
                )
            }

            <h1>진행 이력 프로젝트</h1>
        </div>
    )
}

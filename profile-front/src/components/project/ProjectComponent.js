import React, { useEffect, useState } from 'react';
import ProjectService from '../../service/ProjectService';

export default function ProjectComponent({ isLogin }) {
	let [projects, setProjects] = useState([]);

	useEffect(() => {
		ProjectService.getProject()
			.then((res) => {
				setProjects(res.data);
			})
			.catch((error) => alert(error));
	}, []);

	return (
		<div>
			<h1>운영 및 개발 진행 프로젝트</h1>
			{projects.map((project, index) => (
				<>
					{project.isOperation === 1 && (
						<div className="card mb-3" key={index}>
							<div className="row g-0">
								<h3 className="card-title align-middle">{project.title}</h3>
								<div className="col-md-4">
									{/* <img src={project.img} className="img-fluid rounded-start" alt="..." /> */}
									{/* <img src="/image/project/MusicStyle.png" className="img-fluid rounded-start" alt="..." /> */}
									{/* <img src={require("../../image/project/MusicStyle.png")} className="img-fluid rounded-start" alt="..." /> */}
									{/* <img src={require(project.img).default} className="img-fluid rounded-start" alt="..." /> */}
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<p className="card-text">
											개발기간 : {project.startDate} ~ {project.endDate}
										</p>
										<p className="card-text">링크 : {project.link}</p>
										<p className="card-text">운영 시작 일 : {project.startRunning}</p>
										<p className="card-text">사용기술 : {project.skills}</p>
										<p className="card-text">프로젝트 인원 : {project.people}</p>
										<p className="card-text">프로젝트 설명 : {project.detail} </p>
									</div>
								</div>
							</div>
						</div>
					)}
				</>
			))}

			<h1>진행 이력 프로젝트</h1>
			{projects.map((project, index) => (
				<>
					{project.isOperation === 0 && (
						<div className="card mb-3" key={index}>
							<div className="row g-0">
								<h3 className="card-title align-middle">{project.title}</h3>
								<div className="col-md-4">
									<img src={project.img} className="img-fluid rounded-start" alt="..." />
									{/* <img src={require(project.img)} className="img-fluid rounded-start" alt="..." /> */}
									{/* <img src={require("../../image/project/MusicStyle.png")} className="img-fluid rounded-start" alt="..." /> */}
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<p className="card-text">
											개발기간 : {project.startDate} ~ {project.endDate}
										</p>
										<p className="card-text">링크 : {project.link}</p>
										<p className="card-text">운영 시작 일 : {project.startRunning}</p>
										<p className="card-text">사용기술 : {project.skills}</p>
										<p className="card-text">프로젝트 인원 : {project.people}</p>
										<p className="card-text">프로젝트 설명 : {project.detail} </p>
									</div>
								</div>
							</div>
						</div>
					)}
				</>
			))}
		</div>
	);
}

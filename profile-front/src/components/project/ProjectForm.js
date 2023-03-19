import React from "react";

const ProjectForm = ({ project, index }) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <h3 className="card-title align-middle">{project.title}</h3>
          <div className="col-md-4">
            <img
              src={project.img}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                개발기간 : {project.startDate} ~ {project.endDate}
              </p>
              <p className="card-text">링크 : {project.link}</p>
              {project.isOperation === 1 && (
                <p className="card-text">
                  운영 시작 일 : {project.startRunning}
                </p>
              )}
              <p className="card-text">사용기술 : {project.skills}</p>
              <p className="card-text">프로젝트 인원 : {project.people}</p>
              <p className="card-text">프로젝트 설명 : {project.detail} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;

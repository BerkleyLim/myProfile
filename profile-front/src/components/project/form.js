import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ProjectDataTable = ({ project, index }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const user = useSelector(state => state.user);

  return (
    <div>
      {isUpdate ? (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="row">
              <h3 className="card-title align-middle col">
                <CustomTitleInput defaultValue={project.title} />
              </h3>
              <button className="col-md-1" onClick={() => setIsUpdate(false)}>
                수정 취소
              </button>
            </div>
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
                  개발기간 :{" "}
                  <CustomDateInput
                    type="month"
                    defaultValue={project.startDate}
                  />{" "}
                  ~{" "}
                  <CustomDateInput type="month" defaultValue={project.endDate} />
                </p>
                <p className="card-text">링크 : <CustomInput defaultValue={project.link}/></p>
                {project.isOperation === 1 && (
                  <p className="card-text">
                    운영 시작 일 : <CustomDateInput type="month" defaultValue={project.startRunning} />
                  </p>
                )}
                <p className="card-text">사용기술 : <CustomInput defaultValue={project.skills} /></p>
                <p className="card-text">프로젝트 인원 : <CustomInput defaultValue={project.people} /></p>
                <p className="card-text">프로젝트 설명 : <CustomInput defaultValue={project.detail} /> </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="row">
              <h3 className="card-title align-middle col">{project.title}</h3>
              { user.isLogin &&
                <button className="col-md-1" onClick={() => setIsUpdate(true)}>
                  수정 모드
                </button>
              }
            </div>
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
      )}
    </div>
  );
};

export default ProjectDataTable;

const CustomTitleInput = styled.input`
  width: 100%;
`;

const CustomDateInput = styled.input`
  width: 120px;
  type: date;
`;

const CustomInput = styled.input`
  width: 80%;
`;

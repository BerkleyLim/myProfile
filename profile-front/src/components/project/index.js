import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProjectDataTable from "./form";
import URI from "../../util/URI";

export default function ProjectComponent() {
  let [projects, setProjects] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/project/")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => alert(error));
  }, [setProjects]);

  const projectUpdate = (project) => {
		URI.post(process.env.REACT_APP_API_ROOT + "/api/project")
	};

  return (
    <div>
      {user.isLogin && <button>추가</button>}
      <h1>운영 및 개발 진행 프로젝트</h1>
      {projects
        .filter((p) => p.isOperation === 1)
        .map((project, index) => (
          <ProjectDataTable
            project={project}
            index={index}
            key={index}
            projectUpdate={projectUpdate}
          />
        ))}

      <h1>진행 이력 프로젝트</h1>
      {projects
        .filter((p) => p.isOperation === 0)
        .map((project, index) => (
          <ProjectDataTable
            project={project}
            index={index}
            key={index}
            projectUpdate={projectUpdate}
          />
        ))}
    </div>
  );
}

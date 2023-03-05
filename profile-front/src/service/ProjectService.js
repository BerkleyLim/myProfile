// import { noAuto } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios'

// const API_BASE_URI = "http://35.90.180.8:8080/api/project"
// const API_BASE_URI = "http://localhost:8080/api/project"
const API_BASE_URI = process.env.REACT_APP_API_ROOT + "/api/project"

class ProjectService {
    getProject() {
        return axios.get(API_BASE_URI + "/");
    }

    getOneProject(pno) {
        return axios.get(API_BASE_URI + "/" + pno);
    }

    createProject(project) {
        const axiosConfig = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        return axios.post(API_BASE_URI + "/", project, axiosConfig);
    }

    updateProject(pno, project) {
        return axios.put(API_BASE_URI + "/" + pno, project)
    }

    deleteProject(pno) {
        return axios.delete(API_BASE_URI + "/" + pno)
                    .then((res) => {
                        if(res.status === 200) {
                            alert("정상적으로 삭제 되었습니다");
                        }
                        else {
                            alert("삭제 오류")
                        }
                    })
                    .catch((error) => {alert(error)});
    }

}

export default new ProjectService();
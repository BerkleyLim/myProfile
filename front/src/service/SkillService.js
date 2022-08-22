import axios from 'axios'

const API_BASE_URI = "http://localhost:8080/api"

class SkillService {
    // 이력사항
    getSkill(category) {
        return axios.get(API_BASE_URI + "/skill/" + category + "/");
    }
    getOneSkill(sno, category) {
        return axios.get(API_BASE_URI + "/skill/" + category + "/" + sno);
    }
    createSkill(skill, category) {
        const axiosConfig = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        return axios.post(API_BASE_URI + "/skill/" + category + "/", skill, axiosConfig);
    }

    updateCareer(sno, skill, category) {
        return axios.put(API_BASE_URI + "/skill/"+ category + "/" + sno, skill)
    }

    deleteCareer(sno, category) {
        return axios.delete(API_BASE_URI + "/skill/" + category + "/" + sno)
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

export default new SkillService();
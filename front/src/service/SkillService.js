import axios from 'axios'

const API_BASE_URI = "http://localhost:8080/api"

class SkillService {
    // 이력사항
    getskill() {
        return axios.get(API_BASE_URI + "/skill/");
    }
    getOneSkill(sno) {
        return axios.get(API_BASE_URI + "/career/" + sno);
    }
    createSkill(skill) {
        const axiosConfig = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        return axios.post(API_BASE_URI + "/skill/", skill, axiosConfig);
    }

    updateCareer(sno, skill) {
        return axios.put(API_BASE_URI + "/skill/" + sno, skill)
    }

    deleteCareer(sno) {
        return axios.delete(API_BASE_URI + "/skill/" + sno)
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
import axios from 'axios'

// const API_BASE_URI = "http://35.90.180.8:8080/api"
const API_BASE_URI = "http://localhost:8080/api"

class CareerService {
    // 이력사항
    getCareer() {
        return axios.get(API_BASE_URI + "/career/");
    }
    getOneCareer(cno) {
        return axios.get(API_BASE_URI + "/career/" + cno);
    }
    createCareer(career) {
        const axiosConfig = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        return axios.post(API_BASE_URI + "/career/", career, axiosConfig);
    }

    updateCareer(cno, career) {
        debugger
        return axios.put(API_BASE_URI + "/career/" + cno, career)
    }

    deleteCareer(cno) {
        return axios.delete(API_BASE_URI + "/career/" + cno)
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

    // 기술
    // getSkill() {
    //     return axios.get(API_BASE_URI + "/skill");
    // }

}

export default new CareerService();
import axios from 'axios'

const API_BASE_URI = process.env.REACT_APP_API_ROOT + "introduction"

class IntroductionService {
    getIntroduction() {
        return axios.get(API_BASE_URI + "/");
    }

    getOneIntroduction(ino) {
        return axios.get(API_BASE_URI + "/" + ino);
    }

    createIntroduction(introduction) {
        const axiosConfig = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        return axios.post(API_BASE_URI + "/", introduction, axiosConfig);
    }

    updateIntroduction(ino, introduction) {
        // return axios.put(API_BASE_URI + "/" + ino, introduction)
        // return axios.put(API_BASE_URI + "/", introduction)
        return axios.post(API_BASE_URI + "/update", introduction)
    }

    deleteIntroduction(ino) {
        return axios.post(API_BASE_URI + "/delete/" + ino)
                    .then((res) => {
                        if(res.status === 200) {
                            alert("정상적으로 삭제 되었습니다");
                        }
                        else {
                            alert("삭제 오류")
                        }
                    })
                    .catch((error) => {alert(error)});
        // return axios.delete(API_BASE_URI + "/" + ino)
        //             .then((res) => {
        //                 if(res.status === 200) {
        //                     alert("정상적으로 삭제 되었습니다");
        //                 }
        //                 else {
        //                     alert("삭제 오류")
        //                 }
        //             })
        //             .catch((error) => {alert(error)});
    }

}

export default new IntroductionService();
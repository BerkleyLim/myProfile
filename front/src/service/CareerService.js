import axios from 'axios'

const API_BASE_URI = "http://localhost:8080/api/career"

class IntroductionService {
    getCareer() {
        return axios.get(API_BASE_URI);
    }

}

export default new IntroductionService();
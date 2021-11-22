import axios from "axios";

const API_BASE_URI =  "http://localhost:8080/api/"

class LoginService {
    login(){
        return axios.post(API_BASE_URI + "login");
    }

    logout(){
        return axios.post(API_BASE_URI + "logout");
    }
}

export default new LoginService();
import axios from "axios";

const API_BASE_URI =  "http://localhost:8080/"

class LoginService {
    login(data){
        return axios.request(API_BASE_URI + "login", data);
    }

    logout(){
        return axios.request(API_BASE_URI + "logout");
    }
}

export default new LoginService();
import axios from "axios";

const API_BASE_URI =  "http://localhost:8080/"

class LoginService {
    login(data){
        // return axios.post(API_BASE_URI + 'login',data)
        return axios({
            method:"POST",
            url: API_BASE_URI + 'login/',
            data:data
        })
    }

    logout(){
        return axios.request(API_BASE_URI + "logout");
    }
}

export default new LoginService();
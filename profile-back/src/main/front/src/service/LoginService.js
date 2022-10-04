import axios from "axios";
import qs from 'query-string';

const API_BASE_URI =  "http://localhost:8080/"

class LoginService {
    login(id){
        const axiosConfig = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        // alert(typeof(id));
        let Member = {
            mno: 1,
            id: id,
            password: id,
        };
        return axios.post(API_BASE_URI + 'login', Member, axiosConfig)
                    .then(response => {
                        // alert(response.data);
                        // alert(response.promise);
                        // alert(typeof(response));
                        sessionStorage.setItem('loginUser',response.data);
                        // alert(sessionStorage.getItem('loginUser'))
                    })
                    .catch(error => alert(error));
    }

    logout(){
        return axios.get(API_BASE_URI + "logout")
            .then(() => sessionStorage.removeItem('loginUser'))
            .catch(error => alert(error));
    }
}

export default new LoginService();
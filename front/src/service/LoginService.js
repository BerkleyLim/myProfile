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
        alert(typeof(id));
        // let data = {
        //     id: id,
        //     pwd: id,
        // };
        return axios.post(API_BASE_URI + 'login', {id:id}, axiosConfig).then(response => {alert(response)}).catch(error => alert(error));
    }

    logout(){
        return axios.request(API_BASE_URI + "logout");
    }
}

export default new LoginService();
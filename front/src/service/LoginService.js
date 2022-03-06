import axios from "axios";

const API_BASE_URI =  "http://localhost:8080/"

class LoginService {
    // login(data){
    //     return axios.request(API_BASE_URI + "login", data).then(response => {
 	// 	const { accessToken } = response.data;
    
    //     // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    //  		axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    
    //  		// accessToken을 localStorage, cookie 등에 저장하지 않는다!
    
    //  	}).catch(error => {
    //  		// ... 에러 처리
    //  	});
    // }

    // logout(){
    //     return axios.request(API_BASE_URI + "logout");
    // }
}

export default new LoginService();  
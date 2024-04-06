import {KAKAO_AUTH_URL} from "../share/Auth";
import kakaologo from "../images/kakao_login_medium_narrow.png";

const Login = () =>{

    const loginHandler = () =>{
        window.location.href = KAKAO_AUTH_URL;
    };
    
    return(
        <div>
            <img src = {kakaologo} onClick={loginHandler} alt ="카카오로그인 로고"/>
        </div>
    );
};
export  default  Login;
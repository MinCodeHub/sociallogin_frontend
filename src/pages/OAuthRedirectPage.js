import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';


const OAuthRedirectPage = () => {
    const [code, setCode] = useState(null);
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const codeParam = urlParams.get("code");
        setCode(codeParam);
    }, []);

    useEffect(() => {
        if (code) {
            axios.get('http://localhost:8080/kakao/callback', {
                params: {
                    code: code
                }
            })
                .then((r) => {
                    console.log("결과: "+JSON.stringify(r.data)); //json 형태로 받아와서 콘솔에 출력할 때는 string타입으로 바꿔줘야함
                    console.log("결과 타입: "+ typeof(r.data)); //object
                    setUserInfo(r.data);
                    localStorage.setItem('userInfo',JSON.stringify(r.data)); //유저 정보 저장
                    navigate('/loginSuccess');
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                });
        }
    }, [code]);

    useEffect(()=>{
        console.log("userInffofofo:", userInfo.profileImage);
    },[userInfo]);

    return (
        <div>
           로그인 중입니다.
        </div>
    );
}

export default OAuthRedirectPage;

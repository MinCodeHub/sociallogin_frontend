import {KAKAO_AUTH_URL} from "../share/Auth";
import kakaologo from "../images/kakao_login_medium_narrow.png";
import React, {useEffect, useState} from "react";

const LoginSuccess = () => {
    const [userInfo, setUserInfo] = useState({});
    const userInfostring = localStorage.getItem("userInfo");

    useEffect(() => {
        const JsonuserInfo = JSON.parse(userInfostring);
        setUserInfo(JsonuserInfo);
    }, []);


    return (
        <div>
            {userInfo.profileImage && (
                <div className="profile">
                    <div id="picture">
                        <img src={userInfo.profileImage} alt="Profile"/>
                    </div>
                    <div id="nickname">
                        <p>닉네임:  {userInfo.nickname}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
export default LoginSuccess;
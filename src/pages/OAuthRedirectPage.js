import React, {useEffect} from "react"
import axios from 'axios';

const OAuthRedirectPage = () => {

    const code = new URL(document.location.toString()).searchParams.get('code'); // 이상한코드가한가득

    useEffect(() => {
        axios.post('주소').then((r) => {
            console.log(r.data);
        })
    }, []);
    return (
        <div>
            로그인 중입니다.
        </div>
    );

}
export default OAuthRedirectPage;

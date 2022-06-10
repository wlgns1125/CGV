import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Signup = () => {

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="signup-image" />
                <div className="signup-info">
                    <span>CJ 회원이 되시면 하나의 통합된 회원 ID와 비밀번호로</span><br></br>
                    <span>CGV와 CJ ONE의 다양한 서비스를 이용하실 수 있습니다.</span>
                </div>
                <Link to="/signupForm" >
                    <div className="signup-button">
                        <span>CGV + CJ ONE 통합회원 가입</span>
                    </div>
                </Link>
            </div>
        </div>

    );
}

export default Signup;
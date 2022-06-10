import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const SignupForm = () => {

    return (
        <div className="signupForm-container">
            <div className="signupForm-header">
                <h1>CGV + CJ ONE 통합회원 가입</h1>
                <p>통합 아이디로  CJ ONE 브랜드 혜택도 받고! 포인트도 쌓고!</p>
            </div>
            <div className="signupForm-card">
                <div className="signupForm">
                    <div>
                        <h3>아이디</h3>
                        <input type="text" /> <button>중복 체크</button>
                    </div>
                    <div>
                        <h3>비밀번호</h3>
                        <input type="password" />
                    </div>
                    <div>
                        <h3>비밀번호 확인</h3>
                        <input type="password" />
                    </div>
                    <div>
                        <h3>이름</h3>
                        <input type="text" />
                    </div>
                    <div className="signupForm-signupButton">회원 가입하기</div>
                    <Link to="/loginForm">
                        <div className="signupForm-loginButton">로그인 하기</div>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default SignupForm;
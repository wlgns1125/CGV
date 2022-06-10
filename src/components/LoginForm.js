import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const LoginForm = () => {

    return (
        <div className="loginForm-container">
            <div className="loginForm-wrapper">
                <div className="loginForm-nav">
                    <div>로그인</div>
                    <div>비회원 예매</div>
                    <div>비회원 예매확인</div>
                </div>
                <div className="loginForm">
                    <div className="loginForm-header">
                        <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                    </div>
                    <div class="loginForm-contentBox">
                        <input type="text" title="아이디" id="txtUserId" name="txtUserId" required="required" />
                        <input type="password" title="패스워드" id="txtPassword" name="txtPassword" required="required" />
                        <div className="loginForm-outerButton">
                            <div className="loginForm-innerButton">
                                로그인
                            </div>
                        </div>
                    </div>
                    <div className="loginForm-footer">
                        <input type="checkbox" />
                        <span> 아이디 저장</span>
                        <label className="loginForm-footer-first">아이디 찾기 </label>
                        <label>비밀번호 찾기 </label>
                    </div>
                    <div className="loginForm-naver">
                        <img src="https://img.cgv.co.kr/image_gt/login/btn_loginNaver.jpg"></img>
                    </div>
                </div>
                <div class="loginForm-signup">
                    <div className="loginForm-signup-text">
                        <strong>CJ ONE 회원이 아니신가요?</strong>
                        <span>회원가입하시고 다양한 혜택을 누리세요!</span>
                    </div>
                    <Link to="/signupForm">
                        <div className="loginForm-signup-button">
                            <strong>CJ ONE 회원가입하기</strong>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default LoginForm;
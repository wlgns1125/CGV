import "../css/Header.css";
import { useState } from "react";

function Header() {
  return(
      <div class ="header">
          <div class = "header_content">
              <div class = "contents">
                    <h1 onclick>
                        <a href ="/">
                        <img src = "https://img.cgv.co.kr/R2014/images/common/logo/logoRed.png" alt ="CGV"></img>
                        </a>
                        <span>CULTUREPLEX</span>
                    </h1>
                    <ul class = "member_wrap">
                        <li>
                            <a href="">
                            <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png" alt="로그인"></img>
                            <span>로그인</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png" alt="회원가입"></img>
                            <span>회원가입</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png" alt="MY CGV"></img>
                            <span>MY CGV</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png" alt="고객샌터"></img>
                            <span>고객센터</span>
                            </a>
                        </li>
                    </ul>
              </div>
              
          </div>
          <div class = "nav">
              <div class ="contents">
                  <h1></h1>
                    <ul class = "nav_menu">
                        <li>
                            <h2>
                                <a href ="">영화</a>
                            </h2>
                        </li>
                        <li>
                            <h2>
                                <a href ="">극장</a>
                            </h2>
                        </li>
                    </ul>
              </div>
          </div>

      </div>
  );
}

export default Header;
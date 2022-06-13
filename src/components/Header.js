import "../css/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }

    return (
        <div>

            <div className="container3">
                <input id="dropdown" type="checkbox" />
                <label className="dropdownLabel" for="dropdown">
                    <span className="menuBar">&#9776;</span>
                </label>
                <div className="content">
                    <ul class="menubar">
                        <li>
                            <Link to='/loginForm'>
                                <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png" alt="로그인"></img>
                                <span>로그인</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/signup'>
                                <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png" alt="회원가입"></img>
                                <span>회원가입</span>
                            </Link>
                        </li>
                        <li>
                            <a href="">
                                <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png" alt="MY CGV"></img>
                                <span>MY CGV</span>
                            </a>
                        </li>
                        <li>
                            <a href="   ">
                                <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png" alt="고객샌터"></img>
                                <span>고객센터</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="header">
                <div class="header_content">
                    <div class="contents">
                        <h1 onclick>
                            <a href="/">
                                <img src="https://img.cgv.co.kr/R2014/images/common/logo/logoRed.png" alt="CGV"></img>
                            </a>
                            <span>CULTUREPLEX</span>
                        </h1>
                        <ul class="member_wrap">
                            <li>
                                <Link to='/loginForm'>
                                    <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png" alt="로그인"></img>
                                    <span>로그인</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/signup'>
                                    <img src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png" alt="회원가입"></img>
                                    <span>회원가입</span>
                                </Link>
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
                <div class="nav">
                    <div class="contents">
                        <h1></h1>
                        <ul class="nav_menu">
                            <li>
                                <h2>
                                    <Link to='/movieList'>영화</Link>
                                </h2>
                            </li>
                            <li>
                                <h2>
                                <Link to='/timeTable'>극장</Link>
                                </h2>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}



export default Header;
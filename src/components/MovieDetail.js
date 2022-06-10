import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

const MovieDetail = () => {

    return (
        <div className="movieDetail-container">
            <div className="movieDetail-contentBox">
                <div className="movieDetail-infoBox">
                    <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_320.jpg" />
                    <div className="movieDetail-infoText">
                        <div className="movieDetail-title">
                            <h3>쥬라기 월드-도미니언</h3>
                            <div className="movieDetail-status">
                                <span>현재 상영중</span>
                            </div>
                        </div>
                        <span className="movieDetail-englishTitle">Jurassic World: Dominion</span>
                        <div class="score">
                            <strong>예매율<span className="ticketingPercent">13.9%</span></strong>
                            <span className="ticketingPercent">|</span>
                            <div class="egg-container">
                                <div className="egg ticketingPercent" />
                                <span className="ticketingPercent">85%</span>
                            </div>
                        </div>
                        <hr className="movieDetail-hr" />
                        <div className="movieDetail-spec">
                            <div className="movieDetail-person">
                                <span>감독 :&nbsp;</span>
                                <span>콜린 트레보로우&nbsp;</span>
                                <span>/ 배우 :&nbsp;</span>
                                <span>크리스 프랫,&nbsp;</span>
                                <span>브라이스 달라스 하워드,&nbsp;</span>
                                <span>드완다 와이즈,&nbsp;</span>
                                <span>로라 던,&nbsp;</span>
                                <span>제프 골드브럼,&nbsp;</span>
                                <span>샘 닐&nbsp;</span>
                            </div>
                            <div className="movieDetail-genre">
                                <span>장르 :&nbsp;</span>
                                <span>액션,&nbsp;</span>
                                <span>어드벤처&nbsp;</span>
                                <span>/ 기본 :&nbsp;</span>
                                <span>12세 이상,&nbsp;</span>
                                <span>147분,&nbsp;</span>
                                <span>미국&nbsp;</span>
                            </div>
                            <div className="movieDetail-date">
                                <span>개봉 :&nbsp;</span>
                                <span>2022.06.01</span>
                            </div>
                        </div>
                        <div className="movieCard-button">
                            예매하기
                        </div>
                    </div>
                </div>
                <div>
                    <Review />
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
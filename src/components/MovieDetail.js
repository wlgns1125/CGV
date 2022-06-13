import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

const MovieDetail = ({ clickedMenu, commentList }) => {

    return (
        <div className="movieDetail-container">
            <div className="movieDetail-contentBox">
                <div className="movieDetail-infoBox">
                    <img src={clickedMenu.poster} />
                    <div className="movieDetail-infoText">
                        <div className="movieDetail-title">
                            <h3>{clickedMenu.title}</h3>
                            <div className="movieDetail-status">
                                <span>현재 상영중</span>
                            </div>
                        </div>
                        <span className="movieDetail-englishTitle">{clickedMenu.english}</span>
                        <div class="score">
                            <strong>예매율<span className="ticketingPercent">{clickedMenu.ticketingRate}</span></strong>
                            <span className="ticketingPercent">|</span>
                            <div class="egg-container">
                                <div className="egg ticketingPercent" />
                                <span className="ticketingPercent">{clickedMenu.eggRate}</span>
                            </div>
                        </div>
                        <hr className="movieDetail-hr" />
                        <div className="movieDetail-spec">
                            <div className="movieDetail-person">
                                <span>감독 :&nbsp;</span>
                                <span>{clickedMenu.director}</span>
                                <span> / 배우 :&nbsp;</span>
                                <span>{clickedMenu.actors}</span>
                            </div>
                            <div className="movieDetail-genre">
                                <span>장르 :&nbsp;</span>
                                <span>{clickedMenu.genre}</span>
                                <span>/ 기본 :&nbsp;</span>
                                <span>{clickedMenu.info}</span>
                            </div>
                            <div className="movieDetail-date">
                                <span>개봉 :&nbsp;</span>
                                <span>{clickedMenu.date}</span>
                            </div>
                        </div>
                        <div className="movieCard-button">
                            예매하기
                        </div>
                    </div>
                </div>
                <div>
                    <Review movie={clickedMenu}  commentList={commentList} />
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const MovieRowCard = () => {

    return (
        <div className="movieRowCard">
            <div className="movieCard-header">
                <strong>No.1</strong>
            </div>
            <img className="movieCard-image" src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_320.jpg" />
            <div className="movieCard-footer">
                <strong className="footer-title">쥬라기 월드-도미니언</strong>
                <div class="score">
                    <strong>예매율<span className="ticketingPercent">13.9%</span></strong>
                    <span className="ticketingPercent">|</span>
                    <div class="egg-container">
                        <div className="egg ticketingPercent" />
                        <span className="ticketingPercent">85%</span>
                    </div>
                </div>
                <span className="date">2022.05.15</span><span className="date ticketingPercent">개봉</span>
                <div className="movieCard-button">
                    예매하기
                </div>
            </div>
        </div>
    );
}

export default MovieRowCard;
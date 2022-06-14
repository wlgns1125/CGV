import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const MovieRowCard = ({ movie, index, setClickedMenu }) => {

    return (
        <div className="movieRowCard"
            onClick={
                (e) => {
                    console.log(index + '선택하였음');
                    setClickedMenu(movie.index);
                }
            }>
            <div className="movieCard-header">
                <strong>NO.{index + 1}</strong>
            </div>
            <Link to="/movieDetail">
                <img className="movieCard-image" src={movie.poster} />
            </Link>
            <div className="movieCard-footer">
                <strong className="footer-title">{movie.title}</strong>
                <div class="score">
                    <strong>예매율<span className="ticketingPercent">{movie.ticketingRate}</span></strong>
                    <span className="ticketingPercent">|</span>
                    <div class="egg-container">
                        <div className="egg ticketingPercent" />
                        <span className="ticketingPercent">{movie.eggRate}</span>
                    </div>
                </div>
                <span className="date">{movie.date}</span><span className="date ticketingPercent">개봉</span>
                <Link to="/reserve">
                    <div className="movieCard-button">
                        예매하기
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MovieRowCard;
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MovieRow from "./MovieRow";

const MovieList = () => {

    return (
        <div className="movieList-container">
            <div className="movieList">
                <div className="movieList-header">
                    <h3>무비차트</h3>
                </div>
                <div className="movieList-selectSorting">
                    <label for="order_type">정렬</label>
                    <select id="order_type" name="order-type">
                        <option title="현재 선택됨" selected value="1">예매율순</option>
                        <option value="2">평점순</option>
                        <option value="3">관람객순</option>
                    </select>
                    <button type="button" className="movieList-sortButton">
                        <span>GO</span>
                    </button>
                </div>
                <MovieRow />
                <MovieRow />
                <MovieRow />
            </div>
        </div>
    );
}

export default MovieList;
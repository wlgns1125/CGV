import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MovieRowCard from "./MovieRowCard";

let selectedValue = 0;

const MovieList = (props) => {

    return (
        <div className="movieList-container">
            <div className="movieList">
                <div className="movieList-header">
                    <h3>무비차트</h3>
                </div>
                <div className="movieList-selectSorting">
                    <select id="sortSelect" onChange={(target) => {
                        var langSelect = document.getElementById("sortSelect");
                        var ss = langSelect.options[langSelect.selectedIndex].value;
                        selectedValue = ss;
                        console.log(selectedValue);
                    }} name="order-type">
                        <option title="현재 선택됨" selected value="0">평점순</option>
                        <option value="1">예매율순</option>
                    </select>
                    <button type="button" className="movieList-sortButton"

                        onClick={
                            (e) => {
                                props.setSortState(selectedValue);
                                console.log(props.sortIndexList);
                            }
                        }>
                        <span>GO</span>
                    </button>
                </div>

                <div className="movieRow">
                    {props.sortIndexList.map((movieIndex, index) => (
                        <MovieRowCard movie={props.movieList[movieIndex]} index={index} setClickedMenu={props.setClickedMenu} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
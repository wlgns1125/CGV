import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MovieRowCard from "./MovieRowCard";

const MovieRow = () => {

    return (
        <div className="movieRow">
            <MovieRowCard />
            <MovieRowCard />
            <MovieRowCard />
        </div>

    );
}

export default MovieRow;
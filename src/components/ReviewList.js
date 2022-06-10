import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ reviews }) => {

    return (
        <div className="reviewList-container">
            {reviews.map((review) => (
                 <ReviewItem review={review} />
             ))}
        </div>
    );
}

export default ReviewList;
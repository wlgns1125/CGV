import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const open = () => {
    let box = document.querySelector('.reviewForm-container');
    if(box !== null) box.classList.toggle('reviewForm-open');
}

const Review = ({ movie, commentList }) => {

    const [reviews, setReviews] = useState(commentList[movie.index]);

    const onInsert = useCallback(
        (text, rate) => {
            const review = {
                rate: rate,
                writer: 'test',
                comment: text,
                plus: 0,
                date: '2022.06.15'
            };
            setReviews(reviews.concat(review));
        },
        [reviews]
    );

    return (
        <>
            <div className="movieDetail-commentInfoBox">
                <div className="movieDetail-commentInfoBox-firstColumn">
                    <div className="movieDetail-commentInfoBox-text">
                        관람일 포함 7일 이내 관람평을 남기시면<span>&nbsp;CJ ONE 20P</span>가 적립됩니다.
                    </div>
                    <div className="movieDetail-commentInfoBox-count">
                        <strong>{reviews.length}</strong><span>명의 실관람객이 평가해주셨습니다.</span>
                    </div>
                </div>
                <div className="movieDetail-commentInfo-redBtn" onClick={open}>
                    평점작성
                </div>
                <div className="movieDetail-commentInfo-blackBtn">
                    내 평점
                </div>
            </div>
            <ReviewForm onInsert={onInsert} />
            <ReviewList reviews={reviews} />
        </>
    );
}

export default Review;
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const checkToggle = (isToggled, setIsToggled, plus, setPlus) => {
    if(isToggled) {
        setIsToggled(false);
        setPlus(plus-1);
    }

    else {
        setIsToggled(true);
        setPlus(plus+1);
    }
}


const ReviewItem = ({ review }) => {

    const [isToggled, setIsToggled] = useState(review.isToggled);
    const [plus, setPlus] = useState(review.plus);

    return (
        <div className="reviewItem-container">
            <div className="reviewItem-firstRow">
                <div className="reviewItem-thumb">
                    <img src="http://img.cgv.co.kr/R2014/images/common/default_profile.gif" />
                </div>
                <div className="reviewItem-userInfo">
                    <div className="reviewItem-header">
                        <div className="egg ticketingPercent" />
                        <span>{review.writer}</span>
                        <span> / 평점 : {review.rate}</span>
                    </div>
                    <p>{review.comment}</p>
                </div>
            </div>
            <div className="reviewItem-secondRow">
                <span>{review.date}</span>
                <span className="reviewItem-bar">|</span>
                <img className="cursorImage" src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png"  onClick={
                    () => {
                        checkToggle(isToggled, setIsToggled, plus, setPlus);
                    }
                }/>
                <strong>{plus}</strong>
            </div>
        </div>
    );
}

export default ReviewItem;
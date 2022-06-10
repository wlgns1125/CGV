import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";


const ReviewItem = ({ review }) => {

    const { text } = review;

    return (
        <div className="reviewItem-container">
            <div className="reviewItem-firstRow">
                <div className="reviewItem-thumb">
                    <img src="http://img.cgv.co.kr/R2014/images/common/default_profile.gif" />
                </div>
                <div className="reviewItem-userInfo">
                    <div className="reviewItem-header">
                        <div className="egg ticketingPercent" />
                        <span>zabcd121</span>
                    </div>
                    <p>{text}</p>
                </div>
            </div>
            <div className="reviewItem-secondRow">
                <span>2022.06.10</span>
                <span className="reviewItem-bar">|</span>
                <img src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png" />
                <strong>30</strong>
            </div>
        </div>
    );
}

export default ReviewItem;
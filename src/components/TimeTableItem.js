import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const TimeTableItem = () => {

    return (
        <div className="timeTableItem-container">
            <div className="timeTableItem-header">
                <label>브로커</label>
                <div className="timeTable-status">
                    상영중
                </div>
                <span>드라마/</span>
                <span>129분/</span>
                <span>2022.06.08 개봉</span>
            </div>
            <span>-&nbsp;2D&nbsp;|</span>
            <span>&nbsp;3관 8층&nbsp;|</span>
            <span>&nbsp;총&nbsp;</span>
            <span>172석</span>
            <div className="timeTable-row">
                <div className="timeTableItem">
                    <strong>24:00</strong>
                    <span>154석</span>
                </div>
                <div className="timeTableItem">
                    <strong>24:00</strong>
                    <span>154석</span>
                </div>
            </div>
            <span>-&nbsp;2D&nbsp;|</span>
            <span>&nbsp;3관 8층&nbsp;|</span>
            <span>&nbsp;총&nbsp;</span>
            <span>172석</span>
            <div className="timeTable-row">
                <div className="timeTableItem">
                    <strong>24:00</strong>
                    <span>154석</span>
                </div>
                <div className="timeTableItem">
                    <strong>24:00</strong>
                    <span>154석</span>
                </div>
            </div>
        </div>
    );
}

export default TimeTableItem;
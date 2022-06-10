import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import TimeTableItem from "./TimeTableItem";

const TimeTableList = () => {

    return (
        <div className="timeTableList-container">
            <div className="timeTableList-contentBox">
                <TimeTableItem />
                <TimeTableItem />
                <TimeTableItem />
            </div>
        </div>
    );
}

export default TimeTableList;
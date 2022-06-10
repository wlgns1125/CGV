import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

const ReviewForm = ({ onInsert }) => {

    const [value, setValue] = useState("");
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            console.log('서밋 호출됨');
            onInsert(value);
            setValue("");
            //submit 이벤트는 브라우저에서 새로고침을 발생
            //이를 방지하기 위해 이 함수를 호출
            e.preventDefault();
        },
        [
            // onInsert,
            value
        ]
    );

    return (
        <div className="reviewForm-container">
            <form className="reviewForm" onSubmit={onSubmit}>
                <label>관람 후기를 작성해주세요!</label>
                <select id="rate" className="review-write-rate" name="rate">
                    <option selected value="5">5점</option>
                    <option value="4">4점</option>
                    <option value="3">3점</option>
                    <option value="2">2점</option>
                    <option value="1">1점</option>
                </select>
                <button type="submit" className="review-write-button">
                    등록
                </button>
                <br />
                <textarea cols="100" rows="7" type="text" className="review-write-input" value={value}  onChange={onChange} />
            </form>
        </div>
    );
}

export default ReviewForm;
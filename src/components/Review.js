import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const initData = [
    { text: "리액트의 기초 알아보기"},
    { text: "리액트의 기초 알아보기"},
    { text: "리액트의 기초 알아보기"},
    { text: "리액트의 기초 알아보기"},
    { text: "리액트의 기초 알아보기"},
    { text: "리액트의 기초 알아보기"}
  ];

const Review = () => {

    const [reviews, setReviews] = useState(initData);

    const onInsert = useCallback(
        (text) => {
          const review = {
            text,
          };
          setReviews(reviews.concat(review));
        },
        [reviews]
      );

    return (
        <>
            <ReviewForm onInsert={onInsert} />
            <ReviewList reviews={reviews} />
        </>
    );
}

export default Review;
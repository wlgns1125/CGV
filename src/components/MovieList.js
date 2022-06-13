import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MovieRowCard from "./MovieRowCard";


const initData = [
    { text: "리액트의 기초 알아보기" },
    { text: "리액트의 기초 알아보기" },
    { text: "리액트의 기초 알아보기" },
    { text: "리액트의 기초 알아보기" },
    { text: "리액트의 기초 알아보기" },
    { text: "리액트의 기초 알아보기" },
    { text: "리액트의 기초 알아보기" },
    { text: "리액트의 기초 알아보기" }
];

const movieList = [
    {
      title : '쥬라기 월드-도미니언',
      english: 'Jurassic World: Dominion',
      poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_1000.jpg',
      ticketingRate: '4.2%',
      eggRate: '85%',
      director: '콜린 트레보로우',
      actors: '크리스 프랫 ,  브라이스 달라스 하워드 ,  드완다 와이즈 ,  로라 던 ,  제프 골드브럼 ,  샘 닐',
      genre: '액션, 어드벤처',
      info: '12세 이상, 147분, 미국',
      date: '2022.06.01',
      comments: [
          {rate: '5', writer: 'zabcd121', comment: '공룡이 멋있어요', plus: '3'},
          {rate: '1', writer: 'zabcd121', comment: '너무 무서웠어요', plus: '3'}
      ]
    },
    {
      title : '브로커',
      english: 'Broker',
      poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_1000.jpg',
      ticketingRate: '8.8%',
      eggRate: '82%',
      director: '고레에다 히로카즈',
      actors: '송강호 ,  강동원 ,  배두나 ,  이지은 ,  이주영',
      genre: '드라마',
      info: '12세 이상, 129분, 한국',
      date: '2022.06.08',
      comments: [
          {rate: '5', writer: 'zabcd121', comment: '다들 연기를 잘해요!', plus: '3'}
      ]
    },
    {
      title : '탑건-매버릭',
      english: 'Top Gun: Maverick',
      poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_1000.jpg',
      ticketingRate: '28.1%',
      eggRate: '99%',
      director: '조셉 코신스키',
      actors: '톰 크루즈 ,  마일즈 텔러 ,  제니퍼 코넬리',
      genre: '액션',
      info: '12세 이상, 130분, 미국',
      date: '2022.06.22',
      comments: [
          {rate: '5', writer: 'zabcd121', comment: '흥미진진하게 봤어요!', plus: '3'}
      ]
    },
    {
      title : '버즈 라이트이어',
      english: 'Top Gun: Maverick',
      poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85977/85977_1000.jpg',
      ticketingRate: '16.4%',
      eggRate: '99%',
      director: '앤거스 맥클레인',
      actors: '크리스 에반스 ,  타이카 와이티티 ,  피터 손',
      genre: '애니메이션',
      info: '전체, 105분, 미국',
      date: '2022.06.15',
      comments: [
          {rate: '5', writer: 'zabcd121', comment: '아이들이 좋아해요!', plus: '3'}
      ]
    },
    {
      title : '마녀 Part2. The Other One',
      english: '-',
      poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85871/85871_1000.jpg',
      ticketingRate: '23.74%',
      eggRate: '99%',
      director: '박훈정',
      actors: '신시아 ,  박은빈 ,  서은수 ,  진구 ,  성유빈 ,  조민수 ,  이종석 ,  김다미',
      genre: '액션',
      info: '15세 이상, 137분, 한국',
      date: '2022.06.15',
      comments: [
          {rate: '5', writer: 'zabcd121', comment: '드디어 개봉했군요!', plus: '3'}
      ]
    },
    {
      title : '범죄도시 2',
      english: 'The Roundup',
      poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85813/85813_1000.jpg',
      ticketingRate: '10.9%',
      eggRate: '98%',
      director: '이상용',
      actors: '마동석 ,  손석구 ,  최귀화 ,  박지환 ,  허동원 ,  하준 ,  정재광',
      genre: '범죄, 액션',
      info: '15세 이상, 106분, 한국',
      date: '2022.05.18',
      comments: [
          {rate: '5', writer: 'zabcd121', comment: '마동석 너무 멋있어!', plus: '3'}
      ]
    },
    {
      title : '경아의 딸',
      english: 'Gyeong-ah’s Daughter',
      poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85968/85968_1000.jpg',
      ticketingRate: '1.2%',
      eggRate: '30%',
      director: '김정은',
      actors: '김정영 ,  하윤경 ,  김우겸 ,  박혜진',
      genre: '드라마',
      info: '15세 이상, 119분, 한국',
      date: '2022.06.16',
      comments: [
          {rate: '5', writer: 'zabcd121', comment: '감동적이네요!', plus: '3'}
      ]
    },
    {
      title : '실종',
      english: 'Missing',
      poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85917/85917_1000.jpg',
      ticketingRate: '1.0%',
      eggRate: '99%',
      director: '가타야마 신조',
      actors: '사토 지로 ,  이토 아오이 ,  시미즈 히로야',
      genre: '스릴러',
      info: '청소년 관람불가, 124분, 일본',
      date: '2022.06.15',
      comments: [
          {rate: '5', writer: 'zabcd121', comment: '무서워서 뛰쳐나왔어요!', plus: '3'}
      ]
    }
  ];
  


const MovieList = (props) => {

    return (
        <div className="movieList-container">
            <div className="movieList">
                <div className="movieList-header">
                    <h3>무비차트</h3>
                </div>
                <div className="movieList-selectSorting">
                    <label for="order_type">정렬</label>
                    <select id="order_type" name="order-type">
                        <option title="현재 선택됨" selected value="1">예매율순</option>
                        <option value="2">평점순</option>
                        <option value="3">관람객순</option>
                    </select>
                    <button type="button" className="movieList-sortButton">
                        <span>GO</span>
                    </button>
                </div>

                <div className="movieRow">
                    {props.movieList.map((movie, index) => (
                        <MovieRowCard movie={movie} index={index} setClickedMenu={props.setClickedMenu} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
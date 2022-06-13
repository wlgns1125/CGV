import './App.css';
import '../src/css/Header.css'
import Signup from './components/Signup';
import { Routes, Route } from "react-router-dom";
import SignupForm from './components/SignupForm';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import LoginForm from './components/LoginForm';
import TimeTableList from './components/TimetableList';
import Reserve from './components/Reserve';
import SelectSeat from './components/SelectSeat';
import Header from './components/Header';
import Foot from './components/Foot';
import Event from './components/Event';
import MovieChard from './components/MovieChard';
import { useState } from "react";

const movieList = [
  {
    index: 0,
    title: '쥬라기 월드-도미니언',
    english: 'Jurassic World: Dominion',
    poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_1000.jpg',
    ticketingRate: '4.2%',
    eggRate: '5.0',
    director: '콜린 트레보로우',
    actors: '크리스 프랫 ,  브라이스 달라스 하워드 ,  드완다 와이즈 ,  로라 던 ,  제프 골드브럼 ,  샘 닐',
    genre: '액션, 어드벤처',
    info: '12세 이상, 147분, 미국',
    date: '2022.06.01'
  },
  {
    index: 1,
    title: '브로커',
    english: 'Broker',
    poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_1000.jpg',
    ticketingRate: '8.8%',
    eggRate: '4.8',
    director: '고레에다 히로카즈',
    actors: '송강호 ,  강동원 ,  배두나 ,  이지은 ,  이주영',
    genre: '드라마',
    info: '12세 이상, 129분, 한국',
    date: '2022.06.08'
  },
  {
    index: 2,
    title: '탑건-매버릭',
    english: 'Top Gun: Maverick',
    poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_1000.jpg',
    ticketingRate: '28.1%',
    eggRate: '4.5',
    director: '조셉 코신스키',
    actors: '톰 크루즈 ,  마일즈 텔러 ,  제니퍼 코넬리',
    genre: '액션',
    info: '12세 이상, 130분, 미국',
    date: '2022.06.22'
  },
  {
    index: 3,
    title: '버즈 라이트이어',
    english: 'Top Gun: Maverick',
    poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85977/85977_1000.jpg',
    ticketingRate: '16.4%',
    eggRate: '4.3',
    director: '앤거스 맥클레인',
    actors: '크리스 에반스 ,  타이카 와이티티 ,  피터 손',
    genre: '애니메이션',
    info: '전체, 105분, 미국',
    date: '2022.06.15'
  },
  {
    index: 4,
    title: '마녀 Part2. The Other One',
    english: '-',
    poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85871/85871_1000.jpg',
    ticketingRate: '23.74%',
    eggRate: '4.0',
    director: '박훈정',
    actors: '신시아 ,  박은빈 ,  서은수 ,  진구 ,  성유빈 ,  조민수 ,  이종석 ,  김다미',
    genre: '액션',
    info: '15세 이상, 137분, 한국',
    date: '2022.06.15'
  },
  {
    index: 5,
    title: '범죄도시 2',
    english: 'The Roundup',
    poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85813/85813_1000.jpg',
    ticketingRate: '10.9%',
    eggRate: '3.5',
    director: '이상용',
    actors: '마동석 ,  손석구 ,  최귀화 ,  박지환 ,  허동원 ,  하준 ,  정재광',
    genre: '범죄, 액션',
    info: '15세 이상, 106분, 한국',
    date: '2022.05.18'
  },
  {
    index: 6,
    title: '경아의 딸',
    english: 'Gyeong-ah’s Daughter',
    poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85968/85968_1000.jpg',
    ticketingRate: '1.2%',
    eggRate: '3.3',
    director: '김정은',
    actors: '김정영 ,  하윤경 ,  김우겸 ,  박혜진',
    genre: '드라마',
    info: '15세 이상, 119분, 한국',
    date: '2022.06.16'
  },
  {
    index: 7,
    title: '실종',
    english: 'Missing',
    poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85917/85917_1000.jpg',
    ticketingRate: '1.0%',
    eggRate: '3.0',
    director: '가타야마 신조',
    actors: '사토 지로 ,  이토 아오이 ,  시미즈 히로야',
    genre: '스릴러',
    info: '청소년 관람불가, 124분, 일본',
    date: '2022.06.15'
  }
];

const commentList = [
  [
    { rate: '5.0', writer: '공룡박사', comment: '공룡이 멋있어요', plus: 30, date:'2022.02.12', isToggled: false },
    { rate: '2.0', writer: 'zabcd121', comment: '너무 무서웠어요', plus: 21, date:'2022.02.22', isToggled: false  },
    { rate: '4.0', writer: 'tu1014', comment: '오랜만에 보니 반갑네요', plus: 2, date:'2022.01.12' , isToggled: false }
  ],
  [
    { rate: '5.0', writer: 'zabcd121', comment: '다들 연기를 잘해요!', plus: 322, date:'2022.03.12' , isToggled: false },
    { rate: '5.0', writer: '아이유', comment: '감동적인 이야기!', plus: 32, date:'2022.03.14', isToggled: false  },
    { rate: '4.0', writer: 'wwersdrd', comment: '강동원 멋있어요~', plus: 252, date:'2022.03.21' , isToggled: false }
  ],
  [
    { rate: '5.0', writer: 'zabcd121', comment: '흥미진진하게 봤어요!', plus: 325, date:'2022.02.11'  , isToggled: false},
    { rate: '3.0', writer: 'airplane', comment: '스케일이 별로네요', plus: 32, date:'2022.02.12' , isToggled: false }
  ],
  [
    { rate: '4.5', writer: 'zabcd121', comment: '아이들이 좋아해요!', plus: 32, date:'2022.03.12' , isToggled: false },
    { rate: '4.5', writer: 'ubys', comment: '버즈의 이야기!', plus: 322, date:'2022.03.15' , isToggled: false },
    { rate: '5.0', writer: 'buzeee', comment: '버즈 장난감 가지고 싶다~', plus: 112, date:'2022.02.12' , isToggled: false },
    { rate: '4.5', writer: 'ssdfsdf', comment: 'funny!', plus: 11, date:'2022.02.01' , isToggled: false }
  ],
  [
    { rate: '5.0', writer: 'zabcd121', comment: '마녀2 드디어 개봉했군요!', plus: 22, date:'2022.02.12' , isToggled: false}
  ],
  [
    { rate: '4.5', writer: 'zabcd121', comment: '마동석 대박!', plus: 32, date:'2022.02.12', isToggled: false  },
    { rate: '5.0', writer: 'zabcd121', comment: '범죄도시는 무조건 봐야죠!', plus: 113, date:'2022.02.22' , isToggled: false }
  ],
  [
    { rate: '5.0', writer: 'zabcd121', comment: '감동적이네요!', plus: 32, date:'2022.02.12', isToggled: false  },
    { rate: '4.0', writer: 'ddsetrsd', comment: '눈물 없인 볼 수 없어요ㅠㅠ', plus: 32, date:'2022.02.14' , isToggled: false }
  ],
  [
    { rate: '3.6', writer: 'zabcd121', comment: '오랜만에 공포영화 봤네요', plus: 31, date:'2022.03.22' , isToggled: false },
    { rate: '4.6', writer: 'zabcd121', comment: '오오 재밌어요', plus: 231, date:'2022.03.22', isToggled: false  }
  ]
];

const sortIndexList = [
  [0, 1, 2, 3, 4, 5, 6, 7], // 평점순
  [2, 4, 3, 5, 1, 0, 6, 7] // 예매율순
];




function App() {

  const [clickedMenu, setClickedMenu] = useState(0);
  const [sortState, setSortState] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={[<MovieChard />, <Event />]} />
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signupForm' element={<SignupForm />} />
        <Route path='/loginForm' element={<LoginForm />} />
      </Routes>
      <Routes>
        <Route path='/movieList' element={
          <MovieList
            movieList={movieList}
            setSortState={setSortState}
            sortIndexList={sortIndexList[sortState]}
            setClickedMenu={setClickedMenu}
          />}
        />
        <Route path='/movieDetail' element={
          <MovieDetail
            commentList={commentList}
            clickedMenu={movieList[clickedMenu]}
          />}
        />
      </Routes>
      <Routes>
        <Route path='/timeTable' element={<TimeTableList />} />
        <Route path='/reserve' element={<Reserve />} />
        <Route path='/selectSeat' element={<SelectSeat />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;

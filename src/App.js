import './App.css';
import Signup from './components/Signup';
import { Routes, Route } from "react-router-dom";
import SignupForm from './components/SignupForm';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import LoginForm from './components/LoginForm';
import TimeTableList from './components/TimetableList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signupForm' element={<SignupForm />} />
        <Route path='/loginForm' element={<LoginForm />} />
      </Routes>
      <Routes>
        <Route path='/movieList' element={<MovieList />} />
        <Route path='/movieDetail' element={<MovieDetail />} />
      </Routes>
      <Routes>
        <Route path='/timeTable' element={<TimeTableList />} />
      </Routes>
    </>
  );
}

export default App;

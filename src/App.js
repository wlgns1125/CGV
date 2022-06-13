import './App.css';
import '../src/css/Header.css'
import Signup from './components/Signup';
import { Routes, Route } from "react-router-dom";
import SignupForm from './components/SignupForm';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import LoginForm from './components/LoginForm';
import TimeTableList from './components/TimetableList';
import Ticket_tnb from './components/Ticket_Tnb';
import SelectSeat from './components/SelectSeat';
import Header from './components/Header';
import Foot from './components/Foot';
import Event from './components/Event';
import MovieChard from './components/MovieChard';


function App() {
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
        <Route path='/movieList' element={<MovieList />} />
        <Route path='/movieDetail' element={<MovieDetail />} />
      </Routes>
      <Routes>
        <Route path='/timeTable' element={<TimeTableList />} />
        <Route path='/ticketing/seats' element={<SelectSeat />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;

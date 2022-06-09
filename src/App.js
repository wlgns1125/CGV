import './App.css';
import Signup from './components/Signup';
import { Routes, Route } from "react-router-dom";
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signupForm' element={<SignupForm/>} />
    </Routes>

  );
}

export default App;

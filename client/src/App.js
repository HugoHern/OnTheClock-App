
import './App.css';


import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hours from './pages/Hours';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DailyHours from './pages/DailyHours';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hours/>} />
       <Route path="login" element={<Login />} />
       <Route path="signup" element={<Signup />} />
       <Route path="dailyhours" element={<DailyHours />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




import './App.css';


import {BrowserRouter, Routes, Route } from "react-router-dom";
import Hours from './pages/Hours';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DailyHours from './components/DailyHours';
import Edit from './pages/Edit';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
     
      <Routes>
        <Route path="/" element={<Hours/>} />
       <Route path="login" element={<Login />} />
       <Route path="signup" element={<Signup />} />
       <Route path="dailyhours" element={<DailyHours />} />
       <Route path= 'edit' element={<Edit />} />
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;



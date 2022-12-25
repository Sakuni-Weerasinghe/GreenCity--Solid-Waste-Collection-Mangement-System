import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Core/Header/Header"
import Footer from "./Core/Footer/Footer"
import Home from "./Pages/Home/Home"
import UserSignup from "./Pages/SignUp/Components/UserSignup"
import CcenterSignup from "./Pages/SignUp/Components/CcenterSignup"


import './App.css';
import {Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
    <div className='container'>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path="signup/userSignup" element={<UserSignup/>} />
        <Route path="signup/centerSignup" element={<CcenterSignup/>}/>
    </Routes>
    </div>
      <Footer/>
    </div>
  );
}

export default App;

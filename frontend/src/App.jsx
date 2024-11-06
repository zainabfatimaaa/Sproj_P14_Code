import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Signup from './components/SignUp/Signup.jsx'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPageC />}  />
          <Route path="/signup" element={<SignUpC />} />
        </Routes>
      </div>
    </Router>
  );
}

function LandingPageC() {

  return (
    <>
      <Header />
    </>
  );
}

function SignUpC() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/';
    }
  }, []);
  return (
    <>
      {/* <Header  /> */}
      <Signup />
    </>
  );
}

export default App;

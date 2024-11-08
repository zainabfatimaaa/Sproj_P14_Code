import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPageC from './components/AuthPages/LandingPageC.jsx';
import SignUpC from './components/AuthPages/SignUpC.jsx';
import SignInC from './components/AuthPages/SignInC.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPageC />} />
          <Route path="/signup" element={<SignUpC />} />
          <Route path="/signin" element={<SignInC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

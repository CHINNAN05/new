// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
// Components
import Header from './com/headder';
// import Navigation from './com/navgation';
import About from './About';
import Contact from './Contact';
import Disclaimer from './Disclaimer';
import PrivacyPolicy from './PrivacyPolicy';

import Home from './com/home';

import Math from './pages/math';
import Science from './pages/science';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Disclaimer" element={<Disclaimer />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

          <Route path="/math" element={<Math />} />
          <Route path="/science" element={<Science />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




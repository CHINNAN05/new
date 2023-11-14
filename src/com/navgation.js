
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <button className="mobile-menu-button" onClick={toggleMenu}>MENU</button>
      <div class={`sidenav ${isMenuOpen ? 'open' : 'close'}`}>
      <div class="mobile_nav">
      <p>TAMIL MEDIUM</p>
      <div class="nav_tamil_medium">
      
        <Link to="/12th">12th</Link>
        <Link to="/11th">11th</Link>
        <Link to="/10th">10th</Link>
        <Link to="/9th">09th</Link>
        <Link to="/8th">08th</Link>
        <Link to="/7th">07th</Link>
        <Link to="/6th">06th</Link>
      </div>
      <p>ENGLISH MEDIUM</p>
      <div class="nav_english_medium">
        <Link to="/12th">12th</Link>
        <Link to="/11th">11th</Link>
        <Link to="/10th">10th</Link>
        <Link to="/9th">09th</Link>
        <Link to="/8th">08th</Link>
        <Link to="/7th">07th</Link>
        <Link to="/6th">06th</Link>
      </div>
      </div>
      <div class="nav_details">
      <p>ATOSTUDENT</p>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/Disclaimer">Disclaimer</Link>
        <Link to="/PrivacyPolicy">Privacy Policy</Link>
      </div>
      </div>
    </>
  );
};
export default Navigation;
import React from 'react';
import './../css/Header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="main-header">
          <div className="nav-container">
              <div className="nav-left">
                  <Link to="" className="logo link">Komiki</Link>
                  <nav className="main-nav">
                      <ul className="nav-list">
                          <li className="nav-item">
                              <Link to="/comics" className="nav-link link">Comics</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/novels" className="nav-link link">Novel</Link>
                          </li>
                          <li className="nav-item">
                              <a href="#" className="nav-link link">Mature</a>
                          </li>
                          <li className="nav-item">
                              <a href="#" className="nav-link link">Creators</a>
                          </li>
                          <li className="nav-item">
                              <a href="#" className="nav-link link">Discover</a>
                          </li>
                      </ul>
                  </nav>
              </div>
              <div className="nav-right">
                  <form action="#" className="search-form">
                      <input type="text" id="search-input" placeholder="Search" />
                  </form>
                  <div className="user-nav">
                      <a href="#" className="link" id="login-link">Login</a>
                      <Link to="/publishing" className="link" id="signup-link">Publish</Link>
                  </div>
              </div>
              <div className="nav-toggle-btn">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="nav-toggle-icon">
                      <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
              </div>
          </div>
      </header>
      
      
  );
}



export default Header;

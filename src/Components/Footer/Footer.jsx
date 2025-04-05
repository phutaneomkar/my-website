import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
         <div className="container ">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="footer-logo-box p-3">
            <a href="#">
               <img className="navlogo" src="../src/assets/logo.svg" alt="Logo" />
            </a>
          </div>
          <div className="footer-menu">
            <nav>
              <ul>
                <li>
                  <a href="../#banner">Home</a>
                </li>
                <li>
                  <a href="../#mywork">My Work</a>
                </li>
                <li>
                  <a href="./#about">About</a>
                </li>
                <li>
                  <a href="./#skills">Skills</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="copy-text">
            <p>
              © 2025 All rights reserved 
              <a href="#" target="_blank" rel="noopener noreferrer">
            
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Footer;

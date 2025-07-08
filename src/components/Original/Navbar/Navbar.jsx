import React, { useState, useEffect, useRef } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { CiAt } from 'react-icons/ci';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mobileNavRef = useRef(null);

  // Handle clicks outside of the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    // Add event listener
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <nav className="navbar navbar-dark custom-navbar">
      <div className="container-fluid navbar-container">
        {/* Left Section */}
        <div className="navbar-brand-section">
          <a href="/og" className="brand-text">Ashish Lukka</a>
        </div>

        {/* Center Section */}
        <div className="center-nav">
          <a className="nav-link" href="/og/work">Work</a>
          <a className="nav-link" href="/og/about">About</a>
          <a className="nav-link desktop-resume" target="_blank" href="https://drive.google.com/file/d/1mP-ke2wUbF7np1IzslAfWrYZvgiZZMud/view?usp=sharing">
            Resume <span className="arrow-wrapper"><GoArrowUpRight className="external-link-icon" /></span>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-nav" ref={mobileNavRef}>
          <button
            className="mobile-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
          >
            <CiAt className={`at-icon ${isExpanded ? 'rotate' : ''}`} />
          </button>

          {isExpanded && (
            <div className="mobile-menu">
              <a className="mobile-nav-link" target="_blank" href="https://drive.google.com/file/d/1mP-ke2wUbF7np1IzslAfWrYZvgiZZMud/view?usp=sharing">
                Resume 
                <span className="arrow-wrapper"><GoArrowUpRight className="external-link-icon" /></span>
              </a>
              
              <div className="contact-section">
                <p className="contact-text">Contact :</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/ashish-lukka/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/ashishlukka1" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
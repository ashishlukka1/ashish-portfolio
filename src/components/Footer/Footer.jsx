import React, { useState } from 'react';
import './Footer.css';
import { MdEmail, MdContentCopy, MdCheck } from 'react-icons/md';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "ashishlukka2005@gmail.com";
    const navigate = useNavigate();
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="custom-footer ">
      <div className="footer-container">
        <div className="footer-row">
          {/* Categories Column (Moved to left) */}
          <div className="footer-col">
            <h3 className="category-title">CATEGORIES</h3>
            <nav>
            <a href="/" className="nav-link" onClick={()=>{navigate('/')}}>Home</a>
              <a href="#" className="nav-link" onClick={()=>{navigate('/work')}}>Work</a>
              <a href="#" className="nav-link" onClick={()=>{'/about'}}>About</a>
            </nav>
          </div>
          
          {/* Middle Column with Email */}
          <div className="footer-col">
            <h2 className="footer-heading">Let's make something great together!</h2>
            <button className="email-button" onClick={handleCopyEmail}>
              <MdEmail className="email-icon" size={16} />
              <span>{email}</span>
              {copied ? (
                <MdCheck className="copy-icon" size={16} />
              ) : (
                <MdContentCopy className="copy-icon" size={16} />
              )}
            </button>
          </div>
          
          {/* Right Column - Social Icons */}
          <div className="footer-col footer-col-right">
            <div className="social-icons">
              <a href="https://www.instagram.com/ashhiiiish/" className="social-icon" target="_blank">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ashish-lukka/" className="social-icon" target="_blank">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/ashishlukka1" target="_blank" className="social-icon">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-row">
            <div className="footer-bottom-col">
              <p className="footer-text">© 2025 Ashish Lukka. All Rights Reserved.</p>
            </div>
            <div className="footer-bottom-col footer-bottom-col-center">
              <p className="footer-text">Made with love, passion and the right amount of OCD.</p>
            </div>
            <div className="footer-bottom-col footer-bottom-col-right">
              <p className="footer-text">Last updated by Ashish on Monday, Mar 31, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
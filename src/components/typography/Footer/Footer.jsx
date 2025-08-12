import React from "react";
import "./TypoFooter.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © 2025 Designed & Developed by{" "}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Ashish Lukka
        </a>
      </p>
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/ashish-lukka/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/ashishlukka1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linktr.ee/ashishlukka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinktree />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

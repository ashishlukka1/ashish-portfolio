import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const leftImages = [
    {
      src: "https://u.cubeupload.com/ashishl/202508102003ModernLa.png",
      alt: "Digital-Academic-Library",
    },
    {
      src: "https://u.cubeupload.com/ashishl/202508102015Mockupwi.png",
      alt: "Draft-BlogApp",
    },
  ];

  const rightImages = [
    {
      src: "https://u.cubeupload.com/ashishl/202508101900Centered.png",
      alt: "Olive-Crypto-Systems",
    },
    {
      src: "https://u.cubeupload.com/ashishl/202508102024VibrantM.png",
      alt: "Campus-Hall-Scheduler",
    },
  ];

  const handleImageClick = (alt) => {
    navigate(`/${alt.replace(/\s+/g, "-").toLowerCase()}`);
  };

  const BlurImage = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);
    return (
      <img
        src={src}
        alt={alt}
        className={`blur-load ${loaded ? "loaded" : ""}`}
        onLoad={() => setLoaded(true)}
      />
    );
  };

  const renderImages = (images) =>
    images.map((img, index) => (
      <div
        key={index}
        className="image-wrapper"
        onClick={() => handleImageClick(img.alt)}
      >
        <BlurImage src={img.src} alt={img.alt} />
        <div>
          <span>{img.alt}</span>
        </div>
      </div>
    ));

  return (
    <div className="home-container">
      <div className="grid-layout">
        {/* Left column */}
        <div className="left-column">
          <div className="intro-section">
            <h1 className="intro-title">Ashish Lukka</h1>
            <p className="intro-subtitle">
              Co-Founder of{" "}
              <a
                href="https://buildwithlumora.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lumora
              </a>
              , and previously Intern at{" "}
              <a
                href="https://olivecrypto.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Olive Crypto Systems
              </a>
              .
            </p>
          </div>
          {renderImages(leftImages)}
        </div>

        {/* Right column */}
        <div className="right-column">{renderImages(rightImages)}</div>
      </div>
    </div>
  );
}

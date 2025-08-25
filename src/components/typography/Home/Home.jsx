import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [loading, setLoading] = useState(true);

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

  const allImages = [...leftImages, ...rightImages];

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === allImages.length) {
      const timeout = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "auto"; // enable scroll after load
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      document.body.style.overflow = "hidden"; // lock scroll while loading
    }
  }, [imagesLoaded, allImages.length]);

  const handleImageClick = (alt) => {
    navigate(`/${alt.replace(/\s+/g, "-").toLowerCase()}`);
  };

  const renderImages = (images) =>
    images.map((img, index) => (
      <div
        key={index}
        className="image-wrapper"
        onClick={() => handleImageClick(img.alt)}
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          onLoad={handleImageLoad}
        />
        <div className="">
          <span>{img.alt}</span>
        </div>
      </div>
    ));

  return (
    <>
      {loading && (
        <div className={`loader ${!loading ? "fade-out" : ""}`}>
          <span className="loader-text">.axD</span>
        </div>
      )}

      <div
        className="home-container"
        style={{ opacity: loading ? 0 : 1, transition: "opacity 0.8s ease" }}
      >
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
    </>
  );
}

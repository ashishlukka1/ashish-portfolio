import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [loading, setLoading] = useState(true);

  const allImages = [
    {
      src: "https://u.cubeupload.com/ashishl/202508101900Centered.png",
      alt: "Olive-Crypto-Systems",
    },
    {
      src: "https://u.cubeupload.com/ashishl/202508102003ModernLa.png",
      alt: "Digital-Academic-Library",
    },
    {
      src: "https://u.cubeupload.com/ashishl/202508102015Mockupwi.png",
      alt: "Draft-BlogApp",
    },
    {
      src: "https://u.cubeupload.com/ashishl/202508102024VibrantM.png",
      alt: "Campus-Hall-Scheduler",
    },
  ];

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === allImages.length) {
      const timeout = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "auto";
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      document.body.style.overflow = "hidden";
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
        <div className="caption">
          <span>{img.alt}</span>
        </div>
      </div>
    ));

  return (
    <>
      {loading && (
        <div className={`loader ${!loading ? "fade-out" : ""}`}>
          <span className="loader-text">Hold on now Brodigy... :)</span>
        </div>
      )}

      <div
        className="home-container"
        style={{ opacity: loading ? 0 : 1, transition: "opacity 0.8s ease" }}
      >
        {/* Intro Section */}
        <div className="intro-section">
          <div className="star star-left">
            <svg fill="none" viewBox="0 0 68 68"  xmlns="http://www.w3.org/2000/svg"><path d="m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z" fill="#01433a"/></svg>
          </div>

          <h1 className="intro-title">
            Hi. I'm Ashish. <br /> A Developer.
          </h1>

          <div className="star star-right">
           <svg fill="none"  viewBox="0 0 68 68"  xmlns="http://www.w3.org/2000/svg"><path d="m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z" fill="#01433a"/></svg>
          </div>

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

        {/* Projects Grid */}
        <div className="projects-grid">{renderImages(allImages)}</div>
      </div>
    </>
  );
}

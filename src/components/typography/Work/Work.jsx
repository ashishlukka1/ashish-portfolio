import React, { useState, useEffect } from "react";
import "./Work.css";
import { useNavigate } from "react-router-dom";

export default function Work() {
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [loading, setLoading] = useState(true);

  const workImages = [
    { src: "https://u.cubeupload.com/ashishl/202508101900Centered.png", alt: "Olive Crypto Systems" },
    { src: "https://u.cubeupload.com/ashishl/202508102003ModernLa.png", alt: "Digital Academic Library" },
    { src: "https://u.cubeupload.com/ashishl/202508102015Mockupwi.png", alt: "Draft BlogApp" },
    { src: "https://u.cubeupload.com/ashishl/202508102024VibrantM.png", alt: "Campus Hall Scheduler" },
    { src: "https://u.cubeupload.com/ashishl/Untitleddesign41.png", alt: "Lumora" }
  ];

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === workImages.length) {
      const timeout = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "auto"; // enable scroll
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      document.body.style.overflow = "hidden"; // lock scroll while loading
    }
  }, [imagesLoaded, workImages.length]);

  const handleImageClick = (alt) => {
    navigate(`/${alt.replace(/\s+/g, "-").toLowerCase()}`);
  };

  return (
    <>
      {loading && (
        <div className={`loader ${!loading ? "fade-out" : ""}`}>
          <span className="loader-text">  Hold on now Brodigy... :)</span>
        </div>
      )}

      <div
        className="work-container"
        style={{ opacity: loading ? 0 : 1, transition: "opacity 0.8s ease" }}
      >
        {workImages.map((img, index) => (
          <div
            key={index}
            className="work-image-wrapper"
            onClick={() => handleImageClick(img.alt)}
          >
            <img
              src={img.src}
              alt={img.alt}
              onLoad={handleImageLoad}
              loading="lazy"
            />
            <span>{img.alt}</span>
          </div>
        ))}
      </div>
    </>
  );
}

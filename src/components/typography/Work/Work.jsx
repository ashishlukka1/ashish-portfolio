import React from "react";
import "./Work.css";
import { useNavigate } from "react-router-dom";

export default function Work() {
  const navigate = useNavigate();

  const workImages = [
    { src: "https://u.cubeupload.com/ashishl/202508101900Centered.png", alt: "Olive Crypto Systems" },
    { src: "https://u.cubeupload.com/ashishl/202508102003ModernLa.png", alt: "Digital Academic Library" },
    { src: "https://u.cubeupload.com/ashishl/202508102015Mockupwi.png", alt: "Draft BlogApp" },
    
    { src: "https://u.cubeupload.com/ashishl/202508102024VibrantM.png", alt: "Campus Hall Scheduler" },
    { src: "https://u.cubeupload.com/ashishl/Untitleddesign41.png", alt: "Lumora" }
  ];

  const handleImageClick = (alt) => {
    navigate(`/${alt.replace(/\s+/g, "-").toLowerCase()}`);
  };

  return (
    <div className="work-container">
      {workImages.map((img, index) => (
        <div
          key={index}
          className="work-image-wrapper"
          onClick={() => handleImageClick(img.alt)}
        >
          <img src={img.src} alt={img.alt} />
          <span>{img.alt}</span>
        </div>
      ))}
    </div>
  );
}

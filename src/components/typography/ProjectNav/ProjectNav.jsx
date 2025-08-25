import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProjectNav.css";

export default function ProjectNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const projects = [
    { src: "https://u.cubeupload.com/ashishl/202508101900Centered.png", alt: "Olive Crypto Systems", path: "/olive-crypto-systems" },
    { src: "https://u.cubeupload.com/ashishl/202508102003ModernLa.png", alt: "Digital Academic Library", path: "/digital-academic-library" },
    { src: "https://u.cubeupload.com/ashishl/202508102015Mockupwi.png", alt: "Draft BlogApp", path: "/draft-blogapp" },
    { src: "https://u.cubeupload.com/ashishl/202508102024VibrantM.png", alt: "Campus Hall Scheduler", path: "/campus-hall-scheduler" },
    { src: "https://u.cubeupload.com/ashishl/Untitleddesign41.png", alt: "Lumora", path: "/lumora" },
  ];

  // find index of active project
  const activeIndex = projects.findIndex((p) => p.path === location.pathname);

  // pick 4 projects so that active is always at index 1
  let visibleProjects = [];
  if (activeIndex !== -1) {
    for (let i = -1; i < 3; i++) {
      const index = (activeIndex + i + projects.length) % projects.length;
      visibleProjects.push(projects[index]);
    }
  }

  return (
    <div className="project-nav">
      {visibleProjects.map((proj, i) => {
        const isActive = proj.path === location.pathname;
        return (
          <div
            key={i}
            className={`project-nav-item ${isActive ? "active" : ""}`}
            onClick={() => navigate(proj.path)}
          >
            <img src={proj.src} alt={proj.alt} loading="lazy" />
          </div>
        );
      })}
    </div>
  );
}

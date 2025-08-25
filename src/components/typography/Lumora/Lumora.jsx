import React from "react";
import "./Lumora.css";
import ProjectNav from "../ProjectNav/ProjectNav";

function Lumora() {
  // Reusable image with caption
  const ImageWithCaption = ({ src, alt }) => (
    <figure className="lumora-image-wrapper">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      <figcaption>{alt}</figcaption>
    </figure>
  );

  // Sidebar info
  const sidebarData = [
    { title: "Project", text: "Lumora – Learning Platform" },
    {
      title: "Tech Stack Used",
      text: "MERN Stack (MongoDB, Express.js, React.js, Node.js), Clerk Auth",
    },
    { title: "Duration", text: "2 weeks" },
    {
      title: "Means of Access",
      text: "Students (restricted to college)",
    },
    { title: "Demo", link: "https://lumora.vercel.app" },
    {
      title: "GitHub",
      link: "https://github.com/ashishlukka1/lumora",
    },
  ];

  // Feature images
  const featureImages = [
    {
      src: "https://u.cubeupload.com/ashishl/cb3landingpage.png",
      alt: "Landing Page – Lumora",
    },
    {
      src: "https://u.cubeupload.com/ashishl/77login.png",
      alt: "Login Page with Clerk authentication",
    },
    {
      src: "https://u.cubeupload.com/ashishl/content.png",
      alt: "Lecture content organized by modules",
    },
    {
      src: "https://u.cubeupload.com/ashishl/watch.png",
      alt: "Video lecture playback interface",
    },
  ];

  return (
    <div className="lumora-page">
      {/* Banner */}
      <div className="lumora-banner">
        <img
          src="https://u.cubeupload.com/ashishl/cb3landingpage.png"
          alt="Lumora Banner"
          className="banner-img4"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="lumora-content container">
        {/* Sidebar */}
        <div className="lumora-sidebar">
          {sidebarData.map((item, idx) => (
            <React.Fragment key={idx}>
              <h4>{item.title}</h4>
              {item.link ? (
                <p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </p>
              ) : (
                <p>{item.text}</p>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Main Section */}
        <div className="lumora-main">
          <h1>Lumora.</h1>
          <p className="intro">
            After college we had{" "}
            <span className="bold-text">MERN Stack training sessions</span>, we
            were given{" "}
            <span className="bold-text">assignments after every session</span>.
            The lecture recordings were usually shared in{" "}
            <span className="bold-text">WhatsApp groups</span>, and after some
            time, it became{" "}
            <span className="bold-text">hard to find resources</span> whenever
            we needed them.
          </p>

          <p className="highlight">
            To solve this, we created <span className="bold-text">Lumora</span>{" "}
            – a{" "}
            <span className="bold-text">
              structured learning platform for MERN stack
            </span>{" "}
            where all lectures, assignments, and resources are organized in one
            place for easy access.
          </p>

          <div className="bold-text dal-projects">Key Features:</div>
          <ul className="short-content">
            <li>
              Organized MERN stack courses with videos, assignments, and
              resources.
            </li>
            <li>
              Clerk authentication to restrict access only to college students.
            </li>
          </ul>
          <p className="features-intro mb-5">
            Below are some highlights and screenshots from the platform.
          </p>
        </div>
      </div>

      {/* Feature Images */}
      <div className="lumora-feature-images">
        {featureImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>
      <ProjectNav />
    </div>
  );
}

export default Lumora;

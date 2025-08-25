import React from "react";
import "./About.css";
import {
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNotion,
  SiPostman,
  SiMysql,
} from "react-icons/si";

function About() {
  const techIcons = [
    { name: "React", icon: <FaReact color="#61DBFB" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs color="#3C873A" size={40} /> },
    { name: "Express", icon: <SiExpress color="#000" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={50} /> },
    { name: "Java", icon: <FaJava color="#007396" size={40} /> },
    { name: "Python", icon: <FaPython color="#3776AB" size={40} /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={40} /> },
    { name: "SQL", icon: <SiMysql color="#00758F" size={40} /> },
    { name: "Notion", icon: <SiNotion color="#000" size={40} /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" size={40} /> },
  ];

  const imageRow = [
    "https://u.cubeupload.com/ashishl/fadChatGPTImageMar30202.png",
    "https://u.cubeupload.com/ashishl/ChatGPTImageMar31202.png",
    "https://u.cubeupload.com/ashishl/ChatGPTImageMar30202.png",
  ];

  const experience = [
    {
      title: "Olive Crypto Systems – Full Stack Developer Intern",
      date: "June 2025 – July 2025",
      points: [
        "Built a MERN-based internal training platform with role-based dashboards for employees, trainers, and admins.",
        "Integrated skill assessments, progress tracking, certificates, and maintained audit-ready compliance logs.",
      ],
      images: [
        // "https://u.cubeupload.com/ashishl/Snapchat322691115.jpg",
        "https://u.cubeupload.com/ashishl/Snapchat1730730912.jpg",
      ],
    },
  ];

  const education = [
    {
      title: "VNR Vignana Jyothi Institute of Engineering and Technology",
      date: "B.Tech in Information Technology – CGPA: 9.08 (2023–2027)",
      desc: "Engaged in technical projects, hackathons, and leadership activities.",
      images: [
        ["https://u.cubeupload.com/ashishl/1744132148860.jpg"],
        [
          "https://i.postimg.cc/VLy6wzML/Web-Alchemy-Winner-Certificate.png",
          "https://i.postimg.cc/FHXZbMzF/Ashish-Lukka-3.png",
        ],
      ],
    },
  ];

  const friends = [
    { name: "Srikar Janjirala", link: "https://www.linkedin.com/in/srikar-janjirala/" },
    { name: "Swaroop Mallidi", link: "https://www.linkedin.com/in/swaroop-mallidi/" },
    { name: "Shaik Afzal Elahi", link: "https://www.linkedin.com/in/shaik-afzal-elahi/" },
    { name: "Rahul Aligeti", link: "https://www.linkedin.com/in/rahul-aligeti-1ab6ab308/" },
    { name: "Om Kasar", link: "https://www.linkedin.com/in/omkasar27/" },
    { name: "Abhinav Cheruku", link: "https://www.linkedin.com/in/abhinav-cheruku-46a224304/" },
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">About.</h1>

      <div className="intro-text">
        <p>
          Passionate developer from <span className="bold-text">Hyderabad</span>{" "}
          and co-founder of{" "}
          <a
            href="https://buildwithlumora.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="lumora-link"
          >
            Lumora
          </a>
          .
        </p>
        <p>
          I create, responsive
          websites with clean design and useful features, always exploring ways
          to make technology easier and more engaging.
        </p>
      </div>

      {/* Image Row */}
      <div className="image-row">
        {imageRow.map((src, idx) => (
          <img key={idx} src={src} alt={`Image ${idx + 1}`} className="row-image fade-in-img" loading="lazy" onLoad={(e) => e.target.classList.add("loaded") }/>
        ))}
      </div>

      <div className="tagline">
        I build <span className="bold-text">websites</span> by day and watch{" "}
        <span className="bold-text">twitch</span> streams by night (thanks, time
        zones).
      </div>

      <img
        src="https://u.cubeupload.com/ashishl/Screenshot2025081023.png"
        alt="Workspace"
        className="feature-image"
      />

      {/* Tech Description */}
      <div className="tech-description">
        <h2 className="section-title1">Tech Stack</h2>
        <p>
          <span className="bold-text">React</span> for frontend and{" "}
          <span className="bold-text">Node.js</span> with{" "}
          <span className="bold-text">MongoDB</span> for backend development.
        </p>
        <p>
          Testing <span className="bold-text">APIs</span> using{" "}
          <span className="bold-text">Postman</span> and ensuring reliability
          through best practices.
        </p>
        <p>
          Maintaining collaboration and project documentation using{" "}
          <span className="bold-text">Notion</span>.
        </p>
      </div>

      {/* Tech Carousel */}
      <div className="tech-stack-section1">
        <div className="tech-track">
          {[...techIcons, ...techIcons].map((tech, idx) => (
            <div key={idx} className="tech-item">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="experience-section">
        <h2>Experience</h2>
        {experience.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <h3>{exp.title}</h3>
            <div className="idate">{exp.date}</div>
            {exp.points.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="experience-images">
              {exp.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Experience ${i + 1}`}
                  className="edu-image fade-in-img"
                  loading="lazy"
                  onLoad={(e) => e.target.classList.add("loaded") }
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="education-section">
        <h2>Education</h2>
        {education.map((edu, idx) => (
          <div key={idx} className="education-item">
            <h3>{edu.title}</h3>
            <div className="idate">{edu.date}</div>
            <p>{edu.desc}</p>
            {edu.images.map((row, i) => (
              <div
                key={i}
                className={`education-images ${row.length === 1 ? "single" : "double"}`}
              >
                {row.map((src, j) => (
                  <img key={j} src={src} alt="Education" className="edu-image fade-in-img" loading="lazy" 
                  onLoad={(e) => e.target.classList.add("loaded") }/>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Friends */}
      <div className="friends-section">
        <h2>Friends</h2>
        <div className="friends-grid">
          {friends.map((f, idx) => (
            <div key={idx} className="friend-item">
              <p className="friend-name">{f.name}</p>
              <a href={f.link} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

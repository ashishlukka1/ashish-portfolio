import React, { useState } from "react";
import { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css"; // External CSS file
import { GoArrowUpRight } from "react-icons/go";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNotion,
  SiPostman,
  SiClerk,
} from "react-icons/si";
import "../TechStack/TechStack.css";

const AboutSection = () => {
  const [isCollaborateHovered, setIsCollaborateHovered] = useState(false);
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [speed, setSpeed] = useState(0.5);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let lastTimestamp = 0;
    let scrollPosition = 0;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;

      if (scrollContainer && isScrolling) {
        // Make scrolling speed consistent regardless of frame rate
        const delta = (speed * elapsed) / 16;
        scrollPosition += delta;
        scrollContainer.scrollLeft = scrollPosition;

        // Check if we need to reset the scroll position
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          // Smooth reset to prevent jumps
          scrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        }
      }

      lastTimestamp = timestamp;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isScrolling, speed]);

  const handleMouseEnter = () => {
    setSpeed(0.1); // Slow down instead of stopping completely
  };

  const handleMouseLeave = () => {
    setSpeed(0.5); // Return to normal speed
  };

  // Icons with styled wrappers
  const icons = [
    {
      icon: (
        <div className="icon-wrapper python-icon">
          <FaPython />
        </div>
      ),
      name: "Python",
    },
    {
      icon: (
        <div className="icon-wrapper java-icon">
          <FaJava />
        </div>
      ),
      name: "Java",
    },
    {
      icon: (
        <div className="icon-wrapper html-icon">
          <FaHtml5 />
        </div>
      ),
      name: "HTML5",
    },
    {
      icon: (
        <div className="icon-wrapper css-icon">
          <FaCss3Alt />
        </div>
      ),
      name: "CSS3",
    },
    {
      icon: (
        <div className="icon-wrapper bootstrap-icon">
          <FaBootstrap />
        </div>
      ),
      name: "Bootstrap",
    },
    {
      icon: (
        <div className="icon-wrapper js-icon">
          <FaJs />
        </div>
      ),
      name: "JavaScript",
    },
    {
      icon: (
        <div className="icon-wrapper react-icon">
          <FaReact />
        </div>
      ),
      name: "ReactJS",
    },
    {
      icon: (
        <div className="icon-wrapper node-icon">
          <FaNodeJs />
        </div>
      ),
      name: "NodeJS",
    },
    {
      icon: (
        <div className="icon-wrapper express-icon">
          <SiExpress />
        </div>
      ),
      name: "ExpressJS",
    },
    {
      icon: (
        <div className="icon-wrapper mongodb-icon">
          <SiMongodb />
        </div>
      ),
      name: "MongoDB",
    },
    {
      icon: (
        <div className="icon-wrapper notion-icon">
          <SiNotion />
        </div>
      ),
      name: "Notion",
    },
    {
      icon: (
        <div className="icon-wrapper postman-icon">
          <SiPostman />
        </div>
      ),
      name: "Postman",
    },
    {
      icon: (
        <div className="icon-wrapper clerk-icon">
          <SiClerk />
        </div>
      ),
      name: "Clerk",
    },
  ];

  // Education data
  const education = [
    {
      company: "Full Stack Developer Intern",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFu8_G-4duLFw/company-logo_200_200/company-logo_200_200/0/1656053742387/olivecrypto_logo?e=2147483647&v=beta&t=MKb9LAE837G_txBMJtgZuhFUobIvHGMoJP1iQCQbtsc",
      role: "Olive Crypto Systems Pvt. Ltd.",
      period: "June 2025 - July 2025",
      description:
        "Gained real-world full stack development experience by building an internal employee training system at Olive Crypto Systems. The platform streamlined onboarding, delivered structured learning modules, tracked employee progress, and maintained audit-ready compliance records.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Git & GitHub",
        "Agile Methodology",
        "Team Collaboration",
      ],
      bgColor: "rgb(52, 61, 36)",
    },
    {
      company: "B-Tech, Information Technology",
      logo: "https://i.postimg.cc/7ZkSn6xD/Official-logo-of-VNRVJIET.png",
      role: "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology",
      period: "September 2023 - Present",
      description:
        "I'm currently pursuing a B.Tech in Information Technology at VNR VJIET, Telangana, with a GPA of 9.3. My academic focus is on Frontend and Backend Development using the MERN stack. I'm proficient in Python and JavaScript, and I regularly use tools like Postman and Notion for API testing and project organization.",
      skills: [
        "HTML5 & CSS3",
        "JavaScript",
        "React.js",
        "Responsive Web Design",
        "UI Design",
        "MongoDB",
        "Postman",
        "Notion",
        "REST Client",
      ],
      bgColor: "#1A2234",
    },
    {
      company: "Intermediate Graduate",
      logo: "https://i.postimg.cc/SNQCjKfv/images.jpg",
      role: "Resonance Junior College",
      period: "March 2021 - June 2023",
      description:
        "I completed my 12th grade with 97.3%, building a strong foundation in Mathematics, Physics, and Chemistry. This academic experience sparked my interest in technology and inspired me to pursue a B.Tech in Information Technology to deepen my knowledge and skills in the field.",
      skills: ["Maths", "Physics", "Chemistry"],
      bgColor: "#2A1B30",
    },
  ];

  // New Clickable Cards data - Replace with your own images and links
  const clickableCards = [
    {
      title: "Project One",
      description: "A brief description of the first project and what it does.",
      image:
        "https://i.postimg.cc/SRX44fFc/Chat-GPT-Image-Mar-30-2025-03-50-35-PM.png",
    },
    {
      title: "Project Two",
      description:
        "A brief description of the second project and its features.",
      image:
        "https://i.postimg.cc/Df5nXmy9/Chat-GPT-Image-Mar-31-2025-06-51-12-PM.png",
    },
    {
      title: "Project Three",
      description:
        "A brief description of the third project and its capabilities.",
      image:
        "https://i.postimg.cc/R0jQGMC9/Chat-GPT-Image-Mar-30-2025-01-53-45-PM.png",
    },
  ];

  // Featured Projects/Cards data
  const featuredProjects = [
    {
      title: "Project One",
      image:
        "https://i.postimg.cc/YC4m4zKT/Chat-GPT-Image-Mar-30-2025-03-50-35-PM-removebg-preview-removebg-preview-2-1.png", // Replace with your image URL
      link: "https://project1.com",
    },
    {
      title: "Project Two",
      description:
        "A brief description of the second project and its features.",
      image: "https://example.com/project2.jpg", // Replace with your image URL
      link: "https://project2.com",
    },
    {
      title: "Project Three",
      description:
        "A brief description of the third project and its capabilities.",
      image: "https://example.com/project3.jpg", // Replace with your image URL
      link: "https://project3.com",
    },
  ];

  // Friends data
  const friends = [
    {
      name: "Srikar Janjirala",
      role: "Team Lead - Lumora",
      website: "www.linkedin.com/in/srikar-janjirala/",
    },
    {
      name: "Ashish Lukka",
      role: "Associate Team Lead - Lumora",
      website: "www.linkedin.com/in/srikar-janjirala/",
    },
    {
      name: "Swaroop Mallidi",
      role: "The Figma Guy - Lumora",
      website: "www.linkedin.com/in/swaroop-mallidi/",
    },
    {
      name: "Abhinav Cheruku",
      role: "The Design Lead - Lumora",
      website: "www.linkedin.com/in/abhinav-cheruku-46a224304/",
    },
    {
      name: "Afzal Elahi",
      role: "Full Stack Developer - Lumora",
      website: "www.linkedin.com/in/shaik-afzal-elahi-24899628b/",
    },
    {
      name: "Rahul Aligeti",
      role: "Backend Developer - Lumora",
      website: "www.linkedin.com/in/rahul-aligeti-1ab6ab308/",
    },
  ];

  return (
    <div className="about-section">
      <div className="container">
        {/* About Me Section */}
        <div className="row mb-3">
          <div className="col-12 mob">
            <p className="section-text">
              Hey there! I'm Ashish, a passionate web-developer from Hyderabad,
              India. I build websites by the day and watch twitch streams by the
              night (thanks, time zones).
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 mm">
            <div className="row">
              {clickableCards.map((card, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    <div className="clickable-card">
                      <div className="card-image-container">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="card-image"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section with Timeline */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="friend-title mb-4">Education</h2>
            <div className="timeline-container">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-left">
                    <div className="timeline-line"></div>
                    <div className="timeline-circle">
                      {edu.logo ? (
                        <a target="_blank" rel="noopener noreferrer">
                          <img
                            src={edu.logo}
                            alt={`${edu.company} logo`}
                            className="timeline-logo"
                          />
                        </a>
                      ) : (
                        <span>{edu.company[0]}</span>
                      )}
                    </div>
                  </div>
                  <div className="timeline-branch"></div>
                  <div
                    className="education-card"
                    style={{ backgroundColor: edu.bgColor || "#101725" }}
                  >
                    <div className="education-header">
                      <div>
                        <h4 className="role-title">{edu.role}</h4>
                        <h5 className="company-name">{edu.company}</h5>
                        <p className="time-period">{edu.period}</p>
                      </div>
                    </div>
                    <p className="description">{edu.description}</p>
                    <div className="skills-section">
                      <h6 className="skills-title">Skills</h6>
                      <div className="skills-container">
                        {edu.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tech-stack-section">
          <h1>My tech stack</h1>
          <div className="carousel-container">
            <div
              className="tech-stack-container"
              ref={scrollRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="tech-stack mb-5">
                {[...icons, ...icons].map((item, index) => (
                  <div key={index} className="tech-item" title={item.name}>
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-left"></div>
            <div className="fade-right"></div>
          </div>
        </div>

        {/* Friends/Team Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="friend-title mb-4">Team Lumora</h2>
            <p className="friends-intro mb-5">
              A passionate tech team dedicated to building innovative, scalable,
              and user-centric solutions that empower the digital world.
            </p>

            <div className="row">
              {friends.map((friend, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="friend-card">
                    <h4 className="friend-name mb-2">{friend.name}</h4>
                    <p className="friend-role mb-2">{friend.role}</p>
                    <a
                      href={`https://${friend.website}`}
                      className="friend-link"
                      target="_blank"
                    >
                      <span className="friend-roles">Linkedin</span>
                      <span className="arrow">
                        <GoArrowUpRight className="external-link-icon" />
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Let's Collaborate Button */}
        <div className="row mt-5 mb-3">
          <div className="col-12 d-flex justify-content-center mt-3">
            <button
              className={`collaborate-btn ${
                isCollaborateHovered ? "hovered" : ""
              }`}
              onMouseEnter={() => setIsCollaborateHovered(true)}
              onMouseLeave={() => setIsCollaborateHovered(false)}
            >
              {isCollaborateHovered
                ? "ashishlukka2005@gmail.com"
                : "Let's collaborate"}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3 mb-4">
            <small className="button-caption">
              I can design buttons and draw rectangles for you.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import React from "react";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNotion,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import "./Home.css";
import { AnimatedTooltipPreview } from "./AnimatedToolTipPreview";
import { LinkPreview } from "../lib/LinkPreview";

function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ashishlukka2005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="home">
      <div className="bento-cards">
        <div className="bento-card1 bento-card">
          <div className="card-content">
            <div className="content-left">
              <div className="text-content">
                <div className="welcome">Welcome</div>
                <p className="bento-one">
                  Hello, I'm <span className="name">Ashish Lukka</span>, a
                  full-stack developer, passionate about crafting seamless user
                  experiences and building smart, scalable tools.
                </p>
                <p className="bento-one">
                  Feel free to reach out to me if you have any projects in mind,
                  or just to say hello.
                </p>
              </div>
              <div className="bento-one-socials">
                <div className="link">
                  <LinkPreview
                    url="https://www.linkedin.com/in/ashish-lukka/"
                    imageSrc="https://i.postimg.cc/HWNT4NTb/Screenshot-2025-07-02-130119.png"
                    isStatic
                    className="text-white text-decoration-none"
                  >
                    Linkedin
                  </LinkPreview>
                </div>
                <div className="link">
                  <LinkPreview
                    url="https://github.com/ashishlukka1"
                    className="text-white text-decoration-none"
                  >
                    Github
                  </LinkPreview>
                </div>
                <div className="link">
                  <LinkPreview
                    url="https://drive.google.com/file/d/1mP-ke2wUbF7np1IzslAfWrYZvgiZZMud/view?usp=sharing"
                    imageSrc="https://i.postimg.cc/J4P7HhG4/jvvhvkhv.png"
                    isStatic
                    className="text-white text-decoration-none"
                  >
                    Resume
                  </LinkPreview>
                </div>
                <div className="link">
                  Acheivements
                </div>
              </div>
            </div>
            <img
              src="https://i.postimg.cc/ZK4vnYyj/asdasdasd.png"
              alt="Ashish Lukka - Profile"
              className="profile-image"
            />
          </div>
        </div>

        <div className="bento-card2 bento-card">
   
            <div className="about-me">
              <div className="about-me-text">About Me</div>
              <div className="about-me-content">
                A passionate web-developer from Hyderabad, India.
              </div>
              <div className="about-me-content">
                I build websites by the day and watch twitch streams by the
                night (thanks, time zones).
              </div>
              <div className="tech-stack">
                <div className="tech-stack-title">Tech Stack</div>
                <div className="tech-icons-container">
                  <div className="tech-icons-scroll">
                    <FaHtml5 className="tech-icon" title="HTML5" />
                    <FaCss3Alt className="tech-icon" title="CSS3" />
                    <FaBootstrap className="tech-icon" title="Bootstrap" />
                    <FaJs className="tech-icon" title="JavaScript" />
                    <FaReact className="tech-icon" title="React" />
                    <FaNodeJs className="tech-icon" title="Node.js" />
                    <SiExpress className="tech-icon" title="Express" />
                    <SiMongodb className="tech-icon" title="MongoDB" />
                    <SiNotion className="tech-icon" title="Notion" />
                    <SiPostman className="tech-icon" title="Postman" />
                    <FaJava className="tech-icon" title="Java" />
                    <FaPython className="tech-icon" title="Python" />
                    <SiTailwindcss className="tech-icon" title="Tailwind CSS" />
                  </div>
                </div>
              </div>
              <div className="education">
                <div className="tech-stack-title">Education</div>

                <div className="edu-item">
                  <img
                    src="https://pbs.twimg.com/profile_images/1688442970587201536/dCewVE4I_200x200.jpg"
                    alt="VNR VJIET"
                    className="edu-logo"
                  />
                  <div>
                    <div className="edu-title">
                      VNR VJIET
                    </div>
                    <div className="edu-duration">2023 – 2027</div>
                   
                  </div>
                </div>
                <div className="tech-stack-title">Internship</div>

                <div className="edu-item">
                  <img
                    src="https://media.licdn.com/dms/image/v2/C4D0BAQFu8_G-4duLFw/company-logo_200_200/company-logo_200_200/0/1656053742387/olivecrypto_logo?e=2147483647&v=beta&t=MKb9LAE837G_txBMJtgZuhFUobIvHGMoJP1iQCQbtsc"
                    alt="Olive Crypto Systems"
                    className="edu-logo"
                  />
                  <div>
                    <div className="edu-title">Olive Crypto Systems</div>
                    <div className="edu-duration">June 2025 – July 2025</div>
        
                  </div>
                </div>
            
            </div>
          </div>
        </div>

        <div className="bento-card3 bento-card">
          <div className="card-content">
            <div className="about-me-text mb-4">
              Let's start working together!
            </div>
            <div className="italic-text">Contact Details</div>
            <div className="relative w-fit">
              {copied && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-1 rounded shadow-sm animate-fade">
                  Email copied
                </div>
              )}

              <div
                className="email cursor-pointer select-none text-white hover:text-purple-400 transition"
                onClick={handleCopy}
              >
                ashishlukka2005@gmail.com
              </div>
            </div>

            <div className="country">India</div>
            <div className="socials mt-3">
              <div className="socials-text">Coding Profiles</div>
              <div className="content">
                <div className="social-link mb-2">
                  <LinkPreview
                    url="https://linktr.ee/ashishlukka"
                    className="social-link text-white"
                  >
                    Linktree
                  </LinkPreview>
                </div>
              </div>

              <div className="socials-text">Socials</div>

              <div className="social-link">
                <LinkPreview
                  url="https://www.linkedin.com/in/ashish-lukka/"
                  imageSrc="https://i.postimg.cc/HWNT4NTb/Screenshot-2025-07-02-130119.png"
                  isStatic
                  className="text-white "
                >
                  Linkedin
                </LinkPreview>
              </div>

              <div className="social-link">
                <LinkPreview
                  url="https://github.com/ashishlukka1"
                  className="social-link text-white"
                >
                  Github
                </LinkPreview>
              </div>

              <div className="social-link">
                <LinkPreview
                  url="https://open.spotify.com/user/31ghkpczqppipovjfocgs4zhxkue"
                  imageSrc="https://i.postimg.cc/VsqFXxqV/Screenshot-2025-07-02-125834.png"
                  isStatic
                  className="social-link text-white"
                >
                  Spotify
                </LinkPreview>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bento-card4 bento-card project-card"
          style={{
            backgroundImage: `url('')`,
          }}
        >
          <LinkPreview
            url="https://olive-skill-test.vercel.app/"
            imageSrc="https://i.postimg.cc/DwQZ6Kf8/Screenshot-2025-07-02-151216.png"
            isStatic
            className="project-arrow-link text-white"
          >
            <a
              href="https://olive-skill-test.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1"
            >
              <MdArrowOutward size={20} color="rgba(255, 255, 255, 0.751)" />
            </a>
          </LinkPreview>

          <div className="project-content">
            <h3 className="project-title">Olive Skill Test</h3>
            <p className="project-description">
              Built a demo training system for onboarding and progress tracking,
              inspired by the original product from my internship.
            </p>
          </div>
        </div>

        <div
          className="bento-card5 bento-card project-card"
          style={{
            backgroundImage: `url('')`,
          }}
        >
          <LinkPreview
            url="https://digital-academic-library.vercel.app/"
            imageSrc="https://i.postimg.cc/Xq9xqJ3V/Screenshot-2025-07-02-144928.png"
            isStatic
            className="project-arrow-link text-white"
          >
            <a
              href="https://digital-academic-library.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 yup"
            >
              <MdArrowOutward size={20} color="rgba(255, 255, 255, 0.751)" />
            </a>
          </LinkPreview>

          <div className="project-content">
            <h3 className="project-title">Digital Academic Library</h3>
            <p className="project-description">
              A platform to discover resources, collaborate in dedicated
              discussion rooms and solve problems using AI-ChatBot.
            </p>
          </div>
        </div>

        <div
          className="bento-card6 bento-card project-card"
          style={{
            backgroundImage: `url('')`,
          }}
        >
          <LinkPreview
            url="https://vnrvjiet-seminar-hall.vercel.app/"
            imageSrc="https://i.postimg.cc/HL2gcYY9/Screenshot-2025-07-02-145826.png"
            isStatic
            className="project-arrow-link text-white"
          >
            <a
              href="https://vnrvjiet-seminar-hall.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 yup"
            >
              <MdArrowOutward size={20} color="rgba(255, 255, 255, 0.751)" />
            </a>
          </LinkPreview>

          <div className="project-content">
            <h3 className="project-title">Campus Hall Scheduler</h3>
            <p className="project-description">
              A streamlined system to book and manage seminar halls with
              real-time updates, role-based access, and approval tracking.
            </p>
          </div>
        </div>

        

        <div
          className="bento-card8 bento-card project-card"
          style={{
            backgroundImage: `url('')`,
          }}
        >
          <LinkPreview
            url="https://draft-blogapp.vercel.app/"
            imageSrc="https://i.postimg.cc/x1TtR9nd/Screenshot-2025-07-02-142411.png"
            isStatic
            className="project-arrow-link text-white"
          >
            <a
              href="https://draft-blogapp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 yup"
            >
              <MdArrowOutward size={20} color="rgba(255, 255, 255, 0.751)" />
            </a>
          </LinkPreview>

          <div className="project-content">
            <h3 className="project-title">Draft - Blog App</h3>
            <p className="project-description">
              A modern blog platform with a clean, responsive design. It lets
              users write, edit, and share posts with role-based access control.
            </p>
          </div>
        </div>

        <div className="bento-card9 w-100">
          {/* Content for card 9 */}
          <AnimatedTooltipPreview />
        </div>
        <div className="bento-card7 bento-card">
         <div className="footer">©2025 · Crafted with ♥️ using React by <span className="fw-bold">Ashish Lukka.</span></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

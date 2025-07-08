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

function AboutCard() {
  return (
    <div className="bento-card2 bento-card">
      <div className="about-me">
        <div className="about-me-text">About Me</div>
        <div className="about-me-content">
          A passionate web-developer from Hyderabad, India.
        </div>
        <div className="about-me-content">
          I build websites by the day and watch twitch streams by the night
          (thanks, time zones).
        </div>
        <div className="tech-stack1">
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
          <div className="tech-stack-title">Education</div>
          <div className="edu-item">
            <img
              src="https://pbs.twimg.com/profile_images/1688442970587201536/dCewVE4I_200x200.jpg"
              alt="VNR VJIET"
              className="edu-logo"
            />
            <div>
              <div className="edu-title">VNR VJIET</div>
              <div className="edu-duration">2023 – 2027</div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default AboutCard;

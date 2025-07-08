import React, { useRef, useEffect, useState } from "react";
import { 
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, 
  FaJs, FaReact, FaNodeJs 
} from "react-icons/fa";
import { 
  SiExpress, SiMongodb, SiNotion, SiPostman, SiClerk 
} from "react-icons/si";
import "./TechStack.css";

const TechStack = () => {
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
      icon: <div className="icon-wrapper python-icon">
              <FaPython />
            </div>, 
      name: "Python" 
    },
    { 
      icon: <div className="icon-wrapper java-icon">
              <FaJava />
            </div>, 
      name: "Java" 
    },
    { 
      icon: <div className="icon-wrapper html-icon">
              <FaHtml5 />
            </div>, 
      name: "HTML5" 
    },
    { 
      icon: <div className="icon-wrapper css-icon">
              <FaCss3Alt />
            </div>, 
      name: "CSS3" 
    },
    { 
      icon: <div className="icon-wrapper bootstrap-icon">
              <FaBootstrap />
            </div>, 
      name: "Bootstrap" 
    },
    { 
      icon: <div className="icon-wrapper js-icon">
              <FaJs />
            </div>, 
      name: "JavaScript" 
    },
    { 
      icon: <div className="icon-wrapper react-icon">
              <FaReact />
            </div>, 
      name: "ReactJS" 
    },
    { 
      icon: <div className="icon-wrapper node-icon">
              <FaNodeJs />
            </div>, 
      name: "NodeJS" 
    },
    { 
      icon: <div className="icon-wrapper express-icon">
              <SiExpress />
            </div>, 
      name: "ExpressJS" 
    },
    { 
      icon: <div className="icon-wrapper mongodb-icon">
              <SiMongodb />
            </div>, 
      name: "MongoDB" 
    },
    { 
      icon: <div className="icon-wrapper notion-icon">
              <SiNotion />
            </div>, 
      name: "Notion" 
    },
    { 
      icon: <div className="icon-wrapper postman-icon">
              <SiPostman />
            </div>, 
      name: "Postman" 
    },
    { 
      icon: <div className="icon-wrapper clerk-icon">
              <SiClerk />
            </div>, 
      name: "Clerk" 
    }
  ];

  return (
    <div className="tech-stack-section">
      <h1>My tech stack</h1>
      <div className="carousel-container">
        <div 
          className="tech-stack-container" 
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="tech-stack">
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
  );
};

export default TechStack;
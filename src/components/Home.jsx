// src/pages/Home.jsx
import { useState } from "react";
import AchievementsModal from "../components/AchievementsModal";
import { AnimatedTooltipPreview } from "../components/AnimatedToolTipPreview";
import ProjectCard from "../components/ProjectCard";
import ProfileCard from "../components/ProfileCard";
import AboutCard from "../components/AboutCard";
import ContactCard from "../components/ContactCard";
import FooterCard from "../components/FooterCard";

import "../Styles/Home.css";

const achievements = [
  {
    image: "https://i.postimg.cc/52yzT71B/1744132148860.jpg",
    title: "Webathon - 3.0 2025 Winner",
    description:
      "Built Digital Academic Library, a real-time collaboration platform with AI-powered support, securing 1st place in a 24-hour hackathon.",
  },
  {
    image: "https://i.postimg.cc/VLy6wzML/Web-Alchemy-Winner-Certificate.png",
    title: "Web Alchemy - 2.0 2025 Winner",
    description:
      "Secured 2nd place in Web Alchemy, a mini hackathon organized by CSI VNRVJIET, by building an innovative web-based solution under time constraints. Demonstrated strong front-end development skills and creative problem-solving.",
  },
];

function Home() {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ashishlukka2005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="home">
      <div className="bento-cards">
        <ProfileCard setModalOpen={setModalOpen} />
        <AboutCard />
        <ContactCard copied={copied} handleCopy={handleCopy} />

        <ProjectCard
          title="Olive Skill Test"
          description="Built a demo training system for onboarding and progress tracking, inspired by the original product from my internship."
          link="https://olive-skill-test.vercel.app/" 
          image="https://i.postimg.cc/DwQZ6Kf8/Screenshot-2025-07-02-151216.png"  
          className="bento-card4"
        />
        <ProjectCard
          title="Digital Academic Library"
          description="A platform to discover resources, collaborate in dedicated discussion rooms and solve problems using AI-ChatBot."
          link="https://digital-academic-library.vercel.app/"
          image="https://i.postimg.cc/Xq9xqJ3V/Screenshot-2025-07-02-144928.png"
          className="bento-card5"
        />
        <ProjectCard
          title="Campus Hall Scheduler"
          description="A streamlined system to book and manage seminar halls with real-time updates, role-based access, and approval tracking."
          link="https://vnrvjiet-seminar-hall.vercel.app/"
          image="https://i.postimg.cc/HL2gcYY9/Screenshot-2025-07-02-145826.png"
          className="bento-card6"
        />
        <ProjectCard
          title="Draft - Blog App"
          description="A modern blog platform with a clean, responsive design. It lets users write, edit, and share posts with role-based access control."
          link="https://draft-blogapp.vercel.app/"
          image="https://i.postimg.cc/x1TtR9nd/Screenshot-2025-07-02-142411.png"
          className="bento-card8"
        />

        <div className="bento-card9 w-100">
          <AnimatedTooltipPreview />
        </div>
        <FooterCard />
      </div>
      <AchievementsModal
        achievements={achievements}
        show={modalOpen}
        setShow={setModalOpen}
      />
    </div>
  );
}

export default Home;
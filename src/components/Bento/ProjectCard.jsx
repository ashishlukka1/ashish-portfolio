// src/components/ProjectCard.jsx
import { MdArrowOutward } from "react-icons/md";
import { LinkPreview } from "./LinkPreview.tsx";

function ProjectCard({ title, description, link, image, className }) {
  return (
    <div className={`bento-card ${className} project-card1`} style={{ backgroundImage: `url('')` }}>
      <LinkPreview url={link} imageSrc={image} isStatic className="project-arrow-link text-white">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 yup"
        >
          <MdArrowOutward size={20} color="rgba(255, 255, 255, 0.751)" />
        </a>
      </LinkPreview>

      <div className="project-content">
        <h3 className="project-title1">{title}</h3>
        <p className="project-description1">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

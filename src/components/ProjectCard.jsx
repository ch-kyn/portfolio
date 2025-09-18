import { useState } from "react";
import Overlay from "./Overlay";
import '../../public/css/projects.scss';

const ProjectCard = ({ project, onClick }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const openOverlay = () => setIsOverlayVisible(true);
  const closeOverlay = () => setIsOverlayVisible(false);

  return (
    <>
      <section className="article" onClick={onClick}>
        <img src={project.cover} alt={project.title} />
        <div className="project-text">
          <h2>{project.title}</h2>
          <p>{project.overview}</p>
          <div className="actions">
            <button className="actions__button button--explore" onClick={openOverlay}>
                Read More
            </button>
            {project.github && (
              <a className="actions__button" href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.live && (
              <a className="actions__button" href={project.live} target="_blank" rel="noreferrer">
                Live Site
              </a>
            )}
          </div>
        </div>
      </section>

      {project.overlay && (
        <Overlay
          {...project.overlay}
          visible={isOverlayVisible}
          onClose={closeOverlay}
        />
      )}
    </>
  );
};

export default ProjectCard;



import { useState } from "react";
import Overlay from "./Overlay";
import '../../public/css/projects.scss';

const ProjectCard = ({ project, onClick }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const openOverlay = () => setIsOverlayVisible(true);
  const closeOverlay = () => setIsOverlayVisible(false);
  const tech = project.tech;

  return (
    <>
      <section className="article article__card" onClick={onClick}>
        <img src={project.cover} alt={project.title} />
        <div className="project-text">
          <h2>{project.title}</h2>
          <p className="article__text">{project.overview}</p>
          <div className="article__card--btm">
            <div className="article__techs">
              {tech && tech.map((t, idx) => {
                return <span key={idx} className="article__tech">{t.name}</span>
              })}
            </div>
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



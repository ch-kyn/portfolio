import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Overlay from "../components/Overlay";
import projects from "../data/projects.json";

const Projects = () => {
	const [overlayVisible, setOverlayVisible] = useState(false);
	const [clickedIndex, setClickedIndex] = useState(0);

	return (
		<div className="projects-page">
			<h1>Projects</h1>
			<div className="articles">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
						onClick={() => {
							setClickedIndex(index);
							setOverlayVisible(true);
						}}
					/>
				))}
			</div>

			<Overlay
				visible={overlayVisible}
				onClose={() => setOverlayVisible(false)}
				projects={projects}        // pass all projects for tab menu
				initialIndex={clickedIndex} // show the clicked project first
			/>
		</div>
	);
};

export default Projects;

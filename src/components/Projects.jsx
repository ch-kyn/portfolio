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
				{projects.map((project, idx) => (
					<ProjectCard
						key={idx}
						project={project}
						onClick={() => {
							setClickedIndex(idx);
							setOverlayVisible(true);
						}}
					/>
				))}
			</div>

			<Overlay
				visible={overlayVisible}
				onClose={() => setOverlayVisible(false)}
				projects={projects}
				initialIndex={clickedIndex}
			/>
		</div>
	);
};

export default Projects;

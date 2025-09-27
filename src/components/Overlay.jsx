import { useEffect, useState } from "react";
import "../../public/css/projects.scss";
import icons from "../utils/icons.jsx";
import { FaSmile } from "react-icons/fa";
import Carousel from "./Carousel.jsx";

const Overlay = ({ visible, onClose, projects, initialIndex = 0 }) => {
	const [activeIndex, setActiveIndex] = useState(initialIndex);

	useEffect(() => {
		if (visible) {
			setActiveIndex(initialIndex); // reset active project when opening
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [visible, initialIndex]);

	if (!visible || !projects?.length) return null;

	const activeProject = projects[activeIndex];

	return (
		<div className="overlay overlay--active">
			<div className="overlay__content">
				<div className="overlay__bar">
					<div className="overlay__menu">
						{projects.map((proj, index) => (
							<button
								key={index}
								className={
									index === activeIndex
										? "overlay__btn overlay__btn--active"
										: "overlay__btn"
								}
								onClick={() => setActiveIndex(index)}
							>
								{proj.title}
							</button>
						))}
					</div>

					<button className="button--exit" onClick={onClose}>
						<img src="/svg/exit-cross.svg" alt="exit button" />
					</button>
				</div>

				<div className="col">
					<article className="overlay__text">
						<h2 className="overlay__title">{activeProject.title}</h2>
						<p>{activeProject.overview}</p>
						{activeProject.images?.length > 0 && (
							<Carousel images={activeProject.images} />
						)}
						{activeProject.tech && (
							<>
								<h3>Technology</h3>
								<div className="tech">
									{activeProject.tech.map((t, idx) => {
									const IconComponent = icons[t.icon];
									return (
										<span key={idx} className="tech__icon">
											{IconComponent ? <IconComponent size={32} /> : <FaSmile size={32}/>}
											{console.log(IconComponent, t, t.icon, icons)}
											<span>{t.name}</span>
										</span>
									);
									})}
								</div>
							</>
						)}

						{activeProject.process && (
							<>
								<h3>Process</h3>
								{activeProject.process.split("\n").map((para, i) => (
									<p key={i}>{para}</p>
								))}
							</>
						)}
					</article>
				</div>
			</div>
		</div>
	);
};

export default Overlay;

import { useState } from "react";
import "../../public/css/projects.scss";

const Carousel = ({ images }) => {
	const [current, setCurrent] = useState(0);

	const prev = () => setCurrent((current - 1 + images.length) % images.length);
	const next = () => setCurrent((current + 1) % images.length);

	return (
		<div className="carousel__cont">
			<div className="carousel__imgs" style={{ transform: `translateX(-${current * 100}%)` }}>
				{images.map((img, i) => (
					<img key={i} src={img} alt={`Slide ${i}`} className="carousel__img" />
				))}
			</div>

			<button onClick={prev} className="carousel__btn carousel__btn--left">
				<img
					src="/svg/arrow2-left.svg"
					alt="left arrow for carousel"
					className="carousel__arrow"
				/>
			</button>

			<button onClick={next} className="carousel__btn carousel__btn--right">
				<img
					src="/svg/arrow2-right.svg"
					alt="right arrow for carousel"
					className="carousel__arrow"
				/>
			</button>
		</div>
	);
};

export default Carousel;

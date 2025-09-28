import { useState } from "react";
import "../css/projects.scss";

const Carousel = ({ images, info = [] }) => {
	const [current, setCurrent] = useState(1);
	const [transition, setTransition] = useState(true);
	const [isAnimating, setIsAnimating] = useState(false);

	// slides = clone last + originals + clone first
	const slides = [images[images.length - 1], ...images, images[0]];
	const texts = [info[info.length - 1], ...info, info[0]];

const prev = () => {
	if (isAnimating) return;
	setIsAnimating(true);
	setTransition(true);
	setCurrent((c) => c - 1);
};

const next = () => {
	if (isAnimating) return;

	setIsAnimating(true);
	setTransition(true);
	setCurrent((c) => c + 1);
};

const handleTransitionEnd = () => {
	setIsAnimating(false);

	if (current === 0) {
		setTransition(false);
		setCurrent(images.length);
	}

	if (current === slides.length - 1) {
		setTransition(false);
		setCurrent(1);
  }
};

  return (
	<div className="carousel">
    <div className="carousel__cont">
		<div
			className="carousel__imgs"
			style={{
				transform: `translateX(-${current * 100}%)`,
				transition: transition ? "transform 0.2s ease" : "none",
			}}
			onTransitionEnd={handleTransitionEnd}
		>
			{slides.map((img, i) => (
				<img key={i} src={img} alt={`Slide ${i}`} className="carousel__img" />
			))}
		</div>

		<button onClick={prev} className="carousel__btn carousel__btn--left">
			<img src="/svg/arrow2-left.svg" alt="prev" className="carousel__arrow" />
		</button>

		<button onClick={next} className="carousel__btn carousel__btn--right">
			<img src="/svg/arrow2-right.svg" alt="next" className="carousel__arrow" />
		</button>
    </div>
		<div className="carousel__text">
			{texts[current] && <span>{texts[current]}</span>}
      </div>
	</div>
  );
};

export default Carousel;

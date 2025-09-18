import { useState, useEffect, useRef } from "react";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleDropdown = (e) => {
		e.stopPropagation();
		setDropdownOpen(!dropdownOpen);
	};

	const handleClickOutside = (e) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
		setDropdownOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
		document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<header>
		<nav>
			<div className="nav__buttons">
			<img
				src="/svg/arrow--left.svg"
				alt="arrow left icon"
				className="nav__buttons--arrow"
			/>
			<img
				src="/svg/arrow--right.svg"
				alt="arrow right icon"
				className="nav__buttons--arrow icon-margin-r"
			/>
			<span className="nav__icon nav__icon--home" title="Home">
				<a href="/">
				<img
					src="/svg/home.svg"
					alt="link to homepage"
					className="nav__buttons-size"
				/>
				</a>
			</span>
			</div>

			<ul className="menu" tabIndex={0} aria-label="Main Navigation">
			<HeaderLinks />
			<li className="arrow-down__cont" ref={dropdownRef}>
				<img
				src="/svg/arrow--down.svg"
				alt="Dropdown menu icon"
				className="nav__buttons-size arrow-down"
				onClick={toggleDropdown}
				/>
				<ul
				className="menu__dropdown"
				style={{ display: dropdownOpen ? "block" : "none" }}
				aria-label="Dropdown Menu"
				>
				<li>
					<a href="#">~</a>
				</li>
				<li>
					<a href="#projects">projects</a>
				</li>
				</ul>
			</li>
			</ul>

			<div className="nav__buttons nav--hide">
			<span className="icon-wrap">
				<span className="nav__icon" title="GitHub">
				<a href="https://github.com/ch-kyn" target="_blank" rel="noreferrer">
					<img
					src="/svg/github-icon.svg"
					alt="GitHub link"
					className="nav__buttons-size"
					/>
				</a>
				</span>
			</span>
			<span className="nav__icon" title="Email">
				<a href="mailto:christinekynguyen@gmail.com">
				<img
					src="/svg/email-icon.svg"
					alt="Send email"
					className="nav__buttons-size"
				/>
				</a>
			</span>
			<svg
				width="3"
				height="30"
				xmlns="http://www.w3.org/2000/svg"
				className="icon-margin-l"
			>
				<line x1="1" y1="0" x2="1" y2="30" stroke="white" strokeWidth="2"></line>
			</svg>
			<span className="nav__icon" title="Instagram">
				<a
				href="https://www.instagram.com/ciirche/"
				target="_blank"
				rel="noreferrer"
				>
				<img
					src="/svg/instagram-icon.svg"
					alt="Instagram link"
					className="nav__buttons-size"
				/>
				</a>
			</span>
			</div>
		</nav>
		</header>
	);
};

export default Header;

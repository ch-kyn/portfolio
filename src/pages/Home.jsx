import Header from "../components/Header.jsx";
import Projects from "../components/Projects.jsx";

const Home = () => {
	return (
			<div className="container">
				<Header/>
				<main className="main-grid" id="home">
					<div className="profile">
					<div className="main-cont main-cont--left">
						<span className="hello_to_you">
							hello<span style={{ fontSize: "5rem" }}>.</span>
						</span>
						<h1 className="intro__greeting">
							<span>I'm </span><span>Christine*</span>
						</h1>
						<section className="socials">
							<span className="nav__icon" title="GitHub">
								<a href="https://github.com/ch-kyn" target="_blank" rel="noreferrer">
									<img src="/svg/github-icon.svg" alt="GitHub link" />
								</a>
							</span>
							<span className="nav__icon" title="Email">
								<a href="mailto:christinekynguyen@gmail.com">
									<img src="/svg/email-icon.svg" alt="icon to send email" />
								</a>
							</span>
							<span className="nav__icon" title="Instagram">
								<a href="https://www.instagram.com/ciirche/" target="_blank" rel="noreferrer">
									<img src="/svg/instagram-icon.svg" alt="Instagram link" />
								</a>
							</span>
						</section>
					</div>

					<div className="main-cont main-cont--right">
						<img
							src="/images/profile.webp"
							alt="selfie of website owner"
							className="profile-pic"
						/>
						<section className="about-me">
							<p>
								Currently studying <span className="about-me__highlight">web development</span> at NTNU Gjøvik, 
								and would describe myself as <span className="about-me__highlight">very enthusiastic towards learning</span>,
								finding creative solutions, and keep making applications
								<span className="about-me__highlight"> :)</span> I also draw sometimes.
							</p>
						</section>
					</div>
					</div>

					<div id="projects">
						<Projects/>
					</div>
				</main>
			</div>
	);
};

export default Home;

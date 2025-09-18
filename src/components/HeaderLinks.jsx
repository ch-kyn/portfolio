import { useState, useEffect } from "react";

const HeaderLinks = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "projects"];
    const offset = 60; // adjust for fixed header

    const handleScroll = () => {
      let closestSection = sections[0];
      let minDistance = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const distance = Math.abs(el.getBoundingClientRect().top - offset);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="menu__links">
      <a className={activeSection === "home" ? "menu__links--active" : ""} href="#">home</a>
      <span className="slash">/</span>
      <a className={activeSection === "projects" ? "menu__links--active" : ""} href="#projects">projects</a>
      <span className="slash">/</span>
    </div>
  );
};

export default HeaderLinks;

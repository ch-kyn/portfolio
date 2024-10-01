const dropdown = document.querySelector(".menu__dropdown");
const menu = document.querySelector("ul.menu");
const exploreBtn = document.querySelectorAll(".button--explore");
const exitBtn = document.querySelectorAll(".button--exit");
const homeCont = document.querySelector(".home-container");
const overlays = document.querySelectorAll(".overlay");

menu.addEventListener("click", () => {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

exploreBtn.forEach((button) => {
  button.addEventListener("click", () => {
    window.scrollTo(0, 0);

    const overlayId = button.getAttribute("data-overlay");
    const overlayToShow = document.getElementById(overlayId);
    homeCont.style.display = "none";
    overlayToShow.classList.add("overlay--active");
  });
});

exitBtn.forEach((button) => {
  button.addEventListener("click", () => {
    overlays.forEach((overlay) => overlay.classList.remove("overlay--active"));
    homeCont.style.display = "flex";
  });
});



document.addEventListener("click", (e) => {
  // Check if click was outside the dropdown content and button
  if (!dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});
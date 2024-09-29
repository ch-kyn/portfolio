const dropdownBtn = document.querySelector(".arrow-down");
const dropdown = document.querySelector(".menu__dropdown");
const menu = document.querySelector("ul.menu");
const exploreBtn = document.querySelectorAll(".button--explore");
const exitBtn = document.querySelectorAll(".button--exit");
const body = document.querySelector("body");
const homeCont = document.querySelector(".home-container");
const overlays = document.querySelectorAll(".overlay");

/* menu.addEventListener ("click", () => {
  event.stopPropagation();
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
})  */

/*  function test(e) {
    const selector = e.target.value;
    console.log(selector);
    const overlay = document.getElementById(selector);
    if (overlay !== null) {
      overlay.hidden = false;
    }
}

test(); */

exploreBtn.forEach((button) => {
  button.addEventListener("click", () => {
    window.scrollTo(0, 0);

    const overlayId = button.getAttribute("data-overlay");
    const overlayToShow = document.getElementById(overlayId);
    homeCont.style.display = "none";

    // Hide all overlays first
    // overlays.forEach(overlay => overlay.classList.remove("overlay--active"));

    overlayToShow.classList.add("overlay--active");
  });
});

exitBtn.forEach((button) => {
  button.addEventListener("click", () => {
    // To hide the currently active overlay
    overlays.forEach((overlay) => overlay.classList.remove("overlay--active"));
    homeCont.style.display = "flex";
  });
});

dropdownBtn.addEventListener("click", () => {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

/* document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdownContent') || !menu.contains(e.target)) 
    dropdownContent.style.display = "none";
 }) */

// document.addEventListener("click", (e) => {
//  if (!dropdownContent.contains(e.target) && e.target !== dropdownBtn) {
//    dropdownContent.style.display = "none";
// }
// })

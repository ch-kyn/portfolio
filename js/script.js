const dropdownBtn = document.querySelector(".arrow-down");
const dropdown = document.querySelector(".menu__dropdown");
const menu = document.querySelector("ul.menu");
const exploreBtn = document.querySelector(".button--explore");
const overlay = document.querySelector(".overlay");
const exitBtn = document.querySelector(".button--exit")
const body = document.querySelector("body");
const homeCont = document.querySelector(".home-container");

/* menu.addEventListener ("click", () => {
  event.stopPropagation();
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
})  */

exploreBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
    overlay.classList.add("overlay--active");
    homeCont.style.display = "none";
    // body.classList.add("no-scroll");
  })

exitBtn.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  homeCont.style.display = "flex";
  // body.classList.remove('no-scroll');
})

dropdownBtn.addEventListener ("click", () => {
  if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
})

/* document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdownContent') || !menu.contains(e.target)) 
    dropdownContent.style.display = "none";
 }) */

// document.addEventListener("click", (e) => {
//  if (!dropdownContent.contains(e.target) && e.target !== dropdownBtn) {
//    dropdownContent.style.display = "none";
// }
// }) 
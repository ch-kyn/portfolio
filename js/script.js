const dropdownBtn = document.querySelector(".arrow-down");
const dropdown = document.querySelector(".menu__dropdown");
const menu = document.querySelector("ul.menu");

/* menu.addEventListener ("click", () => {
  event.stopPropagation();
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
})  */

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
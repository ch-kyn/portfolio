const dropdownBtn = document.querySelector(".dropdown__button");
const dropdownContent = document.querySelector(".dropdown__content");
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
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
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
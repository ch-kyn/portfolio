const dropdownBtn = document.querySelector(".dropdown__button");
const dropdownContent = document.querySelector(".dropdown__content");

dropdownBtn.addEventListener ("click", () => {
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
      } else {
        dropdownContent.style.display = "none";
      }
})

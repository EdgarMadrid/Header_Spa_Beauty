const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("is-active");
});

document.addEventListener("click", (event) => {
  const clickedInsideMenu = navMenu.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle) {
    navMenu.classList.remove("is-active");
  }
});

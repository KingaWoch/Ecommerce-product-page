const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const nav = document.querySelector(".nav-bg");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
});

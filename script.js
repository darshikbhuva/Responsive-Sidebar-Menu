const toggle_btn = document.querySelector(".toggle-btn");
const slider = document.querySelector(".slider");
const body = document.querySelector("body");
const arrow = document.querySelector("#arrow");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const mode = document.getElementById("mode");
const right = document.getElementById("right");

toggle_btn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList == "dark") {
    moon.style.display = "none";
    sun.style.display = "flex";
    mode.innerText = "Light mode";
  } else {
    sun.style.display = "none";
    moon.style.display = "flex";
    mode.innerText = "Dark mode";
  }
});

arrow.addEventListener("click", () => {
  slider.classList.toggle("responsive");
});

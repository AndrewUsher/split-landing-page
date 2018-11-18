const leftDiv = document.querySelector(".left");
const rightDiv = document.querySelector(".right");
const container = document.querySelector(".container");

leftDiv.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

leftDiv.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

rightDiv.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

rightDiv.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

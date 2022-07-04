const navBar = document.querySelector(".nav-bar");
const todoOption = document.querySelector("#todo");
const gachaOption = document.querySelector("#gacha");
const todo = document.querySelector(".todo");
const gacha = document.querySelector(".random-meal");

const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("isSticky", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(navBar);

const triggerTodo = (event) => {
  todo.hidden = false;
  gacha.hidden = true;
};
const triggerGacha = (event) => {
  gacha.hidden = false;
  todo.hidden = true;
};

todoOption.addEventListener("change", triggerTodo);
gachaOption.addEventListener("change", triggerGacha);

const todoOption = document.querySelector("#todo");
const gachaOption = document.querySelector("#gacha");
const todo = document.querySelector(".todo");
const gacha = document.querySelector(".random-meal");

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

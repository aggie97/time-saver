const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const inputButton = todoForm.querySelector("button");
const todoBox = document.querySelector(".todo-box");

const submitForm = (e) => {
  e.preventDefault();
  let myTodo = e.target[0].value;
  myTodo ? addTodo(myTodo) : alert("목표를 적어주세요.");
  todoInput.value = ""; // 이렇게 요소의 값을 직접적으로 바꾸는 게 바람직한 걸까?
};

const addTodo = (todo) => {
  const todoDiv = document.createElement("div");
  const todoLi = document.createElement("li");
  const doneButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  todoDiv.classList.add("todo-div");
  todoLi.classList.add("todo-li");
  doneButton.classList.add("done-button");
  deleteButton.classList.add("delete-button");

  todoLi.innerText = todo;
  doneButton.innerText = "✅";
  deleteButton.innerText = "❎";

  doneButton.addEventListener("click", checkTodo);
  deleteButton.addEventListener("click", deleteTodo);

  todoBox.appendChild(todoDiv);
  todoDiv.appendChild(todoLi);
  todoDiv.appendChild(doneButton);
  todoDiv.appendChild(deleteButton);
};

const checkTodo = (event) => {
  let todoDiv = event.target.parentNode;
  let todoLi = todoDiv.children[0];
  todoDiv.style.opacity = "0.5";
  todoLi.style.textDecorationLine = "line-through";
};

const deleteTodo = (event) => {
  let todoLi = event.target.parentNode;
  todoLi.remove();
};

todoForm.addEventListener("submit", submitForm);

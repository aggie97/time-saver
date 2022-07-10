const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const inputButton = todoForm.querySelector("button");
const todoBox = document.querySelector(".todo-box");

let todoArray = [];

const submitForm = (e) => {
  e.preventDefault();
  let myTodo = e.target[0].value;
  if (myTodo === "") {
    alert("목표를 작성해주세요.");
  } else {
    todoArray.push(myTodo);
    addTodo(myTodo);
    saveTodoInLocalStorage(todoArray);
    console.log("todos:", todoArray);
    todoInput.value = ""; // 이렇게 요소의 값을 직접적으로 바꾸는 게 바람직한 걸까?
  }
};

const saveTodoInLocalStorage = (todos) => {
  localStorage.setItem("todos", todos);
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
  let todoDiv = event.target.parentNode;
  todoDiv.remove();
  let targetTodo = todoDiv.children[0].innerText;
  todoArray = localStorage.getItem("todos").split(",");
  console.log("todoArray", todoArray);
  todoArray = todoArray.filter((todo) => todo !== targetTodo);
  console.log("filteredArr", todoArray);
  saveTodoInLocalStorage(todoArray);
  // loadTodos(filteredArr);
};

const loadTodos = (todoArray) => {
  todoArray = localStorage.getItem("todos");
  console.log("loadedArr", typeof todoArray);
  if (todoArray === "") {
    console.log("empty");
    todoArray = [];
  } else {
    console.log("not empty");
    todoArray.split(",").forEach((todo) => {
      addTodo(todo);
    });
  }
};

loadTodos(todoArray);

todoForm.addEventListener("submit", submitForm);

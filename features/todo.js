const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const inputButton = todoForm.querySelector("button");
const todoBox = document.querySelector(".todo-box");

let todoArray = [];
console.log("refresh");
const submitForm = (e) => {
  e.preventDefault();

  if (e.target[0].value === "") {
    alert("목표를 작성해주세요.");
  } else {
    const todoObj = {
      todo: e.target[0].value,
      id: Math.random(),
    };
    todoArray.push(todoObj);
    addTodo(todoObj);
    saveTodoInLocalStorage(todoArray);
    console.log("todos:", todoArray);
    todoInput.value = ""; // 이렇게 요소의 값을 직접적으로 바꾸는 게 바람직한 걸까?
  }
};

const saveTodoInLocalStorage = (todos) => {
  let todo = JSON.stringify(todos);
  localStorage.setItem("todos", todo);
};

const addTodo = (todoObj) => {
  const todoDiv = document.createElement("div");
  const todoLi = document.createElement("li");
  const doneButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  todoDiv.classList.add("todo-div");
  todoLi.classList.add("todo-li");
  doneButton.classList.add("done-button");
  deleteButton.classList.add("delete-button");

  todoLi.innerText = todoObj.todo;
  todoDiv.id = todoObj.id;
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
  todoArray = todoArray.filter((todoObj) => +todoObj.id !== +todoDiv.id);
  saveTodoInLocalStorage(todoArray);
  todoDiv.remove();
};

const loadTodos = () => {
  let loadedData = JSON.parse(localStorage.getItem("todos"));
  console.log("loadedData", loadedData);
  if (loadedData === []) {
    todoArray = [];
  } else {
    todoArray = loadedData;
    todoArray.forEach((todoObj) => {
      addTodo(todoObj);
    });
  }
};

loadTodos();

todoForm.addEventListener("submit", submitForm);

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
const todoArray = [];

function loadingTodos() {
  console.log(savetodos)
}

function savingTodos() {
  localStorage.setItem("todos", JSON.stringify(todoArray))
  console.log("test")
}

function makingTodo(newTodo) {
  let newLi = document.createElement("li");
  let newSpan = document.createElement("span");
  let delBtn = document.createElement("button");
  delBtn.addEventListener("click", handleDelBtn);

  newSpan.innerText = newTodo;
  delBtn.innerText = "X";
  newLi.appendChild(newSpan);
  newLi.appendChild(delBtn);
  todoList.appendChild(newLi);
}

function handleDelBtn(event) {
  event.preventDefault();
  let delLi = event.target.parentElement;
  delLi.remove();
}

function submit(event) {
  event.preventDefault();
  let newTodo = todoInput.value;
  todoInput.value = "";
  todoArray.push(newTodo);
  makingTodo(newTodo);
  savingTodos();
}

let savetodos = JSON.parse(localStorage.getItem("todos"));
if (savetodos !== null) {
  // let savetodosArr = JSON.parse(savetodos);
  loadingTodos();
  savetodos.forEach(function() {
    console.log("test")
  })
}
todoForm.addEventListener("submit", submit)


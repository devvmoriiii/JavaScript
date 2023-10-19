const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
const todoArray = [];

function savingTodos() {
  localStorage.setItem("todos", JSON.stringify(todoArray))
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

todoForm.addEventListener("submit", submit)
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
let todoArray = [];

function makingTodoArr(newTodo) {
  const todoObj = {
  text: newTodo,
  id : Date.now()
  }
  todoArray.push(todoObj);
  makingTodoList(todoObj);
}

function savingTodos() {
  localStorage.setItem("todos", JSON.stringify(todoArray))
}

function makingTodoList(todoObj) {
  let newLi = document.createElement("li");
  let newSpan = document.createElement("span");
  let delBtn = document.createElement("button");
  delBtn.addEventListener("click", delTodo);

  newLi.id = todoObj.id;
  newSpan.innerText = todoObj.text;
  delBtn.innerText = "X";
  newLi.appendChild(newSpan);
  newLi.appendChild(delBtn);
  todoList.appendChild(newLi);
}

function delTodo(event) {
  event.preventDefault();
  let delLi = event.target.parentElement;
  let delLiId = parseInt(delLi.id)

  todoArray = todoArray.filter((item) => item.id !== delLiId)
  savingTodos();
  // console.log(todoArray)
  delLi.remove();
}

function submit(event) {
  event.preventDefault();
  let newTodo = todoInput.value;
  todoInput.value = "";
  // todoArray.push(newTodo);
  makingTodoArr(newTodo);
  savingTodos();
}

let savetodos = JSON.parse(localStorage.getItem("todos"));
if (savetodos !== null) {
  todoArray = savetodos;
  savetodos.forEach(element => {
    makingTodoList(element)
  });
}
todoForm.addEventListener("submit", submit)


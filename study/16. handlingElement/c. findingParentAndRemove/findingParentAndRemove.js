const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");


function paintTodo(newTodo) {
  let newLi = document.createElement("li");
  let newSpan = document.createElement("span");
  newSpan.innerText = newTodo;
  newLi.appendChild(newSpan);
  toDoList.appendChild(newLi);
  
  let delBtn = document.createElement("button");
  delBtn.innerText = "X";
  newLi.appendChild(delBtn);
  delBtn.addEventListener("click", handleDelBtn)
}

function handleDelBtn(event) {
  event.preventDefault();
  // console.log(event.composedPath());
  // console.log(event.target)
  // console.log(event.target.parentElement)
  let delLi = event.target.parentElement;
  delLi.remove();
}


function submit(event) {
  event.preventDefault();
  let newTodo = toDoInput.value;
  toDoInput.value = "";
  paintTodo(newTodo);
}

toDoForm.addEventListener("submit", submit)
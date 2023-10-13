const loginForm = document.querySelector("#loginForm")
const nameInput = document.querySelector("#loginForm input");
const nameBtn = document.querySelector("#loginForm button");

function loginFormSubmit(event) {
  const userName = nameInput.value;
  event.preventDefault();
  console.log(userName)
}
loginForm.addEventListener("submit", loginFormSubmit);


const link = document.querySelector("a");
function linkClick(event) {
  event.preventDefault();
  console.dir(event)
}
link.addEventListener("click", linkClick)


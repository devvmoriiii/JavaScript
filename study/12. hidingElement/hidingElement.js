const loginForm = document.querySelector("#loginForm");
const nameInput = document.querySelector("#loginForm input")
const title = document.querySelector("h1");
const HIDDEN_CLASS = "hidden"

function loginFormSubmit(event) {
  event.preventDefault();
  const userName = nameInput.value;

  if (userName !== "") {
    loginForm.classList.add(HIDDEN_CLASS);
    title.classList.remove(HIDDEN_CLASS);
    title.innerText = "Welcome, " + userName + " !"; 
  } else {
    alert("enter your name.")
  }
}

loginForm.addEventListener("submit", loginFormSubmit)
const loginForm = document.querySelector("#loginForm");
const nameInput = document.querySelector("#loginForm input")
const title = document.querySelector("h1")

const HIDDEN_CLASS = "hidden"
const KEY_USERNAME = "userName";

// 폼 숨기기 & 인사말
function hidingFormAndGreeting() {
  const savedUserName = localStorage.getItem(KEY_USERNAME);
  loginForm.classList.add(HIDDEN_CLASS);
  title.classList.remove(HIDDEN_CLASS);
  title.innerText = `Welcome, ${savedUserName}!`
}

// 유저 네임 존재 유무 확인
window.addEventListener("load", checkUserName)
function checkUserName() {
  const savedUserName = localStorage.getItem(KEY_USERNAME);
  if (savedUserName !== null) {
    hidingFormAndGreeting();
  } else {
    loginForm.addEventListener("submit", loginFormSubmit)
  }
}

// 유저 네임 저장
function loginFormSubmit(event) {
  event.preventDefault();
  const userName = nameInput.value;

  if (userName !== "") {
    localStorage.setItem(KEY_USERNAME, userName);
    hidingFormAndGreeting();
  } 
  else {
    alert("enter your name.");
  }
}


const loginForm = document.querySelector("#loginForm");
const nameInput = loginForm.querySelector("input");
const nameBtn = loginForm.querySelector("button");

function nameBtnClick() {
  const userName = nameInput.value;
  
  if (userName === "") {
    alert("Please enter your name.");
  } else if (userName.length > 15) {
    alert("You can enter up to 15 characters.");
  }
  else {
    console.log(userName);
  }
}
nameBtn.addEventListener("click", nameBtnClick)
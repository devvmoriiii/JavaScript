const h1 = document.querySelector("h1");
function handleClick() {
  const clickedClass = "clicked"
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}
h1.addEventListener("click", handleClick);
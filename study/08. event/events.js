const h1 = document.querySelector("h1");
function handleMouseenter() {
  h1.innerText = "Good!";
  h1.style.color = "blue";
}
function handleMouseLeave() {
  h1.innerText = "Click Me!";
  h1.style.color = "#333";
}
function handleClick() {
  h1.style.fontSize = "50px"
  h1.style.backgroundColor = "cornflowerblue"
  h1.style.color = "#fff"
  h1.style.textAlign = "center"
}
h1.addEventListener("mouseenter", handleMouseenter);
h1.addEventListener("mouseleave", handleMouseLeave);
h1.addEventListener("click", handleClick);
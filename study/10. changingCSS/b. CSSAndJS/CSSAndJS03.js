const h1 = document.querySelector("h1");
function handleClick() {
  h1.classList.toggle("clicked");
  h1.classList.toggle("underline");
}
h1.addEventListener("click", handleClick);
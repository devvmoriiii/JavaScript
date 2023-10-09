const h1 = document.querySelector("h1");
function handleClick() {
  console.log(h1.classList.contains("bigText"))

  if (h1.classList.contains("clicked")) {
    h1.classList.remove("clicked");
  } else {
    h1.classList.add("clicked");
  }
}
h1.addEventListener("click", handleClick);
const h1 = document.querySelector("h1");
function handleClick() {
  const currentColor = h1.style.color;
  let newColor = null;
  if (currentColor === "cornflowerblue") {
    newColor = "tomato";
    h1.style.color = newColor;
  } else {
    newColor = "cornflowerblue";
    h1.style.color = newColor;
  } 
}
h1.addEventListener("click", handleClick);
const h1 = document.querySelector("h1");
function handleH1Click() {
  console.log("Clicked!")
}
h1.addEventListener("click", handleH1Click)

const h2 = document.querySelector("h2");
function handleH2Click() {
  h2.style.color = "blue";
}
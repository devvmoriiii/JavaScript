function handleWindowResize() {
  document.querySelector("h1").innerText = "Ta-da!";
  document.body.style.backgroundColor = "bisque";
}
function handleWindowCopy() {
  document.querySelector("h1").innerText = "Copy Done!"
}

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
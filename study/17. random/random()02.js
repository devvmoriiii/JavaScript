const imgList = ["moon1.jpg", "moon2.jpg", "moon3.jpg"];
const body = document.body

function changeBG() {
  const randomImg = Math.floor((Math.random() * imgList.length));
  body.style.backgroundImage = "url(images/" + imgList[randomImg] + ")"
}

window.onload = setInterval(changeBG, 2000)
const imgList = ["moon1.jpg", "moon2.jpg", "moon3.jpg"];
const body = document.body

const BGImg = document.createElement("img");
body.appendChild(BGImg)

function changeBG() {
  const randomImg = Math.floor((Math.random() * imgList.length));
  BGImg.src = `images/${imgList[randomImg]}`
  console.log(BGImg)
}

window.onload = setInterval(changeBG, 1000)
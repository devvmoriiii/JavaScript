const clock = document.querySelector("p");

function getClock() {
  const date = new Date(); 
  let hour = String(date.getHours()).padStart(2, "0");
  let min = date.getMinutes().toString().padStart(2, "0");
  let sec = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hour} : ${min} : ${sec}`;
};

getClock();
setInterval(getClock, 1000)  ;




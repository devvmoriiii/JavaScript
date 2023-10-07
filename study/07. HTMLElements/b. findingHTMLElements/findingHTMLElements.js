// Ex. - getElementByid
const title = document.getElementById("title")
console.dir(title)

// Ex. - getElementsByClassName
const hello = document.getElementsByClassName("hello");
console.dir(hello);

// Ex. - getElementsByTagName
const p = document.getElementsByTagName("p");
console.dir(p);

// Ex. querySelector
const button = document.querySelector("#box button");
console.dir(button);

// Ex. - querySelectorAll
const buttons = document.querySelectorAll("#box button");
console.dir(buttons);
console.log(buttons[0].innerText)
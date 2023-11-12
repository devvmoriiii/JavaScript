const result = document.querySelector(".result");
let num1 = "";
let num2 = "";
let operator = "";
let opeBtn;

document.querySelector("#clearAll").addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  result.textContent = "";
  if (opeBtn) {
    opeBtn.classList.remove("ope-click");
  }
})
document.querySelector("#clear").addEventListener("click", () => {
  let resultText = Array.from(result.textContent);
  resultText.pop();
  result.textContent = resultText.join("");
  if (operator == "") {
    num1 = resultText.join("");
  } else {
    num2 = resultText.join("");
  }
  console.log(result.textContent)
})

function numClick(e) {
  if (operator == "") {
    num1 += e.target.textContent;
  } else {
    num2 += e.target.textContent;
  };
  result.textContent += e.target.textContent;
  console.log(num1, operator, num2)
}
document.querySelector("#num1").addEventListener("click", numClick)
document.querySelector("#num2").addEventListener("click", numClick)
document.querySelector("#num3").addEventListener("click", numClick)
document.querySelector("#num4").addEventListener("click", numClick)
document.querySelector("#num5").addEventListener("click", numClick)
document.querySelector("#num6").addEventListener("click", numClick)
document.querySelector("#num7").addEventListener("click", numClick)
document.querySelector("#num8").addEventListener("click", numClick)
document.querySelector("#num9").addEventListener("click", numClick)
document.querySelector("#num0").addEventListener("click", numClick)
document.querySelector("#dot").addEventListener("click", (e) => {
  let resultText = Array.from(result.textContent);
  if (!(resultText.includes(".") || resultText.length === 0)) {
    numClick(e);
  }
})

function opeClick(e) {
  if (num1 != "" && operator === "") {
    opeBtn = e.target;
    opeBtn.classList.add("ope-click");
    operator = e.target.textContent;
    result.textContent = "";
  }
}
document.querySelector("#ope-plus").addEventListener("click", opeClick)
document.querySelector("#ope-minus").addEventListener("click", opeClick)
document.querySelector("#ope-multi").addEventListener("click", opeClick)
document.querySelector("#ope-div").addEventListener("click",  opeClick)
document.querySelector("#ope-equal").addEventListener("click", opeClick)



const result = document.querySelector(".result");
let num1 = "";
let num2 = "";
let operator = "";

function numClick(calNum) {
  if (operator == "") {
    num1 += calNum
  } else {
    num2 += calNum
  };
  result.textContent += calNum
}

document.querySelector("#clearAll").addEventListener("click", () => {
  result.textContent = "";
})
document.querySelector("#clear").addEventListener("click", () => {
  let resultText = Array.from(result.textContent);
  resultText.pop();
  result.textContent = resultText.join("");
  console.log(result.textContent)
})

document.querySelector("#num1").addEventListener("click", () => {numClick("1")})
document.querySelector("#num2").addEventListener("click", () => {numClick("2");});
document.querySelector("#num3").addEventListener("click", () => {numClick("3")})
document.querySelector("#num4").addEventListener("click", () => {numClick("4")
})
document.querySelector("#num4").addEventListener("click", () => {numClick("5")
})
document.querySelector("#num4").addEventListener("click", () => {numClick("6")
})
document.querySelector("#num4").addEventListener("click", () => {numClick("7")
})
document.querySelector("#num4").addEventListener("click", () => {numClick("8")
})
document.querySelector("#num4").addEventListener("click", () => {numClick("9")
})
querySelector("#dot").addEventListener("click", () => {
  let resultText = Array.from(result.textContent);
  if (resultText.includes(".")) {
    return;
  } else {
    numClick(".")
  }
})
document.querySelector("#ope-plus").addEventListener("click", () => {})
document.querySelector("#ope-minus").addEventListener("click", () => {})
document.querySelector("#ope-multi").addEventListener("click", () => {})
document.querySelector("#ope-div").addEventListener("click", () => {})
document.querySelector("#ope-equal").addEventListener("click", () => {})



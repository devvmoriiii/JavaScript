const orderSpan = document.querySelector("#order");
const peopleSpan = document.querySelector("#people");
const wordInput = document.querySelector("#newWord");
const wordBtn = document.querySelector("#newWordBtn");
const existWordSpan = document.querySelector("#existWord");
const resultText = document.querySelector("#result")
let existWord = ""; // 제시어
let newWord = ""; // 입력 단어

const people = parseInt(prompt("참가 인원을 정수로 작성해주세요. (ex. 5)"));


function orderAndPeople() {
  if (isNaN(people)) {
    alert("참가 인원이 입력되지 않았습니다.");
    location.reload();
  } else {
    orderSpan.textContent = "1";
    peopleSpan.textContent = `/${people}`;
    wordInput.focus();
  }
}
orderAndPeople();

function handleWordBtnClick() {
  newWord = wordInput.value;

  if (existWord === "") {
    changingOrderAndExistWord();
  } else {
    if (newWord[0] == existWord[existWord.length -1]) {
      if (newWord.length > 1) {
        changingOrderAndExistWord();
        resultText.textContent = "성공!";
      } else {
        alert("단어를 한 글자 이상 입력해주세요.")
        wordInput.focus();
      }
    } else {
      resultText.textContent = "실패!";
      resultText.style.color = "darkred";
    }
  }
}

function changingOrderAndExistWord() {
  let currentOrder = parseInt(orderSpan.textContent);
  if (currentOrder === people) {
    orderSpan.textContent = "1";
  } else {
    orderSpan.textContent = currentOrder + 1;
  }
  existWord = newWord;
  existWordSpan.textContent = existWord;
  wordInput.value = "";
  wordInput.focus();
}

wordBtn.addEventListener("click", handleWordBtnClick)

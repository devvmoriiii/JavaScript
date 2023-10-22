const orderSpan = document.querySelector("#order");
const wordInput = document.querySelector("#wordInput");
const wordBtn = document.querySelector("#wordBtn");
const existWordSpan = document.querySelector("#existWord");
const resultH1 = document.querySelector("#resultH1")
let existWord = ""; // 제시어
let newWord = ""; // 입력 단어

// const people = parseInt(prompt("참가 인원을 정수로 작성해주세요. (ex. 5)"));

function handleWordBtnClick() {
  if (existWord === "") {
    let newWord = wordInput.value;
    existWord = newWord;
    existWordSpan.textContent = existWord;
    wordInput.value = "";
    wordInput.focus();

  } else if (existWord != "") {
    if (newWord[0] == existWord[existWord.length -1]) {
      if (newWord.length !== 1) {
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
        
      } else {
        alert("단어를 한 글자 이상 입력해주세요.")
        wordInput.focus();
      }
    } else {
      resultH1.textContent = "올바르지 않은 단어입니다. 실패!"
    }

  }
}

wordBtn.addEventListener("click", handleWordBtnClick)

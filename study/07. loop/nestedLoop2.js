// 1 ~ 5 별 찍기
for (let i = 0; i < 5; i ++) {
  console.log("*".repeat(i + 1))
}
console.log("=================")

// 1 ~ 5 별 찍기 + 중첩 반복문 사용
for (let i = 0; i < 5; i ++) {
  for (let j = 0; j <= i; j ++) {
    console.log("*".repeat(i+1))
  }
}
console.log("=================")

// 5 ~ 1 역순으로 별 찍기
for (let i = 5; i > 0; i --) {
  console.log("*".repeat(i))
}
console.log("=================")


// 5 ~ 1 역순으로 별 찍기 + (i = 0) 조건
for (let i = 0; i > -5; i --) {
  console.log("*".repeat(i + 5))
}
console.log("=================")


// 1 ~ 9 홀수만 별 찍기
for (let i = 0; i < 10; i++) {
  if ((i + 1) % 2 === 0) {
    continue;
  }
  console.log("*".repeat(i + 1))
}
console.log("=================")


// 1 ~ 9 홀수만 역순으로 별 찍기
for (let i = 10; i > 0; i --) {
  if ((i + 1) % 2 === 0) {
    continue;
  }
  console.log("*".repeat(i - 1))
}
console.log("=================")

// 1 ~ 5 별 찍기 + 오른쪽 정렬
for(let i = 0; i < 5; i++)  {
  for(let j = 4; j > i; j--)  {
    document.write('&nbsp');
  }
  for(let j = 0; j <= i; j++) {
    document.write('*');
  }
  document.write('<br>');
}
// 예시
for (let i = 0; i < 5; i ++) {
  if (i % 2 == 0) continue;
  for (let j = 0; j < 5; j ++) {
    if (j % 2 == 0) continue;
    for (let k = 0; k < 5; k ++) {
      if (k % 2 == 0) continue;
      // console.log(i, j,k);
    }
  }
}

// 짝수를 제외한 구구단 출력 (Q)
for (let i = 1; i < 10; i ++) {
  console.log(`${i}단`)
  for (let j = 1; j < 10; j ++) {
    if ((i * j) % 2 === 0) {
      continue;
    }
    console.log(i * j)
  }
}

/// 짝수를 제외한 구구단 출력 (A)
for (let i = 1; i < 10; i+2) {
  console.log(`${i}단`)
  for (let j = 1; j < 10; j+2) {
    console.log(i * j)
  }
}

// console.log 만 사용할 경우
function add1(a, b) {
  console.log(a + b);
}
const answer1 = add1(5, 10);
console.log("console.log 사용 : " + answer1);

// return 사용할 경우
function add2(a, b) {
  return a+b;
}
const answer2 = add2(5, 10);
console.log("return 사용 : " + answer2);
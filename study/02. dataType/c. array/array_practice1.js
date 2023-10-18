// '라' 를 모두 제거
const arr = ["가", "라", "다", "라", "마", "라"];
// let i = 0;
// while (arr.indexOf("라") !== -1) {
//   arr.splice(arr.indexOf("라"), 1)
//   i = arr.indexOf("라")
// }
let index = arr.indexOf("라");
while (index !== -1) {
  arr.splice(index, 1)
  index = arr.indexOf("라");
}
console.log(arr)
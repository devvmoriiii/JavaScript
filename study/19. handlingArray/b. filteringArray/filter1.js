const originArr = [1, 2, 3, 4, "delThis!", 5, 6];

// const allTrueArr = originArr.filter(function() {
//   return true;
// });
// const allFalseArr = originArr.filter(function() {
//   return false;
// });
// console.log(allTrueArr)
// console.log(allFalseArr)

const newArr = originArr.filter(function(item) {
  return item !== "delThis!"
  // if (item !== "delThis!") {
  //   return true;
  // }
})
console.log(newArr)

const randomArr = [343034,345, 6788, 9876, 345, 223, 10]
const over3000 = randomArr.filter(filter3000)
function filter3000(item) {
  return item > 3000;
}
console.log(randomArr);
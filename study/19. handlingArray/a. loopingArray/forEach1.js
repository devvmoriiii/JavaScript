const exString = "[1,2,3,4,5]";
const exStrToArr = JSON.parse(exString);
exStrToArr.forEach(function(item) {
  console.log("Hi, " + item)
})
exStrToArr.forEach(element => {
  console.log("Hello, " + element)
});

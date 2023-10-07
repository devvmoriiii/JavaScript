const num = parseInt(window.prompt("Enter a number."));

if (isNaN(num)) {
  console.log("Please write a number. ");
} else if (0 <= num && num % 2 === 0) {
  console.log("The number is even number and greater than zero.");
} else if (0 >= num || num % 2 !== 0){
  console.log("The number is odd number or less than zero.");
}



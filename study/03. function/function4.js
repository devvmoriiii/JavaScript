const calculator = {
  add : function(a, b) {
    console.log(a + b);
  },
  minus : function(a, b) {
    console.log(a - b);
  },
  div : function(a, b) {
    console.log(a / b);
  },
  powerOf : function(a, b) {
    console.log(a ** b);
  },
};

calculator.add(3, 5);
calculator.minus(10, 3);
calculator.div(30, 5);
calculator.powerOf(2, 10);
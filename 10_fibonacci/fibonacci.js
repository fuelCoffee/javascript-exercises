const fibonacci = function (num) {
  let result = parseInt(num);

  if (Math.sign(result) !== -1) {
    //Create variables to run Fibonacci
    let n1 = 0,
      n2 = 1,
      nextTerm;
    //Loop until
    for (let i = 1; i <= result; i++) {
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
    result = n1;
  } else {
    return "OOPS";
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;

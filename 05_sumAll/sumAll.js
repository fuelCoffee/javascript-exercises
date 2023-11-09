const sumAll = function (firstN, secondN) {
  //loop: start at first number and continue adding to finalSum until reaching second number
  let finalSum = 0;
  let errorMessage = "ERROR";
  if (firstN !== +firstN || secondN !== +secondN) {
    return errorMessage;
  } else if (firstN < 0 || secondN < 0) {
    return errorMessage;
  } else {
    if (firstN > secondN) {
      [firstN, secondN] = [secondN, firstN];
    }
    for (i = firstN; i <= secondN; i++) {
      finalSum += i;
    }
    return finalSum;
  }
};
// Do not edit below this line
module.exports = sumAll;

const repeatString = function (string, num) {
  let textOutput = "";

  if (num < 0) {
    textOutput = "ERROR";
  } else {
    for (i = 0; i < num; i++) {
      textOutput += string;
    }
  }
  return textOutput;
};

// Do not edit below this line
module.exports = repeatString;

const palindromes = function (str) {
  // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  let re = /[^A-Za-z0-9]/g;
  let lowRegStr = str.toLowerCase().replace(re, "");
  // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
  // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[^A-Za-z0-9]/g, '') = "amanaplanacanalpanama"
  // var lowRegStr = "amanaplanacanalpanama";

  // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
  let reverseStr = lowRegStr.split("").reverse().join("");

  // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;

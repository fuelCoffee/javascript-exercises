const reverseString = function (string) {
  // Step 1. Use the split() method to return a new array
  let splitStr = string.split("");
  // Step 2. Use the reverse() method to reverse the new created array
  let reverseArray = splitStr.reverse();
  // Step 3. Use the join() method to join all elements of the array into a string
  let joinArr = reverseArray.join("");
  //Step 4. Return the reversed string
  return joinArr;
};

// Do not edit below this line
module.exports = reverseString;

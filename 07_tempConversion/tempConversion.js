const convertToCelsius = function (temp) {
  const tempConversion = (temp - 32) * (5 / 9);
  //Round to one decimal place
  return Math.round(tempConversion * 10) / 10;
};

const convertToFahrenheit = function (temp) {
  const tempConversion = temp * (9 / 5) + 32;
  //Round to one decimal place
  return Math.round(tempConversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowCaseCharCodes = generateArray(65, 90)

var upCaseCharCodes = generateArray(97, 122)

var numCharCodes = generateArray(48, 57)

var specCharCodes = generateArray(33, 47).concat(generateArray(58, 64)).concat(generateArray(91, 96)).concat(generateArray(123, 126))


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
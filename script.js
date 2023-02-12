// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "/",
  "<",
  ">",
  "?",
  "@",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // or
  // document.querySelector("#password").value = generatePassword();
}

function generatePassword() {
  var passwordLength = prompt("Password Length (8-128)");
  passwordLength = Number(passwordLength);
  var possibleArray = [];
  var displayPassword = [];

  if (passwordLength <= 8 || passwordLength >= 128) {
    alert("Enter a number between 8 and 128.");
    return;
  }

  var blnLowerCase = confirm("Include lower case letters?");
  var blnUpperCase = confirm("Include upper case letters?");
  var blnNumbers = confirm("Include numbers?");
  var blnSpecialChar = confirm("Include special characters?");

  if (blnLowerCase) {
    possibleArray = possibleArray.concat(lowerCase);
  }
  if (blnUpperCase) {
    possibleArray = possibleArray.concat(upperCase);
  }
  if (blnNumbers) {
    possibleArray = possibleArray.concat(numbers);
  }
  if (blnSpecialChar) {
    possibleArray = possibleArray.concat(specialChar);
  }

  for (var i = 0; i < passwordLength; i++) {
    passwordIndex = Math.floor(Math.random() * possibleArray.length);
    displayPassword = displayPassword.concat(possibleArray[passwordIndex]);
  }

  displayPassword = displayPassword.join("");
  return displayPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

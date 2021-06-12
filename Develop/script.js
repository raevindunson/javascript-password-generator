// Assignment code here
function generatePassword() {
  // Prompt for length of password
  var PromptLength = window.prompt("How many characters would you like for your password? (Must be between 8 and 128)");
  while (PromptLength < 8 || PromptLength > 128) {
    PromptLength = window.prompt("Please enter a number between 8 and 128")
  }

  // Arrays for characters in password
  var Lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var Upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var Number = [0,1,2,3,4,5,6,7,8,9];
  var Special = ["!","@","#","$","%","^","&","*","~","/","-","=","_","+",".",",","<",">","?"];

  // Prompts for types of characters in password
  var PromptLower = window.confirm("Would you like lowercase letters in your password?");
  var PromptUpper = window.confirm("Would you like uppercase letters in your password?");
  var PromptNumber = window.confirm("Would you like numbers in your password?");
  var PromptSpecial = window.confirm("Would you like special characters in your password?");

  while (!(PromptLower||PromptUpper||PromptNumber||PromptSpecial)) {
    window.alert("Please select at least one type of character to use in your password");

    PromptLower = window.confirm("Would you like lowercase letters in your password?");
    PromptUpper = window.confirm("Would you like uppercase letters in your password?");
    PromptNumber = window.confirm("Would you like numbers in your password?");
    PromptSpecial = window.confirm("Would you like special characters in your password?");
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
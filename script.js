// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//  Defining password characters
var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxrz";
var specialChars = "!@#$%^&*()_+~/`<>,.?-=";
var criteria; 


// Generating password with function
function generatePassword(){ 

    // Asks user to input password length
      var pwlength = Number(prompt ("How many characters would you like the password to contain? 8 - 128"));
      // if user clicked cancel, no password will be generated
      if (!pwlength){
        return;
      }
     // loop for when users input is outside of parameters
      else if (pwlength < 8 || pwlength > 128){
      prompt("Password must be between 8 - 128 characters. Please try again.")
      }
      // User to set criteia for password generation
      else{
        var confirmUpperCase = window.confirm("Would you like to include upper case characters in the password?")
        var confirmLowerCase = window.confirm("Would you like to include lower case characters in the password?")
        var confirmNumeric = window.confirm("Would you like to include numbers in the password?")
        var confirmSpecial = window.confirm("Would you like to include special characters in the password?")
      };

// If none of the criteria is selected
if (!confirmUpperCase && !confirmLowerCase && !confirmNumeric && !confirmSpecial){
criteria = alert("You must choose a criteria!");
}

// 4 criteria selected
else if (confirmUpperCase && confirmLowerCase && confirmNumeric && confirmSpecial){
  criteria = upperChars.concat(lowerChars, numberChars, specialChars)
}

// 3 criteria selected 
else if (confirmUpperCase && confirmLowerCase && confirmNumeric){
criteria = upperChars.concat(lowerChars, numberChars)
}
 
else if (confirmLowerCase && confirmNumeric && confirmSpecial){
criteria = lowerChars.concat(numberChars, specialChars)
}

else if(confirmUpperCase && confirmNumeric && confirmSpecial){
criteria = upperChars.concat(numberChars, specialChars)
}

// 2 criteria selected
else if (confirmUpperCase && confirmLowerCase){
criteria = upperChars.concat(lowerChars)
}
else if (confirmUpperCase && confirmNumeric){
  criteria = upperChars.concat(numberChars)
}
else if (confirmUpperCase && confirmSpecial){
  criteria = upperChars.concat(specialChars)
}
else if (confirmLowerCase && confirmNumeric){
  criteria = lowerChars.concat(numberChars)
}
else if (confirmLowerCase && confirmSpecial){
  criteria = lowerChars.concat(specialChars)
}
else if (confirmSpecial && confirmNumeric){
  criteria = specialChars.concat(numberChars)
}

// if 1 criteria selected
else if (confirmUpperCase){
  criteria = upperChars;
}
else if (confirmLowerCase){
  criteria = lowerChars;
}
else if (confirmNumeric){
  criteria = numberChars;
}
else if (confirmSpecial){
  criteria = specialChars;
}

// generates password from input character length and selected criteria
var pwd = " ";
for (var i = 0; i < pwlength; i++) {
  var selectedCriteria = criteria[Math.floor(Math.random()*criteria.length)]
  pwd += selectedCriteria;
}
console.log(pwd)
return pwd; 
}









// Assignment code here


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


function generatePassword () {
  //Password length is between 8-128, including conditions for number to be in the right range.
  var passwordLength = Number(prompt ("How many characters you want in your password? (min 8 - max 128)"));
  if (passwordLength < 8|| passwordLength > 128){
    window.alert ("Password must be at least 8 characters and less than 128.");
    prompt ("How many characters you want in your password? (min 8 - max 128)");
  } else if (isNaN(passwordLength)){
    window.alert ("Select a valid number between 8 and 128.");
    prompt ("How many characters you want in your password? (min 8 - max 128)");
  }
  const passLength = parseInt(passwordLength);


//Does the user want lowercase, uppercase, numerics, and/or special characters?
  var passLower = confirm ("Do you want lowercase in your password?"); 
  var passUpper = confirm ("Do you want uppercase in your passsword?");
  var passsNumeric = confirm ("Do you want numerics included in your password?");
  var passSpecial = confirm ("Do you want to include special characters in your password?");


//Password can't be created unless all character types are included.
  if (passUpper === false && passLower === false && passsNumeric === false && passSpecial === false) {
    window.alert ("Password criteria has not been met.");
  } 
  
var completePassword = ""





//Randomizing the password
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  let randomLower = "";
  for ( let i = 0; i < passLength; i++){
    randomLower += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    //console.log(randomLower);
  }
  if (passLower === true){completePassword = completePassword + randomLower};
   // return randomLower += lowercase.substring(passLength) 

   const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomUpper = "";
    for ( let i = 0; i < passLength; i++){
      randomUpper += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
      //console.log(randomUpper);
    }
  if (passUpper === true){completePassword = completePassword + randomUpper};

  const numerics = "0123456789";
  let randomNumerics = "";
  for ( let i = 0; i < passLength; i++){
      randomNumerics += numerics.charAt(Math.floor(Math.random() * numerics.length));
      //console.log(randomNumerics);
    }
  if (passsNumeric === true){completePassword = completePassword + randomNumerics};

  const special = "!@#$%^&*~=+;:,'/?"
  let randomSpecial = "";
  for ( let i = 0; i < passLength; i++){
      randomSpecial += special.charAt(Math.floor(Math.random() * special.length));
      //console.log(randomSpecial);
    }
  if (passSpecial === true){completePassword = completePassword + randomSpecial};

//}  
// Repeat function for as many characters as chosen - combine the random charcters into a single password

let password ="";
for (let i = 0; i < passLength; i++){
  password += completePassword.charAt(Math.floor(Math.random() * completePassword.length));
  }
//console.log(completePassword);

return password;
}
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
  var passwordLength = prompt ("How many characters you want in your password? (min 8 - max 128)");
  if (passwordLength < 8){
    window.alert ("Password must be more than 8 characters.");
    prompt ("How many characters you want in your password? (min 8 - max 128)");
  } else if (passwordLength > 128){
    window.alert ("Password must be less than 128 characters.");
    prompt ("How many characters you want in your password? (min 8 - max 128)");
  } else if (isNaN(passwordLength)){
    window.alert ("Select a valid number between 8 and 128.");
    prompt ("How many characters you want in your password? (min 8 - max 128)");
  }
 const passLength = parseInt(passwordLength.value);


//Does the user want lowercase, uppercase, numerics, and/or special characters?
  var passLower = confirm ("Do you want lowercase in your password?"); 
  var passUpper = confirm ("Do you want uppercase in your passsword?");
  var passsNumeric = confirm ("Do you want numerics included in your password?");
  var passSpecial = confirm ("Do you want to include special characters in your password?");


//Password can't be created unless all character types are included.
  if (passUpper === false){
    window.alert ("Password criteria has not been met.");
  } else if (passLower === false){
    window.alert ("Password criteria has not been met.");
  } else if (passsNumeric === false){
    window.alert ("Password criteria has not been met.");
  } else if (passSpecial === false){
    window.alert ("Password criteria has not been met.");
  };

  {const lowercase = "abcdefghijklmnopqrstuvwxyz";
    function getRandomLower (){
      let randomlower = "";
      const lowerlength = lowercase.length;
      for (let i = 0; i < length; i++){
        randomlower =+ lowercase[Math.floor(Math.random()) * lowercase.length];
       }
    return randomlower;}
  }
  {const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    function getRandomUpper (){
      return uppercase[Math.floor(Math.random()) * uppercase.length];
    }}
  {const numerics = "0123456789";
    function getRandomNumerics (){
      return numerics[Math.floor(Math.random()) * numerics.length];
     }}
  {const special = "!@#$%^&*~=+;:,'/?"
    function getRandomSpecial (){
      return special[Math.floor(Math.random()) * special.length];
     }}


// Repeat function as many characters as chosen

let password = "";
for (let i = 0; i <= password.length; i++){
 let password = Math.floor (Math.random()) * (getRandomLower+getRandomUpper+getRandomNumerics+getRandomSpecial);
  //console.log(lowercase,uppercase,numerics,special[password])
}
return password;
}



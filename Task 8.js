
function validateForm() {
let isValid=true;
let firstName = document.forms["myform"]["First Name"].value;
let lastName = document.forms["myform"]["Last Name"].value;
let email = document.forms["myform"]["email"].value;
let password = document.forms["myform"]["pswd"].value;
let confirmPassword = document.forms["myform"]["repswd"].value;
let age = document.forms["myform"]["age"].value;
let phoneNumber = document.forms["myform"]["phoneNumber"].value;
let address = document.forms["myform"]["address"].value;
let state = document.forms["myform"]["state"].value;
// Validate First Name (Strong Name)
let strongFirstNamePattern = /^[A-Z][a-z]+$/;
if (!strongFirstNamePattern.test(firstName)) {
   document.getElementById('fnametest').innerHTML = "POOR";
   isValid=false;
} else {
   document.getElementById('fnametest').innerHTML = "";
}

// Validate Last Name (Strong Name)
if (!strongFirstNamePattern.test(lastName)) {
   document.getElementById('lnametest').innerHTML = "POOR";
   isValid=false;
} else {
   document.getElementById('lnametest').innerHTML = "";
}

// Validate Email
let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!emailPattern.test(email)) {
   document.getElementById('mailtest').innerHTML = "POOR";
   isValid= false;
} else {
   document.getElementById('mailtest').innerHTML = "";
}

// Validate Password (at least 8 characters)
if (password.length < 8) {
   document.getElementById('passwordtest').innerHTML = "POOR";
   isValid=false;
} else {
   document.getElementById('passwordtest').innerHTML = "";
}

// Validate Confirm Password
if (password !== confirmPassword) {
   document.getElementById('repswdtest').innerHTML = "MISMATCH";
   isValid= false;
} else {
   document.getElementById('repswdtest').innerHTML = "";
}

// Validate Age (must be a number)
if (isNaN(age) || age < 0) {
   document.getElementById('agetest').innerHTML = "INVALID";
   isValid=false;
}
else if(age<10){
    document.getElementById('agetest').innerHTML = "POOR";
   isValid= false;
}
 else {
   document.getElementById('agetest').innerHTML = "";
}

// Validate Phone Number (10 digits)
if (phoneNumber.length<10) {
   document.getElementById('phnotest').innerHTML = "POOR";
   isValid= false;
} else {
   document.getElementById('phnotest').innerTHTML= "";
}

// Validate Address
if (address.length < 5) {
   document.getElementById('addresstest').innerHTML = "POOR";
   isValid= false;
} else {
   document.getElementById('addresstest').innerHTML = "";
}

// Validate State
if (state.length<3) {
   document.getElementById('statetest').innerHTML = "POOR";
   isValid=false;
} else {
   document.getElementById('statetest').innerHTML = "";
}
// Form is valid
return isValid;
}



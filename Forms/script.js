//Add a keyup listener on the first input of the field
const firstNameInput = document.getElementById("firstname");
const displayFirstName = document.getElementById("display-firstname");

function getFirstName(){
    displayFirstName.innerText = firstNameInput.value;
}
firstNameInput.addEventListener("keyup",getFirstName);


//Add a keyup listener on the second input
const ageInput = document.getElementById("age");
const displayAge = document.getElementById("a-hard-truth");

function getAge(){
    const age = ageInput.value;
    if(age >18){
        displayAge.style.visibility = "";
    }
    else {
        displayAge.style.visibility = "hidden";
    }
}
ageInput.addEventListener("keyup", getAge);

//TODO: Add a key up listener on the both fields if the password is too short then let show it red. Or if both passwords don't match

    //Get your password fields out of your HTML
    const passwordInput = document.getElementById("pwd");
    const passwordConfirm = document.getElementById("pwd-confirm");

    //Add a key up listener
    passwordInput.addEventListener("keyup", passwordVerified);
    passwordConfirm.addEventListener("keyup", passwordMatches);

    //Add a function that shows the password red when it's shorter then 6 characters.
    function passwordVerified(){
        if(passwordInput.value.length < 6){
            passwordInput.style.color = "red";
        }
        else {
            passwordInput.style.color = "";
        }
    }

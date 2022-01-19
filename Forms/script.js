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



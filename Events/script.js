//update exercise to modern syntax

const _initTime = Date.now()

function getElapsedTime(){
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickedAgain(event){
    alert(event.target.classList[1]);
}

function clickOnSquare(event){

    //create a new div and give it a class name (select the location where you want to add it first)
    const containerSection = document.querySelector(".displayedsquare-wrapper");
    const div = document.createElement("div");
    div.classList.add("displayedsquare");
    containerSection.append(div);

    const color = event.target.classList[1];
    div.classList.add(color);
    div.addEventListener("click", clickedAgain);

    //create a new <li>
    const sections = document.querySelectorAll("section");
    const li = document.createElement("li");
    li.innerText = getElapsedTime() +": the clicked button has color: " + event.target.classList[1];
    sections[sections.length -1].append(li);
}

//add a background color that changed when you press space bar
function keyPressed(event){
    console.log(event.keyCode);
    switch(event.keyCode){
        case 32: event.target.style.backgroundColor = colorpicker();
        break;
    }
}

function colorpicker() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const body = document.querySelector("body");
body.addEventListener("keypress", keyPressed);

const actionsquares = document.querySelectorAll('.actionsquare');
for(let actionsquare of actionsquares){
    actionsquare.addEventListener('click', clickOnSquare);
}

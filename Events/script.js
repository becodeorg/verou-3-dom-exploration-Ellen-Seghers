//update exercise to modern syntax

const _initTime = Date.now()

function getElapsedTime(){
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
    console.log(e.target.classList[1])
    console.log(getElapsedTime())

    //create a new div and giv it a class name (select the location where you want to add it first)
    const containerSection = document.querySelector(".displayedsquare-wrapper");
    const div = document.createElement("div");
    div.classList.add("displayedsquare");
    containerSection.append(div);

    //TODO: get color

    //TODO: apply color
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
    actionsquare.addEventListener('click', clickOnSquare)
}

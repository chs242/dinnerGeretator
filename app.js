const dinnerButton = document.getElementById('dinner-button')
const output = document.getElementById('output')
const mainOutput = document.getElementById('main')
const side1Output = document.getElementById('side-1')
const side2Output = document.getElementById('side-2')
const addButton = document.getElementById('add-button')

dinnerButton.onclick = () => {
    changeBorder()
    setTimeout(() => {handleDinnerButton()}, 200);
    setTimeout(() => {dinnerButton.setAttribute('class', 'dinner-button-pressed'), 1000})
}

function handleDinnerButton (){
    mainOutput.innerHTML = 'here is your main'
    side1Output.innerHTML = 'here is your first side'
    side2Output.innerHTML = 'here is your second side'
}

function changeBorder (){
    output.setAttribute('class', 'green-border')
    setTimeout(()=>{output.setAttribute('class', 'output')}, 250) 
}

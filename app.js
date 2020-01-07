const dinnerButton = document.getElementById('dinner-button')
const output = document.getElementById('output')
const mainOutput = document.getElementById('main')
const side1Output = document.getElementById('side-1')
const side2Output = document.getElementById('side-2')
const addButton = document.getElementById('add-button')

dinnerButton.onclick = () => {
    setTimeout(() => {handleDinnerButton()}, 300);
    dinnerButtonTimer(dinnerButton)
}

addButton.onclick = () => {
    addButtonTimer(addButton)
}

function handleDinnerButton (){
    mainOutput.innerHTML = 'here is your main'
    side1Output.innerHTML = 'here is your first side'
    side2Output.innerHTML = 'here is your second side'
}

function dinnerButtonTimer (btn) {
    setTimeout(() => {btn.setAttribute('class', 'dinner-button-pressed')}, 200)
    setTimeout(() => {btn.setAttribute('class', 'dinner-button')}, 450)
}

function addButtonTimer (btn) {
    setTimeout(() => {btn.setAttribute('class', 'add-button-pressed')}, 200)
    setTimeout(() => {btn.setAttribute('class', 'add-button')}, 450)
}

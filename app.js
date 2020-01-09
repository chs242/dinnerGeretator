var firebase = require("firebase");

const dinnerButton = document.getElementById('dinner-button')
const output = document.getElementById('output')
const mainOutput = document.getElementById('main')
const side1Output = document.getElementById('side-1')
const side2Output = document.getElementById('side-2')
const addButton = document.getElementById('add-button')
const addContainer = document.getElementById('add-container-visibility-toggle-wrapper')
const cancelButton = document.getElementById('cancel-button')
const finalAddButton = document.getElementById('final-add-button')
const finalAddContainer = document.getElementById('final-add-message-container')

dinnerButton.onclick = () => {
    backShadowTimer(dinnerButton, 'dinner-button-pressed', 'dinner-button')
    setTimeout(() => {handleDinnerButton()}, 300);
}

addButton.onclick = () => {
    backShadowTimer(addButton, 'add-button-pressed', 'add-button')
    setTimeout(() => {addVisibility(addContainer)}, 300);
    setTimeout(() => {removeVisibility(addButton)}, 200);
}

cancelButton.onclick = () => {
    backShadowTimer(cancelButton, 'add-container-button-pressed', 'add-container-button')
    setTimeout(() => {addVisibility(addButton)}, 300);
    setTimeout(() => {removeVisibility(addContainer)}, 200);
}

finalAddButton.onclick = () => {
    backShadowTimer(finalAddButton, 'add-container-button-pressed', 'add-container-button')
    setTimeout(() => {removeVisibility(addContainer)}, 200);
    setTimeout(() => {addVisibility(finalAddContainer)}, 300);
    setTimeout(() => {addVisibility(addButton)}, 3000);
    setTimeout(() => {removeVisibility(finalAddContainer)}, 3000);
}

function handleDinnerButton (){
    mainOutput.innerHTML = 'here is your main'
    side1Output.innerHTML = 'here is your first side'
    side2Output.innerHTML = 'here is your second side'
}

function backShadowTimer (btn, classNamePressed, className) {
    setTimeout(() => {btn.setAttribute('class', classNamePressed)}, 50)
    setTimeout(() => {btn.setAttribute('class', className)}, 350)
}

function addVisibility (x) {
    if ((x.style.display != "block")) {
        x.style.display = "block";
      } 
    
}
function removeVisibility (x) {
    if ((x.style.display != "none")){
        x.style.display = "none";
    }
}

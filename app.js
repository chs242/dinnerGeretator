//register the service worker
//navigator is a keyword which will check to see if the browser supports the service worker
//the method register is used to register the service worker and is async.
if("serviceWorker" in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker registered', reg))
        .catch((err) => console.log('service worker not registered', err))
}

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
    shadowWhenPressed(dinnerButton, 'dinner-button-pressed', 'dinner-button')
    //renderMeal is a database function. found in db.js
    renderMeal(mainOutput, side1Output, side2Output)
}

addButton.onclick = () => {
    shadowWhenPressed(addButton, 'add-button-pressed', 'add-button')
    setTimeout(() => {addVisibility(addContainer)}, 300);
    setTimeout(() => {removeVisibility(addButton)}, 200);
}

cancelButton.onclick = () => {
    shadowWhenPressed(cancelButton, 'add-container-button-pressed', 'add-container-button')
    setTimeout(() => {addVisibility(addButton)}, 300);
    setTimeout(() => {removeVisibility(addContainer)}, 200);
}

finalAddButton.onclick = () => {
    shadowWhenPressed(finalAddButton, 'add-container-button-pressed', 'add-container-button')
    //renderToDb()
    setTimeout(() => {removeVisibility(addContainer)}, 200);
    setTimeout(() => {addVisibility(finalAddContainer)}, 300);
    setTimeout(() => {addVisibility(addButton)}, 3000);
    setTimeout(() => {removeVisibility(finalAddContainer)}, 3000);
}

function shadowWhenPressed (btn, classNamePressed, className) {
    setTimeout(() => {btn.setAttribute('class', classNamePressed)}, 1)
    setTimeout(() => {btn.setAttribute('class', className)}, 250)
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

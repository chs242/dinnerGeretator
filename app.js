//register the service worker
//navigator is a keyword which will check to see if the browser supports the service worker
//the method register is used to register the service worker and is async.
if("serviceWorker" in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker registered', reg))
        .catch((err) => console.log('service worker not registered', err))
}
//Dom = navbar
const sideNav = document.getElementById('side-nav')
const closeBtn = document.getElementById('close-btn')
const openBtn = document.getElementById('side-nav-btn')
const viewMenuBtn = document.getElementById('view-menu')
const settingsBtn = document.getElementById('settings')
const logoutBtn = document.getElementById('log-out')
const modal = document.getElementById('modal')
const modalHeaderMain = document.getElementById('modal-header-main')
const modalHeaderSide = document.getElementById('modal-header-side')
const modalContentMain = document.getElementById('modal-content-main')
const modalContentSide = document.getElementById('modal-content-side')
const modalCloseBtn = document.getElementById('modal-close-btn')

//DOM = outputs
const dinnerButton = document.getElementById('dinner-button')
const output = document.getElementById('output')
const mainOutput = document.getElementById('main')
const side1Output = document.getElementById('side-1')
const side2Output = document.getElementById('side-2')

//DOM = add container
const addButton = document.getElementById('add-button')
const addContainer = document.getElementById('add-container-visibility-toggle-wrapper')
const cancelButton = document.getElementById('cancel-button')
const finalAddButton = document.getElementById('final-add-button')
const finalAddMessage = document.getElementById('final-add-message')
const finalAddContainer = document.getElementById('final-add-message-container')

//Dom = Inputs
const mainInput = document.getElementById('main-input')
const side1Input = document.getElementById('side-1-input')
const side2Input = document.getElementById('side-2-input')
const side1TypeInput = document.getElementById('side-1-type-input')
const side2TypeInput = document.getElementById('side-2-type-input')


// navBar open, close and modal functionality
openBtn.onclick = () => {
    const x = window.matchMedia('(max-width: 600px)')
    if(x.matches){
        openNavBar('70%')
    }else {
        openNavBar('20%')
    }
}

closeBtn.onclick = () => closeNavBar()
modalCloseBtn.onclick = () => closeModal()

viewMenuBtn.onclick = () => {
    closeNavBar()
    modal.style.display = 'block';
    modalHeaderMain.innerHTML = 'My Mains'
    modalHeaderSide.innerHTML = 'My Sides'
    renderMenu()
}

window.onclick = function(evt) {
    if (evt.target == modal) {
      closeModal()
    }
}

settingsBtn.onclick = () => {
    unavailable()
    closeNavBar()
}

logoutBtn.onclick = () => {
    unavailable()
    closeNavBar()
}

const unavailable = () => {
    available()
    modalContentMain.innerHTML = "This Feature Isn't Available Yet" 
}
const available = () => modal.style.display = 'block';
const closeNavBar = () => sideNav.style.width = 0;
const closeModal = () => modal.style.display = "none";
const openNavBar = (width) => sideNav.style.width = width


//genearate button and add container
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
    if(mainInput.value !== '' || side1Input.value !== '' || side2Input.value !== ''){
        finalAddMessage.innerHTML = 'Your Selection has been added'
        renderToDb()
        setTimeout(() => {removeVisibility(addContainer)}, 200);
        setTimeout(() => {addVisibility(finalAddContainer)}, 300);
        setTimeout(() => {addVisibility(addButton)}, 2500);
        setTimeout(() => {removeVisibility(finalAddContainer)}, 2500);
    }else {
        finalAddMessage.innerHTML = 'Please Fill At Least One Selection'
        setTimeout(() => {removeVisibility(addContainer)}, 200);
        setTimeout(() => {addVisibility(finalAddContainer)}, 200);
        setTimeout(() => {removeVisibility(finalAddContainer)}, 2500);
        setTimeout(() => {addVisibility(addContainer)}, 2500);
    }
    
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

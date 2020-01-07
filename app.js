const dinnerButton = document.getElementById('dinner-button')
const output = document.getElementById('output')
const mainOutput = document.getElementById('main')
const side1Output = document.getElementById('side-1')
const side2Output = document.getElementById('side-2')

dinnerButton.onclick = function (){
    setTimeout(()=>{mainOutput.innerHTML = 'here is your main'}, 1000)
    side1Output.innerHTML = 'here is your first side'
    side2Output.innerHTML = 'here is your second side'
}
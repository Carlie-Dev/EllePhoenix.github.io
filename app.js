/**
 * Author: Carlie-Dev
 * Purpose: To act as a webpage for my YouTube Channel
 */
//update
loadSettings();
window.addEventListener('load', updateBody);

/**
 * 
 * @param {*} pageNum 
 * 
 */
function updateBody(pageNum) {
    let note = document.createElement('p');
    note.innerHTML = "This document has loaded";
    const mainDiv = document.getElementById('body');
    mainDiv.innerHTML = ""; 

    mainDiv.appendChild(note);

    switch (pageNum){
    case 1:
        mainDiv.innerHTML = "Home Page has loaded";
        break;
    case 2:
        mainDiv.innerHTML = "Uploads has loaded";
        break;
    case 3: 
        mainDiv.innerHTML = "Skins page has loaded";
        break;
    case 4:
        mainDiv.innerHTML = "Social's Page has Loaded"
        break;
    case 5:
        mainDiv.innerHTML = "Form page has loaded";
        break;
    }

    
}

function loadSettings(){

    let mainDiv = document.getElementById('body');
    mainDiv.innerHTML = "This website has loaded";
    updateBody(1);
    

}

//Event listeners
document.getElementById('home').addEventListener('click', ()=>{
    console.log('home was clicked');
    updateBody(1);
})

document.getElementById('uploads').addEventListener('click', ()=>{
    console.log('uploads was clicked');
    updateBody(2);
})

document.getElementById('Minecraft Skins').addEventListener('click', ()=>{
    console.log('uploads was clicked');
    updateBody(2);
})
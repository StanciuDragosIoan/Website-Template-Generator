// UI LOGIC

//variables
// const addContentPanelBtn = document.querySelector("#page");
const addElementPanelBtn = document.querySelector("#content");
const elementPanel = document.querySelector("#element-panel");
elementPanel.style.display = "none";
const closeElementPanelBtn = document.querySelector("#close-content-btn");

// event listeners

// addContentPanelBtn.addEventListener("click", addContentPanel);
addElementPanelBtn.addEventListener("click", addElementPanel);
closeElementPanelBtn.addEventListener("click", closeElementpanel);

//functions
function addElementPanel(){
    elementPanel.style.display="block";   
    console.log('add element panel...');
}

function closeElementpanel(){
    elementPanel.style.display="none"; 
    console.log('close element panel...');  
}


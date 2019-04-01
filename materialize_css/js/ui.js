// UI Interactions

const addContentBtn = document.querySelector("#contentBtn");
const contentPanel = document.querySelector("#content-panel");
const removeContentBtn = document.querySelector("#removeContent");



const configPanelBtn = document.querySelector("#configBtn");
configPanel = document.querySelector("#config-panel");
const removeConfigBtn = document.querySelector("#removeConfig");

//navigation item config buttons
const addNavItemBtn = document.querySelector("#addNavItem");
const removeNavItemBtn = document.querySelector("#removeNavItem");
const menuLeftBtn = document.querySelector("#menuLeft");
const menuRightBtn = document.querySelector("#menuRight");


//Events
addContentBtn.addEventListener("click", addContentPanel);
removeContentBtn.addEventListener("click", removeContentPanel);

configPanelBtn.addEventListener("click", addConfigPanel);
removeConfigBtn.addEventListener("click", removeConfigPanel);


//navigation item config
addNavItemBtn.addEventListener("click", addNavItem);
removeNavItemBtn.addEventListener("click", removeNavItem);

menuLeftBtn.addEventListener("click", switchMenuLeft);
menuRightBtn.addEventListener("click", switchMenuRight);

// Functions
function addContentPanel() {
    contentPanel.style.display = "block";
    console.log('adding content =)');
}


function removeContentPanel() {
    contentPanel.style.display = "none";
}

function addConfigPanel() {
    console.log('After adding an item click on it to further configure =)');
}

function removeConfigPanel() {
    configPanel.style.display = "none";
}




// NAVIGATION CUSTOMMISATION

//add navigation item
function addNavItem() {
    console.log('adding menu item');
    let navItemPlaceholder = document.querySelectorAll(".nav-item-placeholder");
    let navItemPlaceholderArr = Array.from(navItemPlaceholder);
    navItemPlaceholderArr.forEach((item) => {
        item.innerHTML += '<li class="navigation-item"><a href="#">New Item</a></li>';
    });

    const items = document.querySelectorAll(".navigation-item");
    const itemsArr = Array.from(items);
    if (itemsArr.length === 12) {
        console.log('Navigation logo needs to be moved or deleted =)');
    }

}


//remove navigation item
function removeNavItem() {
    console.log('removing nav item');
    const items = document.querySelectorAll(".navigation-item");
    const itemsArr = Array.from(items);


    if (itemsArr.length === 8) {
        //8 items in the menu (remove 'Contact' item)
        itemsArr[7].parentNode.removeChild(itemsArr[7]);
        itemsArr[3].parentNode.removeChild(itemsArr[3]);
        for (var i = itemsArr.length - 1; i >= 0; i--) {
            if (itemsArr[i] === itemsArr[7]) {
                itemsArr.splice(i, 1);
            } else if (itemsArr[i] === itemsArr[3]) {
                itemsArr.splice(i, 1);
            }
        }

    } else if (itemsArr.length > 8) {
        console.log('more than 8');
        if (itemsArr.length === 10) {
            //10 items in the menu (remove 'New Item' item)
            itemsArr[9].parentNode.removeChild(itemsArr[9]);
            itemsArr[4].parentNode.removeChild(itemsArr[4]);
            for (var i = itemsArr.length - 1; i >= 0; i--) {
                if (itemsArr[i] === itemsArr[9]) {
                    itemsArr.splice(i, 1);
                } else if (itemsArr[i] === itemsArr[4]) {
                    itemsArr.splice(i, 1);
                }
            }
        } else if (itemsArr.length === 12) {
            //12 items in the menu (remove 'New Item' item)
            itemsArr[11].parentNode.removeChild(itemsArr[11]);
            itemsArr[5].parentNode.removeChild(itemsArr[5]);
            for (var i = itemsArr.length - 1; i >= 0; i--) {
                if (itemsArr[i] === itemsArr[11]) {
                    itemsArr.splice(i, 1);
                } else if (itemsArr[i] === itemsArr[5]) {
                    itemsArr.splice(i, 1);
                }
            }
        } else if (itemsArr.length === 14) {
            //14 items in the menu (remove 'New Item' item)
            itemsArr[13].parentNode.removeChild(itemsArr[13]);
            itemsArr[6].parentNode.removeChild(itemsArr[6]);
            for (var i = itemsArr.length - 1; i >= 0; i--) {
                if (itemsArr[i] === itemsArr[13]) {
                    itemsArr.splice(i, 1);
                } else if (itemsArr[i] === itemsArr[6]) {
                    itemsArr.splice(i, 1);
                }
            }
        } else if (itemsArr.length === 16) {
            //16 items in the menu (remove 'New Item' item)
            itemsArr[15].parentNode.removeChild(itemsArr[15]);
            itemsArr[7].parentNode.removeChild(itemsArr[7]);
            for (var i = itemsArr.length - 1; i >= 0; i--) {
                if (itemsArr[i] === itemsArr[15]) {
                    itemsArr.splice(i, 1);
                } else if (itemsArr[i] === itemsArr[7]) {
                    itemsArr.splice(i, 1);
                }
            }
        } else if (itemsArr.length === 18) {
            //18 items in the menu (remove 'New Item' item)
            itemsArr[17].parentNode.removeChild(itemsArr[17]);
            itemsArr[8].parentNode.removeChild(itemsArr[8]);
            for (var i = itemsArr.length - 1; i >= 0; i--) {
                if (itemsArr[i] === itemsArr[17]) {
                    itemsArr.splice(i, 1);
                } else if (itemsArr[i] === itemsArr[8]) {
                    itemsArr.splice(i, 1);
                }
            }
        } else if (itemsArr.length === 20) {
            //20 items in the menu (remove 'New Item' item)
            itemsArr[19].parentNode.removeChild(itemsArr[19]);
            itemsArr[9].parentNode.removeChild(itemsArr[9]);
            for (var i = itemsArr.length - 1; i >= 0; i--) {
                if (itemsArr[i] === itemsArr[19]) {
                    itemsArr.splice(i, 1);
                } else if (itemsArr[i] === itemsArr[9]) {
                    itemsArr.splice(i, 1);
                }
            }
        }
    } else if (itemsArr.length < 8) {
        console.log('less than 8');
        if (itemsArr.length === 6) {
            //6 items in the menu (remove 'Products' item)
            itemsArr[5].parentNode.removeChild(itemsArr[5]);
            itemsArr[2].parentNode.removeChild(itemsArr[2]);
            for (var i = itemsArr.length - 1; i >= 0; i--) {
                if (itemsArr[i] === itemsArr[5]) {
                    itemsArr.splice(i, 1);
                } else if (itemsArr[i] === itemsArr[2]) {
                    itemsArr.splice(i, 1);
                }
            }
        } else if (itemsArr.length === 4) {
            //4 items in the menu (remove 'About' item)
            itemsArr[3].parentNode.removeChild(itemsArr[3]);
            itemsArr[1].parentNode.removeChild(itemsArr[1]);
            for (var i = itemsArr.length - 1; i >= 0; i--) {
                if (itemsArr[i] === itemsArr[3]) {
                    itemsArr.splice(i, 1);
                } else if (itemsArr[i] === itemsArr[1]) {
                    itemsArr.splice(i, 1);
                }
            }
        } else if (itemsArr.length === 2) {
            //2 items in the menu (remove 'Home' item)
            itemsArr[1].parentNode.removeChild(itemsArr[1]);
            itemsArr[0].parentNode.removeChild(itemsArr[0]);
            for (var i = itemsArr.length - 1; i >= 0; i--) {
                if (itemsArr[i] === itemsArr[1]) {
                    itemsArr.splice(i, 1);
                } else if (itemsArr[i] === itemsArr[0]) {
                    itemsArr.splice(i, 1);
                }
            }
        }
    }
}


function switchMenuLeft() {
    const menu = document.querySelector("#menuPositionItem");
    menu.className = "left hide-on-med-and-down";
}

function switchMenuRight() {
    const menu = document.querySelector("#menuPositionItem");
    menu.className = "right hide-on-med-and-down";
}



// SLIDER CUSTOMISATIOn
const removeSlideBtn = document.querySelector("#remove-buttons-slider");
const addSlideBtn = document.querySelector("#add-buttons-slider");

removeSlideBtn.addEventListener("click", removeSliderButtons);

function removeSliderButtons() {
    const buttonsCollection = document.querySelectorAll(".slider-btn");
    const buttonsAr = Array.from(buttonsCollection);
    buttonsAr.forEach((item) => {
        item.innerHTML = '';
        item.className = '';
    });

}

addSlideBtn.addEventListener("click", addSliderButtons);

function addSliderButtons() {
    const buttonsCollection = document.querySelectorAll(".slider-btn-to-be");
    const buttonsAr = Array.from(buttonsCollection);
    buttonsAr.forEach((item) => {
        item.innerHTML = `
        <a class="waves-effect waves-light btn-large blue darken-4 slider-btn">Click For More</a>
        `;
    });
}
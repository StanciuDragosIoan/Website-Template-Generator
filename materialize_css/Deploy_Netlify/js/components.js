 //COMPONENTS

 const nav = {
     type: "dynamic",
     init: function () {
         $('.sidenav').sidenav();
         initializeConfigPanel(nav);
     },
     content: `
            <nav class="blue darken-4 nav-component">
                <div class="nav-wrapper">
                <a href="#!" class="brand-logo">Logo</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li class="navigation-item"><a href="#">Home</a></li>
                    <li class="navigation-item"><a href="#">About</a></li>
                    <li class="navigation-item"><a href="#">Products</a></li>
                    <li class="navigation-item"><a href="#">Contact</a></li>  
                    <li class="nav-item-placeholder"></li>
                </ul>
                </div>
            </nav>
        
 
            <ul class="sidenav" id="mobile-demo">
                <li class="navigation-item"><a href="#">Home</a></li>
                <li class="navigation-item"><a href="#">About</a></li>
                <li class="navigation-item"><a href="#">Products</a></li>
                <li class="navigation-item"><a href="#">Contact</a></li>  
                <li class="nav-item-placeholder"></li>
            </ul>
     
        `
 }


 // COMPONENTS FUNCTIONS

 //insert component into the DOM
 function insertComponentInPage(component) {
     if (component.type === "static") {
         document.querySelector("#template-header").innerHTML += component.content;
     } else {
         document.querySelector("#template-header").innerHTML += component.content;
         component.init();
     }

 }

 function initializeConfigPanel(component) {
     if (component === nav) {
         //component = document.querySelector('.nav-component');
         const navCollection = document.querySelectorAll('.nav-component');
         const navAr = Array.from(navCollection);
         component = navAr;
     }


     component.forEach((item) => {
         item.addEventListener("click", function (e) {
             // console.log(component);
             //console.log(e.target);
             configPanel.style.display = "block";

         });
     });
 }


 //VARS FOR COMPONENT MANIP/CUSTOMISATION
 let configPanel = document.querySelector("#config-panel");
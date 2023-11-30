import createHeader from "./createHeader";
import createBody from "./createBody";

console.log("index.js loaded successfully");

document.addEventListener("DOMContentLoaded", function () {
    const pageBody = document.querySelector("body");
    console.log("pageBody loaded successfully");
    console.log(pageBody);
    
    pageBody.appendChild(createHeader());
    pageBody.appendChild(createBody('home'));

    console.log(createBody('home').childNodes[0]);
    console.log(pageBody);

    // pageBody.removeChild(document.getElementById("contentCard"));
    // pageBody.appendChild(createBody());
    
    
  
    console.log(document.querySelector(".content-home").style);
    document.querySelector(".content-home").style.display = "none";

    

    const homeContent = document.querySelector(".content-home");
    const menuContent = document.querySelector(".content-menu");
    const contactContent = document.querySelector(".content-contact");

    const homeBTN = document.querySelector("#header-buttons-home");
    console.log(homeBTN);
    const menuBTN = document.querySelector("#header-buttons-menu");
    console.log(menuBTN);
    const contactBTN = document.querySelector("#header-buttons-contact");
    console.log(contactBTN);
    
    homeBTN.addEventListener("click", () => {
        console.log("clicked");
        
        
        homeContent.style.display = "flex";
        menuContent.style.display = "none";
        contactContent.style.display = "none";

    });
    
    menuBTN.addEventListener("click", () => {
        console.log("clicked");
        
        
        homeContent.style.display = "none";
        menuContent.style.display = "flex";
        contactContent.style.display = "none";

    });

    contactBTN.addEventListener("click", () => {
        console.log("clicked");
        
        
        homeContent.style.display = "none";
        menuContent.style.display = "none";
        contactContent.style.display = "flex";

    });
});
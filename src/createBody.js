export default function createBody(card){
    console.log("createBody called");
    const contentCard = document.createElement("div");
    contentCard.id = "contentCard";
    console.log(contentCard.id);
    contentCard.classList.add("content-card");

    const contentHome = document.createElement("div");
    contentHome.classList.add("content-home");

    const contentMenu = document.createElement("div");
    contentMenu.classList.add("content-menu");
    
    const contentContact = document.createElement("div");
    contentContact.classList.add("content-contact");

    contentCard.appendChild(contentHome);
    contentCard.appendChild(contentMenu);
    contentCard.appendChild(contentContact);

    return contentCard;
}
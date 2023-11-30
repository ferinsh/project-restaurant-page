export default function createHeader(){

    const header = document.createElement("div");
    header.classList.add("header");
    header.id = "header";
    console.log(header);
    const headerTitle = document.createElement("h1");
    headerTitle.innerHTML = "RESTAURANT";
    headerTitle.classList.add('header-title');

    header.appendChild(headerTitle);

    console.log(header);


    const headerButtons = document.createElement("div");
    headerButtons.classList.add('header-buttons-holder');
    //
        const headerButtonsHome = document.createElement("button");
        headerButtonsHome.innerHTML = 'HOME';
        headerButtonsHome.classList.add('header-buttons');
        headerButtonsHome.id = 'header-buttons-home';
        
        headerButtons.appendChild(headerButtonsHome);
        console.log(headerButtons);
        //
        const headerButtonsMenu = document.createElement("button");
        headerButtonsMenu.innerHTML = 'MENU';
        headerButtonsMenu.classList.add('header-buttons');
        headerButtonsMenu.id = 'header-buttons-menu';

        headerButtons.appendChild(headerButtonsMenu);
        console.log(headerButtons);
        //
        const headerButtonsContact = document.createElement("button");
        headerButtonsContact.innerHTML = 'CONTACT';
        headerButtonsContact.classList.add('header-buttons');
        headerButtonsContact.id = 'header-buttons-contact';

        headerButtons.appendChild(headerButtonsContact);
        console.log(headerButtons);


    //
        
    header.appendChild(headerButtons);
    return header;
}
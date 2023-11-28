export default function setDefaultStyle(customFontFamily){
    const body = document.querySelector('body');
    const content = document.getElementById('content');
    const homePage = document.getElementById('home-page');
    const header = document.getElementById('header');
    const homePageBody = document.getElementById('body');
    const bodyImage = document.getElementById('image');
    const bodyContent = document.getElementById('body-content');

    //body.style.backgroundColor = 'blue';
    body.style.margin = 0;
    body.style.backgroundImage = 'url("../src/background.jpg")';
    body.style.backgroundSize = 'fill';

    content.style.display = 'flex';
    content.style.justifyContent = 'center';
    // content.style.width = '100%';



    homePage.style.width = '95vw';
    homePage.style.height = '90vh';
    homePage.style.backgroundColor = 'beige';
    homePage.style.marginTop = '5vh'
    homePage.style.boxShadow = '0px 0px 20px 10px'
    homePage.style.display = 'flex';
    homePage.style.alignItems = 'center';
    homePage.style.flexDirection = 'column';

    header.style.width = '100%';
    header.style.height = '10%';
    //header.style.backgroundColor = 'red';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'center';
    header.style.alignContent = 'center';
    header.style.fontSize = '4rem';
    header.style.fontFamily = customFontFamily;
    header.style.color = 'black';
    header.style.fontWeight = '900';
    

    homePageBody.style.width = '100%';
    homePageBody.style.height = '90%';
    homePageBody.style.display = 'flex';
    homePageBody.style.justifyContent = 'space-around';
    //homePageBody.style.alignItems = 'center';
    homePageBody.style.paddingTop = '5%';
    //homePageBody.style.backgroundColor = 'blue';

    bodyImage.style.height = '60%';
    bodyImage.style.width = '45%';
    bodyImage.style.backgroundImage = 'url("../src/background.jpg")';
    bodyImage.style.backgroundSize = 'cover';

    bodyContent.style.height = '60%';
    bodyContent.style.width = '45%';
    bodyContent.textContent = 'Nestled in the heart of a vibrant cityscape, "The Rustic Hearth" stands as a culinary sanctuary, offering a tapestry of flavors that celebrate both tradition and innovation. The restaurants warm, inviting ambiance welcomes guests with a blend of rustic charm and modern elegance. Adorned with reclaimed wood accents and soft ambient lighting, the space exudes an intimate yet lively atmosphere, where each visit promises an escape from the bustling outside world. The tantalizing aroma of freshly prepared dishes, crafted with locally sourced ingredients, dances through the air, inviting patrons to embark on a gastronomic journey. From sizzling grills that infuse the air with a savory richness to delicately plated creations that are visual feasts, "The Rustic Hearth" prides itself on culinary mastery that tantalizes the palate and fosters unforgettable dining experiences for every guest. Whether relishing in cozy booths or gathering around communal tables, every moment at this establishment is an ode to the artistry of food and the joy of shared dining experiences.'
    //bodyContent.style.backgroundColor = 'blue';



}


const footerContainer = document.getElementById("footer");
const footerContent = document.getElementById("author-info");
const shareButton = document.getElementById("share-button");
const socialsPopUp = document.getElementById("socials-popup");
const triangle = document.getElementById("inverted-triangle");
let isFooterActive = false;
const websiteWidth = window.innerWidth;

const showSocials = () => {
    if (window.innerWidth < 600){
        socialsPopUp.classList.add('hidden');
        if (!isFooterActive){
            footerContainer.classList.remove('active');
            footerContent.innerHTML = `
            <section class="author-info" id="author-info">
            <img src="images/avatar-michelle.jpg " alt="user-avatar" id="author-avatar">
            <section>
                <div class="author-name">Michelle Appleton</div>
                <div class="article-date">28 Jun 2020</div>
            </section>
            </section>
            `;
        } else {
            triangle.classList.add('hidden');
            footerContainer.classList.add('active');
            footerContent.innerHTML = `
            <div class="share-text">SHARE</div>
                <section class="author-socials">
                    <img src="images/icon-facebook.svg" href="#">
                    <img src="images/icon-twitter.svg" href="#">
                    <img src="images/icon-pinterest.svg" href="#">
                </section>
            `;
        }
    } else { 
        if (!isFooterActive){
            socialsPopUp.classList.add('hidden');
            triangle.classList.add('hidden');
        } else {
            footerContainer.classList.remove('active');
            socialsPopUp.classList.remove('hidden');
            triangle.classList.remove('hidden');
            footerContent.innerHTML = `
            <section class="author-info" id="author-info">
            <img src="images/avatar-michelle.jpg " alt="user-avatar" id="author-avatar">
            <section>
                <div class="author-name">Michelle Appleton</div>
                <div class="article-date">28 Jun 2020</div>
            </section>
            </section>
            `;
        }
    }
}

shareButton.addEventListener('click', () => {
    console.log('Share button is clicked!');
    isFooterActive = !isFooterActive;
    console.log(isFooterActive);
    showSocials();
});

window.addEventListener('resize', showSocials);
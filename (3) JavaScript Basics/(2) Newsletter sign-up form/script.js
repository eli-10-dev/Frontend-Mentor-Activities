const mobileImage = document.getElementById("header-image-mobile");
const desktopImage = document.getElementById("header-image-desktop");

const changeHeaderImage = () => {
    if (window.innerWidth < 750){
        mobileImage.classList.remove("hidden");
        desktopImage.classList.add("hidden");
    } else {
        mobileImage.classList.add("hidden");
        desktopImage.classList.remove("hidden");        
    }
}


window.addEventListener('resize', changeHeaderImage);

changeHeaderImage();
console.log("Linked!");
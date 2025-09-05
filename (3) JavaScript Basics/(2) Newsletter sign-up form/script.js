const form = document.getElementById("form");
const contentBody = document.getElementById("content");

const mobileImage = document.getElementById("header-image-mobile");
const desktopImage = document.getElementById("header-image-desktop");

const userInput = document.getElementById("email");
const invalidEmailPrompt = document.getElementById("invalid-prompt");
const successMessageContainer = document.getElementById("success-message-container");
const successMessageContent = document.getElementById("success-message-content");
let validEmail = 'test@gmail.com';

const dismissButton = document.getElementById("dismiss-button");


const changeHeaderImage = () => {
    if (window.innerWidth < 750){
        mobileImage.classList.remove("hidden");
        desktopImage.classList.add("hidden");
    } else {
        mobileImage.classList.add("hidden");
        desktopImage.classList.remove("hidden");        
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Submitted');
    // console.log("userInput's value:", userInput.value);
    // console.log("data type:", typeof userInput.value);

    if (userInput.value === ""){
        invalidEmailPrompt.classList.remove('hidden');
        userInput.classList.add('error');
    } else {
        invalidEmailPrompt.classList.add('hidden');
        userInput.classList.remove('error');
        validEmail = userInput.value;
        successfulPrompt();      
    }
}

const successfulPrompt = () => {
    successMessageContent.innerHTML =  `
    <div>
        <img src="assets/images/icon-success.svg" alt="Success icon">
    </div>

    <h1>Thanks for subscribing!</h1>

    A confirmation email has been sent to <b>${validEmail}</b>. 
    Please open it and click the button inside to confirm your subscription.
  
    `;

    contentBody.classList.add('hidden');
    successMessageContainer.classList.remove('hidden');
}


window.addEventListener('resize', changeHeaderImage);
form.addEventListener('submit', handleSubmit);

changeHeaderImage();
console.log("Linked!");
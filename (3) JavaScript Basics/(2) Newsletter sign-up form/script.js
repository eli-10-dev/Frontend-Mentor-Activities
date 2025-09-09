const form = document.getElementById("form");
const contentBody = document.getElementById("content");

const mobileImage = document.getElementById("header-image-mobile");
const desktopImage = document.getElementById("header-image-desktop");

const userInput = document.getElementById("email");
const invalidEmailPrompt = document.getElementById("invalid-prompt");
const successMessageContainer = document.getElementById("success-message-container");
const successMessageContent = document.getElementById("success-message-content");
let validEmail = /^\S+@\S+$/;
let submittedEmail = '';

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
    currentUserInput = userInput.value;
    // console.log('Submitted');
    // console.log("userInput's value:", userInput.value);
    // console.log("data type:", typeof userInput.value);

    if (currentUserInput === "" || !(userInput.value.match(validEmail))){
        invalidEmailPrompt.classList.remove('hidden');
        userInput.classList.add('error');
    } else {
        invalidEmailPrompt.classList.add('hidden');
        userInput.classList.remove('error');
        submittedEmail = userInput.value;
        successfulPrompt();      
    }
}

const handleDismiss = (e) => {
    userInput.value = "";
    contentBody.classList.remove('hidden');
    successMessageContainer.classList.add('hidden');
}

const successfulPrompt = () => {
    successMessageContent.innerHTML =  `
    <div>
        <img src="assets/images/icon-success.svg" alt="Success icon">
    </div>

    <h1>Thanks for subscribing!</h1>

    A confirmation email has been sent to <b>${submittedEmail}</b>. 
    Please open it and click the button inside to confirm your subscription.
  
    `;

    contentBody.classList.add('hidden');
    successMessageContainer.classList.remove('hidden');
}

window.addEventListener('resize', changeHeaderImage);
form.addEventListener('submit', handleSubmit);
dismissButton.addEventListener('click', handleDismiss);

changeHeaderImage();
console.log("Linked!");
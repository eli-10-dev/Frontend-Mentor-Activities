// Inputs
const billContainer = document.getElementById('bill-input');
const peopleCountContainer = document.getElementById('people-count-input');
// const customTip = document.getElementById('tip-custom');

// Tip Option buttons
const tipOptions = document.querySelectorAll('.tip-option');
const tipCustom = document.getElementById('tip-custom');

// Receipt Display
const tipShare = document.getElementById('tip-share');
const totalShare = document.getElementById('total-share');
const resetButton = document.getElementById('reset-button');
console.log('Script connected!');

resetButton.addEventListener("click", () => {
    billContainer.value = "";
    peopleCountContainer.value = "";
    const active = document.querySelector('.active-tip');
    active.classList.remove('active-tip');
    tipShare.innerHTML = "";
    totalShare.innerHTML = "";
});

// For styling of active tip options
const tipHandleClick = (e) => {
    // Instead of looping through all of the buttons, look for the active button
    // tipOptions.forEach(tip => {
    //     if (tip === e.target){
    //         tip.classList.add('active-tip');
    //     } else {
    //         tip.classList.remove('active-tip');
    //     }
    // })

    const active = document.querySelector('.active-tip');
    if(active){
        active.classList.remove('active-tip');
    } 

    if (e.target.classList.contains('tip-custom')){
        // Added class to overwrite the active-tip's styles
        e.target.classList.add('active-custom-tip');
    } else {
        tipCustom.value = "";
    }

    e.target.classList.add('active-tip');
    calculateShares();
};

tipOptions.forEach(button => {
    button.addEventListener('click', tipHandleClick);
});

/* 
I asked AI about my previous function, previous function checked the typeof the inputs, 
checking if each input had a typeof "number" instead of reusing the function.
*/
const isNumber = (input) => {
    return typeof input === "number" && !isNaN(input) && input > 0;
};

const calculateShares = () => {
    // Don't forget to convert the values inside of input fields to numbers
    const totalBill = Number(billContainer.value);
    const selectedTip = document.querySelector('.active-tip');
    const numberOfPeople = Number(peopleCountContainer.value);
    let confirmedTip = '';

    if(selectedTip){

        if (selectedTip.classList.contains('tip-custom')) {
            confirmedTip = Number(selectedTip.value) / 100;
        } else {
            confirmedTip = Number(selectedTip.dataset.value);
        }
    }

    if (isNumber(totalBill) && isNumber(confirmedTip) && isNumber(numberOfPeople)){
        const tip = totalBill * confirmedTip;
        const tipShare = tip / numberOfPeople;
        const billShare = (totalBill + tip)/ numberOfPeople;
        console.log(`totalBill: ${totalBill} * \nselectedTip: ${selectedTip.dataset.value} \n= tip: ${tip}`);
        console.log(`tip: ${tip} / \nno. of people" ${numberOfPeople} \n= tipShare: ${tipShare}`);
        console.log(`bill: ${totalBill}\n / numberofPeople ${numberOfPeople} \n = billShare: ${billShare}`);
        displayTipAndBill(tipShare, billShare);
    }
};

const displayError = () => {
    // Will rewrite, will try to make this a reusable function instead of this:
    // const totalBill = Number(billContainer.value);
    // const selectedTip = document.querySelector('.active-tip');
    // const numberOfPeople = Number(peopleCountContainer.value);

    // if (!isNumber(totalBill) && totalBill !== ""){
    //     billContainer.classList.add('invalid-input');
    // } else {
    //     billContainer.classList.remove('invalid-input');
    // }

    // if(!isNumber(selectedTip) && tipCustom.value !== ""){
    //     tipCustom.classList.add('invalid-input');
    // } else {
    //     tipCustom.classList.remove('invalid-input');
    // }

    // if(!isNumber(numberOfPeople) && numberOfPeople !== ""){
    //     peopleCountContainer.classList.add('invalid-input');
    // } else {
    //     peopleCountContainer.classList.remove('invalid-input');
    // }

    // return console.log("Invalid data types!");
};

const displayTipAndBill = (tip, bill) => {
        tipShare.innerHTML = `$${tip.toFixed(2)}`;
        totalShare.innerHTML = `$${bill.toFixed(2)}`;
};

[billContainer, peopleCountContainer].forEach(element => {
    element.addEventListener('input', () => {
        displayError();
        calculateShares();
    });
});

// Added an input event listener for the custom tip
tipCustom.addEventListener('input', () => {
    if (tipCustom.classList.contains('active-tip')){
        displayError();
        calculateShares();
    }
});
// Inputs
const billContainer = document.getElementById('bill-input');
const peopleCountContainer = document.getElementById('people-count-input');
// const customTip = document.getElementById('tip-custom');

// Tip Option buttons
const tipOptions = document.querySelectorAll('.tip-option');
// console.log(tipOptions);

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
        return;
    }

    e.target.classList.add('active-tip');
    calculateShares();
};

tipOptions.forEach(button => {
    button.addEventListener('click', tipHandleClick);
});

const calculateShares = () => {
    const totalBill = Number(billContainer.value);
    const selectedTip = document.querySelector('.active-tip');
    const numberOfPeople = Number(peopleCountContainer.value);

    if (totalBill && selectedTip && numberOfPeople){
        const tip = totalBill * selectedTip.dataset.value;
        const tipShare = tip / numberOfPeople;
        const billShare = (totalBill + tip)/ numberOfPeople;
        console.log(`totalBill: ${totalBill} * \nselectedTip: ${selectedTip.dataset.value} \n= tip: ${tip}`);
        console.log(`tip: ${tip} / \nno. of people" ${numberOfPeople} \n= tipShare: ${tipShare}`);
        console.log(`bill: ${totalBill}\n / numberofPeople ${numberOfPeople} \n = billShare: ${billShare}`);
        displayTipAndBill(tipShare, billShare);
    }
};

const displayTipAndBill = (tip, bill) => {
        tipShare.innerHTML = `$${tip.toFixed(2)}`;
        totalShare.innerHTML = `$${bill.toFixed(2)}`;
};

[billContainer, peopleCountContainer].forEach(element => {
    element.addEventListener('input', calculateShares);
});
//The buttons
const getALoanBtnElement = document.getElementById("getALoanBtn");
const bankBtnElement = document.getElementById("bankBtn");
const workBtnElement = document.getElementById("workBtn");

// const repayLoanBtnElement = document.getElementById("repayLoanBtn");
// const displaySetting = repayLoanBtnElement.style.display;

const buyNowBtnElement = document.getElementById("buyNowBtn");

//The variables
const bankBalanceElement = document.getElementById("bankBalance");
const outstandingLoanElement = document.getElementById("outstandingLoanValue");
const loanTitleElement = document.getElementById("loanTitle");
const balanceTitleElement = document.getElementById("balanceTitle");

const payBalanceElement = document.getElementById("payBalance");

const featuresElement = document.getElementById("featuresTitle");
const computerSpecsElement = document.getElementById("computerSpecs");
const laptopNameElement = document.getElementById("laptopName");
const computerDescriptionElement = document.getElementById("computerDescription");
const computerPriceElement = document.getElementById("computerPrice");
const computerImageElement = document.getElementById("computerImage");
//The select
const computersSelectElement = document.getElementById("computers");


//Set variables
let outstandingLoanValue = 0;
let increasePay = 100;
let increasePay2 = 90;
let computers = [];
let money = [];
let computerPrice = 0;


const increaseMoney = document.querySelector("#workBtn");
const transferMoney = document.querySelector("#bankBtn");
const repayLoan = document.querySelector("#repayLoanBtn");
const buyComputer = document.querySelector("#buyNowBtn");
const displayPayBalance = document.querySelector("#payBalance");
const loanTransfer = document.querySelector("#outstandingLoanValue");
const selectedComputerPrice = document.querySelector("#computerPrice");

const bankBalanceValue = document.querySelector("#bankBalance");

////////////////////////////////BANK
//The function for button 'Get a Loan', to get a loan
 const getLoan = () => {
    
    const prompt = Number(window.prompt('Enter an amount to loan: '));
    // alert (`💸--Loan done--💸`)
    document.getElementById("repayLoanBtn").style.display = "block";
        if ( prompt > bankBalanceValue * 2) {
            alert('Your loan cannot be more than double you bank balance.');
            loanTitleElement.innerText = `Total loan: ${outstandingLoanValue} SEK`;        
        }
        else {
            outstandingLoanValue = prompt;
            loanTitleElement.innerText = `Total loan: ${outstandingLoanValue} SEK`;
        }
 }
////////////////////////////////WORK
//bank button
// const transferMoney = () => {
//     if (loanTitleElement.innerText > 0)
//     {
//         const transferPayBalance = document.querySelector("#payBalance");
//         outstandingLoanElement.innerText = transferPayBalance.innerText = parseInt(transferPayBalance.innerText,10) + (loanTitleElement.innerText + 100);  
//     } else {
//         const transferPayBalance = document.querySelector("#payBalance");
//         bankBalanceElement.innerText = transferPayBalance.innerText = parseInt(transferPayBalance.innerText,10);
//         // const setToZero = document.querySelector("#payBalance");
//         // bankBalanceElement.innerText = setToZero.innerText = parseInt(setToZero.innerText,0) + 0;
//     }
// }

//The function for button 'Work' - to increase pay balance
increaseMoney.addEventListener("click", () => {
        payBalance = displayPayBalance.innerText =
        parseInt(displayPayBalance.innerText) + 100;
})
//The function for the button 'Bank'
transferMoney.addEventListener("click", () => {
    balanceTitleElement.innerText = `Balance: ${payBalance} SEK`;
    if(outstandingLoanValue > 0){
        payBalance = displayPayBalance.innerText =
    parseInt(displayPayBalance.innerText) + 90;
    loanTitleElement.innerText = `Total loan: ${outstandingLoanValue - payBalance} SEK`;

    } else if (outstandingLoanValue < 0){
        payBalance = displayPayBalance.innerText =
        parseInt(displayPayBalance.innerText) + 100;
    }
    else {
    }
})
//The function for the button 'Repay Loan'
repayLoan.addEventListener("click", () => {
    outstandingLoanValue = loanTitleElement.innerText = `Total loan: ${outstandingLoanValue-outstandingLoanValue}`;
})

//The function for the button 'Buy now'
buyComputer.addEventListener("click",() => {
    if(bankBalance <= computerPrice) {
        alert ("You can buy the laptop 😄");
    } else {
        alert("You cannot afford the laptop 😭");
    }
})





// increaseMoney.addEventListener("click", () => {
//     if(outstandingLoanValue > 0){
//         payBalance = displayPayBalance.innerText =
//     parseInt(displayPayBalance.innerText) + 90;
//     loanTitleElement.innerText = `Total loan: ${outstandingLoanValue - payBalance} SEK`;
//     } else {
//         payBalance = displayPayBalance.innerText =
//         parseInt(displayPayBalance.innerText) + 100;
//     }
// })
// // increaseBtn.addEventListener("click", () => {
// //     displayPayBalance.innerText =
// //     parseInt(displayPayBalance.innerText,10) + 100;
// // });

// //The function for button 'Bank', to transfer money
// transferMoney.addEventListener("click", () => {

//     // if(payBalance > 0) {
//     //     bankBalance = bankBalanceValue.innerText =
//     // parseInt(bankBalanceValue.innerText);
//     // } else {
//     //     alert ('Press Work to get Pay');
//     // }
// })


//The function for button 'Repay loan', to repay loaned money
// repayLoan.addEventListener("click", () => {

// })


///////////////////////////////////>///////////////////////////////////LAPTOP
fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then(response => response.json())
    .then(data => computers = data)
    .then(computers => addComputersToMenu(computers));

const addComputersToMenu = (computers) => {

    computers.forEach(x => addComputerToMenu(x));
    computerPriceElement.innerText = computers[0].price;
    computerSpecsElement.innerText = computers[0].specs;
    laptopNameElement.innerText = computers[0].title;
    computerDescriptionElement.innerText = computers[0].description;
    computerImageElement.src = "https://noroff-komputer-store-api.herokuapp.com/" + computers[0].image;

}

const addComputerToMenu = (computer) => {
    const computerElement = document.createElement("option");
    computerElement.value = computer.id;
    computerElement.appendChild(document.createTextNode(computer.title));
    computersSelectElement.appendChild(computerElement);
}

const handleComputerMenuChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    computerPriceElement.innerText = selectedComputer.price;
    computerSpecsElement.innerText = selectedComputer.specs;
    laptopNameElement.innerText = selectedComputer.title;
    computerDescriptionElement.innerText = selectedComputer.description;
    computerImageElement.src = `https://noroff-komputer-store-api.herokuapp.com/${selectedComputer.image}`;
}


getALoanBtnElement.addEventListener("click", getLoan);
computersSelectElement.addEventListener("change", handleComputerMenuChange);



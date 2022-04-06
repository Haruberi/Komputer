//buttons
const getALoanBtnElement = document.getElementById('getALoanBtn');
const bankBtnElement = document.getElementById('bankBtn');
const workBtnElement = document.getElementById('workBtn');
const buyNowBtnElement = document.getElementById('buyNowBtn');
const repayBtnElement = document.getElementById('repayLoanBtn');

//bank
const balanceElement = document.getElementById('bankBalance');
const balanceTitleElement = document.getElementById('balanceTitle');
const outstandingLoanElement = document.getElementById('outstandingLoanValue');
const loanTitleElement = document.getElementById('loanTitle');

//work
const payBalanceElement = document.getElementById('payBalance');
const payBalanceTitleElement = document.getElementById('payBalanceTitle');

//laptop selection
const computersSelectElement = document.getElementById('computers');
const featuresElement = document.getElementById('featuresTitle');
const computerSpecsElement = document.getElementById('computerSpecs');

//laptop information
const computerImageElement = document.getElementById('computerImage');
const laptopNameElement = document.getElementById('laptopName');
const computerDescriptionElement = document.getElementById('computerDescription');
const computerPriceElement = document.getElementById('computerPrice');
const cannotAffordElement = document.getElementById('cannotAfford');

// let bankBalance = 0;
let outstandingLoanValue = 0;
let payBalance = 0;
const increasingMoney = 100;
// let enterAmount = 0;
// let increasePay = 100;
// let increasePay2 = 90;
let computers = [];
let money = [];
let computerPrice = [];

//getLoan - GetALoanButton
const getLoan = () => {

    if (parseInt(outstandingLoanElement.value > 0)) {
        alert('You need to work in order to repay your current loan.');
    }
    const prompt = Number(window.prompt('Enter an amount to loan: '));
    document.getElementById('repayLoanBtn').style.display = 'block';
        if ( prompt > parseInt(balanceElement.value * 2)) {
            alert('Your loan cannot be more than double you bank balance.\n Try again.');    
        }
        else {
            outstandingLoanValue = prompt;
            loanTitleElement.innerText = 'Total loan: ' + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(outstandingLoanValue);
        }

}

//increaseMoney - WorkButton - prints out 100
const increaseMoney = () => {

    const increasedMoney = increasingMoney;
    
    payBalanceElement.innerText = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(increasedMoney);
    // const increasedMoney = parseInt(payBalanceElement.value);
    // payBalanceElement.innerText = 100 + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(increasedMoney);

    // const increasedMoney = parseInt(payBalanceElement.value) = 100;
    // payBalanceTitleElement.innerText = 'Pay: ' + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(increasedMoney);



}



//increaseMoney
// const increaseMoney = () => {
//         
//     }
    
    //  payBalanceElement.innerText = (parseInt(payBalance) + 100 + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance));


    // payBalanceElement.innerText = 100 + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance);
    // payBalanceElement.innerText = 10 + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance);
    // payBalance = payBalanceElement.innerText = parseInt(payBalanceElement.innerText) + 100;

//transferMoney - BankButton
const transferMoney = () => {

   parseInt(balanceElement.value) = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance);
    
    if(outstandingLoanValue > 0){
        payBalance = payBalanceElement.innerText =
    parseInt(payBalanceElement.innerText) + 90;
    loanTitleElement.innerText = 'Total loan: ' + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(outstandingLoanValue - payBalance);
    payBalanceElement.innerText == new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance-payBalance);;
    }
    else {
        //parseInt - know for a fact that bankBalance will be an integer
        const bankBalance = parseInt(payBalanceElement.value) = 'Balance: ' + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance);;

    }

}

//repayLoan - RepayLoanButton - works
const repayLoan = () => {
    loanTitleElement.innerText = 'Total loan: ' + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(outstandingLoanValue-outstandingLoanValue);
}

//buyComputer - BuyNowButton - 
const buyComputer = () => {
    if (parseInt(balanceElement.value) >= parseInt(computerPriceElement.value)) {
        alert('You are the owner of a laptop!');

        parseInt(balanceElement.value) = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(parseInt(computerPriceElement.value) - parseInt(bankBalance.value));
    } else {
        alert('You cannot afford the laptop.');
    }
}

//The function for the button 'Repay Loan'
// repayLoan.addEventListener("click", () => {
//     outstandingLoanValue = loanTitleElement.innerText = `Total loan: ${outstandingLoanValue-outstandingLoanValue}`;
// })

//The function for the button 'Buy now'
// buyComputer.addEventListener("click",() => {

//     if(bankBalance >= computerPrice) {
//         alert ("You are the owner of a laptop!");

//         balanceElement.value = `${computerPrice - bankBalance} SEK`;
//     } else {
//         alert("You cannot afford the laptop");
//     }
// })




//  const getLoan = () => {
//      if (outstandingLoanValue > 0) {
//          alert(`Your total loan is ${outstandingLoanValue}. You need to work to repay your loan before loan any new money.`);
//          outstandingLoanElement.innerText = `Total loan: ` + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(enterAmount);
//          document.getElementById('repayLoanBtn').styale.display = 'block';
//      } else {
//          enterAmount = Number(window.prompt('Enter an amount: ', ''));

//          if(enterAmount > bankBalance * 2) {
//              enterAmount = Number(window.prompt('Your loan cannot exceed double your balance. \n Enter an amount: ', ''));
//              outstandingLoanElement.innerText = `Total loan: ` + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(enterAmount);
//              document.getElementById('repayLoanBtn').style.display = 'block';
//          } else {
//              alert(`Your total loan is now: ${enterAmount}`);
//              outstandingLoanElement.innerText = `Total loan: ` + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(enterAmount);
//              document.getElementById('repayLoanBtn').style.display = 'block';
//          }
//      }



    // if (outstandingLoanValue > 0) {
    //     alert(`Your total loan is ${outstandingLoanValue}. \n You need to work in order to repay your loan.`);
    // } else if(outstandingLoanValue !== 0) {
    //     const prompt = Number(window.prompt('Enter an amount to loan: '));
    //     document.getElementById('repayLoanBtn').style.display = 'block';
    // } else if (prompt > balanceElement.value * 2) {
    //         alert('Your loan cannot be more than double you bank balance.\n Try again.');    
    //     }
    //     else {
    //         outstandingLoanValue = prompt;
    //         loanTitleElement.innerText = 'Total loan: ' + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(outstandingLoanValue);
    //     }
 

//increaseMoney
// const increaseMoney = () => {
//         payBalanceElement.innerText = (parseInt(payBalance) + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(100 + payBalance));
//     }
    
    //  payBalanceElement.innerText = (parseInt(payBalance) + 100 + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance));


    // payBalanceElement.innerText = 100 + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance);
    // payBalanceElement.innerText = 10 + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance);
    // payBalance = payBalanceElement.innerText = parseInt(payBalanceElement.innerText) + 100;





//The function for button 'Work' - to increase pay balance
// increaseMoney.addEventListener("click", () => {
//         payBalance = displayPayBalance.innerText =
//         parseInt(displayPayBalance.innerText) + 100;
// })
//The function for the button 'Bank'
// transferMoney.addEventListener("click", () => {
//     balanceElement.value = `${payBalance} SEK`;
    
//     if(outstandingLoanValue > 0){
//         payBalance = displayPayBalance.innerText =
//     parseInt(displayPayBalance.innerText) + 90;
//     loanTitleElement.innerText = `Total loan: ${outstandingLoanValue - payBalance} SEK`;
//     displayPayBalance.innerText == `${payBalance-payBalance}`;
//     }
//     else {
//         bankBalance = displayPayBalance.innerText =
//         parseInt(displayPayBalance.innerText) = `Balance: ${payBalance} SEK`;
//     }
// })



fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then(response => response.json())
    .then(data => computers = data)
    .then(computers => addComputersToMenu(computers));

const addComputersToMenu = (computers) => {

    computers.forEach(x => addComputerToMenu(x));
    computerPriceElement.innerText = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(computers[0].price);
    // computerPriceElement.innerText = computers[0].price + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(computerPrice);
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
    computerPriceElement.innerText = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(selectedComputer.price);
    // computerPriceElement.innerText = selectedComputer.price + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(computerPrice);
    computerSpecsElement.innerText = selectedComputer.specs;
    laptopNameElement.innerText = selectedComputer.title;
    computerDescriptionElement.innerText = selectedComputer.description;
    computerImageElement.src = `https://noroff-komputer-store-api.herokuapp.com/${selectedComputer.image}`;
}


getALoanBtnElement.addEventListener("click", getLoan);
workBtnElement.addEventListener('click', increaseMoney);
bankBtnElement.addEventListener('click', transferMoney);
repayBtnElement.addEventListener('click', repayLoan);
buyNowBtnElement.addEventListener('click', buyComputer);
computersSelectElement.addEventListener("change", handleComputerMenuChange);

























// earlier code
// //buttons
// const getALoanBtnElement = document.getElementById('getALoanBtn');
// const bankBtnElement = document.getElementById('bankBtn');
// const workBtnElement = document.getElementById('workBtn');
// const buyNowBtnElement = document.getElementById('buyNowBtn');
// const repayBtnElement = document.getElementById('repayLoanBtn');

// //bank
// const balanceElement = document.getElementById('bankBalance');
// const loanTitleElement = document.getElementById('loanTitle');
// const outstandingLoanElement = document.getElementById('outstandingLoanValue');

// //work
// const payBalanceElement = document.getElementById('payBalance');

// //laptop selection
// const computersSelectElement = document.getElementById('computers');
// const featuresElement = document.getElementById('featuresTitle');
// const computerSpecsElement = document.getElementById('computerSpecs');

// //laptop information
// const computerImageElement = document.getElementById('computerImage');
// const laptopNameElement = document.getElementById('laptopName');
// const computerDescriptionElement = document.getElementById('computerDescription');
// const computerPriceElement = document.getElementById('computerPrice');
// const cannotAffordElement = document.getElementById('cannotAfford');

// let outstandingLoanValue = 0;
// let increasePay = 100;
// let increasePay2 = 90;
// let computers = [];
// let money = [];
// let computerPrice = 0;

// const increaseMoney = document.querySelector("#workBtn");
// const transferMoney = document.querySelector("#bankBtn");
// const repayLoan = document.querySelector("#repayLoanBtn");
// const buyComputer = document.querySelector("#buyNowBtn");
// const displayPayBalance = document.querySelector("#payBalance");
// const loanTransfer = document.querySelector("#outstandingLoanValue");
// const selectedComputerPrice = document.querySelector("#computerPrice");

// //getLoan
//  const getLoan = () => {
    
//     const prompt = Number(window.prompt('Enter an amount to loan: '));
//     document.getElementById('repayLoanBtn').style.display = 'block';
//         if ( prompt > balanceElement.value * 2) {
//             alert('Your loan cannot be more than double you bank balance.\n Try again.');    
//         }
//         else {
//             outstandingLoanValue = prompt;
//             loanTitleElement.innerText = 'Total loan: ' + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(outstandingLoanValue);
//         }
//  }

// //The function for button 'Work' - to increase pay balance
// increaseMoney.addEventListener("click", () => {
//         payBalance = displayPayBalance.innerText =
//         parseInt(displayPayBalance.innerText) + 100;
// })
// //The function for the button 'Bank'
// transferMoney.addEventListener("click", () => {
//     balanceElement.value = `${payBalance} SEK`;
    
//     if(outstandingLoanValue > 0){
//         payBalance = displayPayBalance.innerText =
//     parseInt(displayPayBalance.innerText) + 90;
//     loanTitleElement.innerText = `Total loan: ${outstandingLoanValue - payBalance} SEK`;
//     displayPayBalance.innerText == `${payBalance-payBalance}`;
//     }
//     else {
//         bankBalance = displayPayBalance.innerText =
//         parseInt(displayPayBalance.innerText) = `Balance: ${payBalance} SEK`;
//     }
// })

// //The function for the button 'Repay Loan'
// repayLoan.addEventListener("click", () => {
//     outstandingLoanValue = loanTitleElement.innerText = `Total loan: ${outstandingLoanValue-outstandingLoanValue}`;
// })

// //The function for the button 'Buy now'
// buyComputer.addEventListener("click",() => {

//     if(bankBalance >= computerPrice) {
//         alert ("You are the owner of a laptop!");

//         balanceElement.value = `${computerPrice - bankBalance} SEK`;
//     } else {
//         alert("You cannot afford the laptop");
//     }
// })

// fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
//     .then(response => response.json())
//     .then(data => computers = data)
//     .then(computers => addComputersToMenu(computers));

// const addComputersToMenu = (computers) => {

//     computers.forEach(x => addComputerToMenu(x));
//     computerPriceElement.innerText = computers[0].price;
//     computerSpecsElement.innerText = computers[0].specs;
//     laptopNameElement.innerText = computers[0].title;
//     computerDescriptionElement.innerText = computers[0].description;
//     computerImageElement.src = "https://noroff-komputer-store-api.herokuapp.com/" + computers[0].image;

// }

// const addComputerToMenu = (computer) => {
//     const computerElement = document.createElement("option");
//     computerElement.value = computer.id;
//     computerElement.appendChild(document.createTextNode(computer.title));
//     computersSelectElement.appendChild(computerElement);
// }

// const handleComputerMenuChange = e => {
//     const selectedComputer = computers[e.target.selectedIndex];
//     computerPriceElement.innerText = selectedComputer.price;
//     computerSpecsElement.innerText = selectedComputer.specs;
//     laptopNameElement.innerText = selectedComputer.title;
//     computerDescriptionElement.innerText = selectedComputer.description;
//     computerImageElement.src = `https://noroff-komputer-store-api.herokuapp.com/${selectedComputer.image}`;
// }


// getALoanBtnElement.addEventListener("click", getLoan);
// workBtnElement.addEventListener('click', increaseMoney);
// bankBtnElement.addEventListener('click', transferMoney);
// repayBtnElement.addEventListener('click', repayLoan);
// buyNowBtnElement.addEventListener('click', buyComputer);
// computersSelectElement.addEventListener("change", handleComputerMenuChange);



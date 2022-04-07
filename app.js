const getALoanBtnElement = document.getElementById('getALoanBtn');
const bankBtnElement = document.getElementById('bankBtn');
const workBtnElement = document.getElementById('workBtn');
const buyNowBtnElement = document.getElementById('buyNowBtn');
const repayBtnElement = document.getElementById('repayLoanBtn');

const balanceElement = document.getElementById('bankBalance');
const loanTitleElement = document.getElementById('loanTitle');
const payBalanceElement = document.getElementById('payBalance');

const computersSelectElement = document.getElementById('computers');
const computerSpecsElement = document.getElementById('computerSpecs');
const computerImageElement = document.getElementById('computerImage');
const computerNameElement = document.getElementById('computerName');
const computerDescriptionElement = document.getElementById('computerDescription');
const computerPriceElement = document.getElementById('computerPrice');

let outstandingLoanValue = 0;
let bankValue = 0;
let payBalance = 0;
let selectedComputer;
let startValue = 0;
let computers = [];

payBalanceElement.innerHTML = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(startValue);
balanceElement.innerHTML = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(startValue);

//getLoan - GetALoanButton
const getLoan = () => {

    if (outstandingLoanValue > 0) {
        alert('You need to work in order to repay your current loan.');
    } else if (bankValue == 0) {
        alert('You cannot take a loan when you have 0,00 kr in balance.');
    } else {
    const prompt = Number(window.prompt('Enter an amount to loan: '));
    
        if ( prompt >= bankValue * 2) {
            alert('Your loan cannot be more than double you bank balance.\n Try again.');    
        }
        else {
            outstandingLoanValue = prompt;
            loanTitleElement.innerHTML = 'Total loan: ' + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(outstandingLoanValue);
            document.getElementById('repayLoanBtn').style.display = 'block';
        }
    }

}

//increaseMoney - WorkButton - work
const increaseMoney = () => {
    console.log("work");

    payBalance += 100;
    payBalanceElement.innerHTML = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance);
}

//transferMoney - BankButton
const transferMoney = () => {
    
    if(outstandingLoanValue > 0){
    
        let tenPercentPay = payBalance * 0.10;
        if (tenPercentPay > outstandingLoanValue) {
            tenPercentPay = outstandingLoanValue;
        }
        outstandingLoanValue -= tenPercentPay;
        loanTitleElement.innerHTML = 'Total loan: ' + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(outstandingLoanValue);

        bankValue += (payBalance - tenPercentPay);
        balanceElement.innerHTML = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(bankValue);
        payBalance = 0;
        payBalanceElement.innerHTML = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance);

        if (outstandingLoanValue == 0) {
            document.getElementById('repayLoanBtn').style.display = 'none';
        }
    }
    else {
        balanceElement.innerHTML = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(bankValue + payBalance);


        bankValue += payBalance;
        payBalanceElement.innerHTML = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance-payBalance);
        payBalance = 0;

    }

}

//repay loan
const repayLoan = () => {
    if (payBalance == 0) {
        alert('Your pay balance is 0,00 kr. You need to earn money to repay your loan.')
    } else if (payBalance >= outstandingLoanValue) {
        loanTitleElement.innerText = 'Total loan: ' + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(outstandingLoanValue-outstandingLoanValue);
        bankValue += payBalance-outstandingLoanValue;

        balanceElement.innerHTML = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(bankValue);

        outstandingLoanValue = 0;
        payBalance = 0;
        payBalanceElement.innerHTML = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance);
        document.getElementById('repayLoanBtn').style.display = 'none';

    } else if(payBalance < outstandingLoanValue) {
        outstandingLoanValue -= payBalance;
        loanTitleElement.innerText = 'Total loan: ' + new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(outstandingLoanValue);
        payBalance = 0;
        payBalanceElement.innerHTML = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(payBalance);
    }
}

//buyComputer - BuyNowButton - 
const buyComputer = () => {
    if (bankValue >= selectedComputer.price) {
        alert('You are the owner of a laptop!');
        bankValue -= selectedComputer.price;
        balanceElement.innerHTML = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(bankValue);

    } else {
        alert('You cannot afford the laptop.');
    }
}

fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then(response => response.json())
    .then(data => computers = data)
    .then(computers => addComputersToMenu(computers));

const addComputersToMenu = (computers) => {
    selectedComputer = computers[0];
    computers.forEach(x => addComputerToMenu(x));
    computerPriceElement.innerText = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(computers[0].price);
    computerSpecsElement.innerText = computers[0].specs;
    computerNameElement.innerText = computers[0].title;
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
    selectedComputer = computers[e.target.selectedIndex];
    console.log(selectedComputer.price);
    computerPriceElement.innerText = new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(selectedComputer.price);
    console.log(computerPriceElement.innerHTML);
    computerSpecsElement.innerText = selectedComputer.specs;
    computerNameElement.innerText = selectedComputer.title;
    computerDescriptionElement.innerText = selectedComputer.description;
    computerImageElement.src = `https://noroff-komputer-store-api.herokuapp.com/${selectedComputer.image}`;
}

getALoanBtnElement.addEventListener("click", getLoan);
workBtnElement.addEventListener('click', increaseMoney);
bankBtnElement.addEventListener('click', transferMoney);
repayBtnElement.addEventListener('click', repayLoan);
buyNowBtnElement.addEventListener('click', buyComputer);
computersSelectElement.addEventListener("change", handleComputerMenuChange);
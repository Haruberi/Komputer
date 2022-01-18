//The buttons from komputerStore.html
const getALoanBtnElement = document.getElementById("getALoanBtn");
const bankBtnElement = document.getElementById("bankBtn");
const workBtnElement = document.getElementById("workBtn");
const repayLoanBtnElement = document.getElementById("repayLoanBtn");
const buyNowBtnElement = document.getElementById("buyNowBtn");

//Get variables
const bankBalanceElement = document.getElementById("bankBalance");
const outstandingLoanElement = document.getElementById("outstandingLoanValue");

const payBalanceElement = document.getElementById("payBalance");

const featuresElement = document.getElementById("featuresTitle");
const computerSpecsElement = document.getElementById("computerSpecs");
const laptopNameElement = document.getElementById("laptopName");
const computerDescriptionElement = document.getElementById("computerDescription");
const computerPriceElement = document.getElementById("computerPrice");
//Select
const computersSelectElement = document.getElementById("computers");


//Set variables
let bankBalance = 200;
let outstandingLoan = 0;
let enterAmount = 0;
let payBalance = 0;
let increasePay = 100;
let computers = [];
let computerPrice = 0;


////////////////////////////////BANK
const getLoan = () => {

}

////////////////////////////////WORK
const transferMoney = () => {

}

const increasePayBalance = () => {

}

const repayLoan = () => {

}


////////////////////////////////LAPTOP
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
}

computersSelectElement.addEventListener("change", handleComputerMenuChange);
getALoanBtnElement.addEventListener("click", getLoan);
bankBtnElement.addEventListener("click", transferMoney);
workBtnElement.addEventListener("click", increasePayBalance);
repayLoanBtnElement.addEventListener("click", repayLoan);
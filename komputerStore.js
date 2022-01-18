//The buttons from komputerStore.html
const getALoanBtnElement = document.getElementById("getALoanBtn");
const bankBtnElement = document.getElementById("bankBtn");
const workBtnElement = document.getElementById("workBtn");
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
////////////////////////////////WORK


////////////////////////////////LAPTOP
fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    
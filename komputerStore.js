//The buttons from komputerStore.html
const getALoanBtnElement = document.getElementById("getALoanBtn");
const getBankBtnElement = document.getElementById("bankBtn");
const getWorkBtnElement = document.getElementById("workBtn");
const getBuyNowBtnElement = document.getElementById("buyNowBtn");

//Get variables
const getBankBalanceElement = document.getElementById("bankBalance");
const getOutstandingLoanElement = document.getElementById("outstandingLoanValue");
const getPayBalanceElement = document.getElementById("payBalance");
const getFeaturesElement = document.getElementById("featuresTitle");
const getComputerSpecsElement = document.getElementById("computerSpecs");
const getLaptopNameElement = document.getElementById("laptopName");
const getComputerDescriptionElement = document.getElementById("computerDescription");
const getComputerPriceElement = document.getElementById("computerPrice");
//Select
const getComputersSelectElement = document.getElementById("computers");


//Set variables
let bankBalance = 200;
let outstandingLoan = 0;
let enterAmount = 0;
let payBalance = 0;
let increasePay = 100;
let computers = [];


////////////////////////////////BANK
////////////////////////////////WORK


////////////////////////////////LAPTOP
fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then(response => response.json())
    .then(data => computers = data)
    .then(computers => addComputersToMenu(computers));

    const addComputersToMenu = (computers) => {
        computers.forEach(x => addComputersToMenu(x));
        getComputerSpecs.innerText = computers[0].specs;
    }

    const addComputerToMenu = (computer) => {
        const getComputerElement = document.createElement("option");
        getComputerElement.value = computer.id;
        getComputerElement.appendChild(document.createTextNode(computer.title));
        getComputersSelectElement.appendChild(computerElement);
    }

    const handleComputerMenuChange = e => {
        const getSelectedComputer = computers[e.target.selectedIndex];
        getComputerSpecs.innerText = getSelectedComputer.specs;
    }
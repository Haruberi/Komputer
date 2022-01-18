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
const computerImageElement = document.getElementById("computerImage");
//Select
const computersSelectElement = document.getElementById("computers");


//Set variables
let bankBalance = 200;
let payBalance = 0;
let increasePay = 100;
let computers = [];
let computerPrice = 0;
let totalLoan = 0;


////////////////////////////////BANK
 const getLoan = () => {
    //const bankBalance = parseInt(bankBalanceElement.value);
    //const outstandingLoan = parseInt(outstandingLoanElement.value);

    /*
    if (totalLoan == 0) {
        totalLoan = Number(window.prompt("Enter an amount: "));
        alert("Loan accomplished!!💸");
        outstandingLoanElement.innerText = `Your loan is: ${totalLoan}`;
    } else if (totalLoan <= bankBalance * 2) {
        alert ("--Your loan cannot be more than double your balance--\n");
    }
    else {
        alert (`Your total loan is ${totalLoan}\n\nPress Work \nto\nRepay loan`);
    }
    */
    const prompt = Number(window.prompt('Enter an amount to loan: '));
    alert (`Loan done!! 💸💸`)

    if (prompt > bankBalance * 2){
        alert('Your loan cannot be more than double you bank balance.');
    // } else if(prompt > 0){
    //     alert(`You've already taken a loan`);
    } else {
        bankBalance = bankBalance + prompt;
        bankBalanceElement.innerText =  `Total loan: ${bankBalance} SEK`;
        //bankBalanceElement.innerText = bankBalance + ' kr';
    }
}

////////////////////////////////WORK
const transferMoney = () => {
    
}

const increaseBtn = document.querySelector("#workBtn");
const displayPayBalance = document.querySelector("#payBalance");
// const increasePayBalance = () => {

// }

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

computersSelectElement.addEventListener("change", handleComputerMenuChange);
getALoanBtnElement.addEventListener("click", getLoan);
bankBtnElement.addEventListener("click", transferMoney);
increaseBtn.addEventListener("click", () => {
    displayPayBalance.innerText =
    parseInt(displayPayBalance.innerText,10) + 100;
})
// workBtnElement.addEventListener("click", increasePayBalance);
repayLoanBtnElement.addEventListener("click", repayLoan);

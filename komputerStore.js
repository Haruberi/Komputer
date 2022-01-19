//The buttons from komputerStore.html
const getALoanBtnElement = document.getElementById("getALoanBtn");
const bankBtnElement = document.getElementById("bankBtn");
const workBtnElement = document.getElementById("workBtn");

const repayLoanBtnElement = document.getElementById("repayLoanBtn").style.display = 'none';
// const displaySetting = repayLoanBtnElement.style.display;

const buyNowBtnElement = document.getElementById("buyNowBtn");

//Get variables
const bankBalanceElement = document.getElementById("bankBalance");
const outstandingLoanElement = document.getElementById("outstandingLoanValue");
const loanTitleElement = document.getElementById("loanTitle");

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
let outstandingLoanValue = 0;
let increasePay = 100;
let computers = [];
let money = [];
let computerPrice = 0;


// document.getElementById("repayLoanBtn").disabled = false;
////////////////////////////////BANK
 const getLoan = () => {
    
    const prompt = Number(window.prompt('Enter an amount to loan: '));
    // alert (`💸--Loan done--💸`)
        if ( prompt > bankBalance *2) {
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
const transferMoney = () => {
    if(payBalanceElement === 0) {
        alert(`You have no money in pay at the moment`);
    } else {
        const transferPayBalance = document.querySelector("#payBalance");
        transferPayBalance.innerText = parseInt(transferPayBalance.innerText,10) -100;
    }
}

//work button
const increaseBtn = document.querySelector("#workBtn");
const displayPayBalance = document.querySelector("#payBalance");

//show repay loan button




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
});


repayLoanBtnElement.addEventListener("click", repayLoan);

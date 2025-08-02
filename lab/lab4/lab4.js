const readline = require("readline-sync");
let accountNumber = String(
  readline.question("Please enter your account number:")
);
let widrawalMoney = Number(
  readline.question("Please enter the amount of money you want to withdraw:")
);
const bankAccountNumber1 = {
  accountNumber: "Long1",
  routingNumber: "ABC",
  balance: 1000000,
};

const bankAccountNumber2 = JSON.parse(JSON.stringify(bankAccountNumber1));
bankAccountNumber2.accountNumber = "Long2";

const bankAccounts = [bankAccountNumber1, bankAccountNumber2];
console.log(bankAccounts);

function findAccountNumber(accountNumber) {
  for (let i = 0; i < bankAccounts.length; i++) {
    if (bankAccounts[i].accountNumber === accountNumber) {
      console.log(
        `Your bank account number is: ${bankAccounts[i].accountNumber}`
      );
      console.log(`Your balance is: ${bankAccounts[i].balance}`);
      return;
    }
  }
  console.log("Cannot find your bank account");
}

function withdrawMoney(accountNumber, amountOfMoney) {
  for (let i = 0; i < bankAccounts.length; i++) {
    if (bankAccounts[i].accountNumber === accountNumber) {
      if (amountOfMoney <= bankAccounts[i].balance) {
        bankAccounts[i].balance = bankAccounts[i].balance - amountOfMoney;
        console.log(`You withdraw ${amountOfMoney}`);
        console.log(`Your balance is: ${bankAccounts[i].balance}`);
      } else {
        console.log("You cannot withdraw that much");
      }
      return;
    }
  }
  console.log("Cannot find your bank account");
}

findAccountNumber(accountNumber);
withdrawMoney(accountNumber, widrawalMoney);

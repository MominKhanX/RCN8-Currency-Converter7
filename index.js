#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Print welcome message
console.log(chalk.bold.rgb(73, 158, 255)(`${chalk.bold.hex('#499EFF')(`\n  \t\t <<<======================================>>>`)}`));
console.log(chalk.rgb(0, 255, 51).bold("\n \t<================ Welcome to My Currency-Converter Application\u{1F600} ================>\n"));
console.log(chalk.bold.rgb(73, 158, 255)(`${chalk.bold.hex('#499EFF')(`\t\t <<<======================================>>>\n`)}`));
const currency = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.61,
    PKR: 277.30,
    BRL: 5.12,
    SAR: 3.75,
    IRR: 42075
};
let continueConversion = true;
while (continueConversion) {
    let userAnswer = await inquirer.prompt([
        {
            name: "from",
            message: chalk.rgb(0, 128, 255).bold("Enter From Currency"),
            type: "list",
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'BRL', 'SAR', 'IRR']
        },
        {
            name: "to",
            message: chalk.rgb(0, 128, 255).bold("Enter to Currency"),
            type: "list",
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'BRL', 'SAR', 'IRR']
        },
        {
            name: "amount",
            message: chalk.rgb(0, 255, 205).bold("Enter your Amount"),
            type: "number"
        },
        {
            name: "anotherConversion",
            message: chalk.rgb(255, 255, 0).bold("Do you want to perform another Action?"),
            type: "confirm",
            default: false
        }
    ]);
    let userFromCurrency = userAnswer.from;
    let userToCurrency = userAnswer.to;
    let fromAmount = currency[userFromCurrency]; // Exchange Rate
    let toAmount = currency[userToCurrency]; // Exchange Rate
    let amount = userAnswer.amount;
    let baseAmount = amount / fromAmount; // USD BASE CURRENCY // 4
    let convertedAmount = baseAmount * toAmount;
    console.log(convertedAmount);
    continueConversion = userAnswer.anotherConversion;
}
console.log(chalk.bold.rgb(255, 0, 0)("\nThank you for using the Currency Converter Application!\n"));

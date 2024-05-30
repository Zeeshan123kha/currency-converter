"use strict";
//    inquirer install
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
//  currency conversion object
let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.26,
        "GBP": 1,
        "PKR": 350.76,
    },
    "USD": {
        "USD": 1,
        "GBP": 0.79,
        "PKR": 277.54,
    },
};
//     prompt user for input 
const answer = await inquirer_1.default.prompt([{
        type: "list",
        name: "from",
        message: "Please select your currency?",
        choices: ["PKR", "USD", "GBP"],
    },
    {
        type: "list",
        name: "to",
        message: "Please select your conversion rate?",
        choices: ["PKR", "USD", "GBP"],
    },
    {
        type: "number",
        name: "amount",
        message: "How much currency do you want to convert?",
    }]);
//   Destructuring User Input
const { from, to, amount } = answer;
// perform currency conversion
if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("INVALID CONVERSION");
}
;

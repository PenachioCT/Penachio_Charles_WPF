/*
Charles Penachio Jr.
WPF Section 01
Expressions - Personal
08/13/2014
 */

//We will be helping someone calculate their monthly finances.

var userName = prompt("Please enter your name: ");
console.log("The users name is reported as: " + userName);
alert("Hello, " + userName + ".  \nLet's calculate your monthly income and expenses.");
var userIncome   = prompt("Please enter your monthly income (in dollars):");
var userExpenses = prompt("Please enter your monthly expenses (in dollars):");
var userPercent  = prompt("Please enter a percentage of your monthly income you would like to put into savings:");
incomeFloat = parseFloat(userIncome).toFixed(2);
expenseFloat = parseFloat(userExpenses).toFixed(2);
percentFloat = parseFloat(userPercent).toFixed(2);
console.log("The users income is reported as: $" + incomeFloat);
console.log("The users expenses is reported as: $" + expenseFloat);
console.log("The users percentage of savings is reported as: " + percentFloat + "%");
var userSavings   = (percentFloat / 100) * incomeFloat;
var userIncomeAdj = incomeFloat - userSavings;
var userFinance   = (expenseFloat - userIncomeAdj) * -1;   


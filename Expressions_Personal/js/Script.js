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
savingsFloat = userSavings.toFixed(2);
incomeadjFloat = userIncomeAdj.toFixed(2);
financeFloat = userFinance.toFixed(2);
console.log("The user will save $" + savingsFloat + " per month.");
console.log("The users adjust monthly income is: $" + incomeadjFloat);
console.log("The user will have a balance of:  $" + financeFloat + " after paying bills.");
alert("Based on your desired savings percentage of " + percentFloat + "%, \nyou will be able to save $" + savingsFloat + " per month.");
alert("You're adjusted monthly income is now $" + incomeadjFloat + ".");
alert("After paying your monthly expenses you have  $"  + financeFloat + " available to spend.");

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
incomeFloat = parseFloat(userIncome);
expenseFloat = parseFloat(userExpenses);
percentFloat = parseFloat(userPercent);



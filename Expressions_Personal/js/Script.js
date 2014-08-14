/*
 Charles Penachio Jr.
 WPF Section 01
 Expressions - Personal
 08/13/2014
 */

//We will be helping someone calculate their monthly finances.
var userName = prompt("Please enter your name: ");  //Ask user for their name and saves the input
console.log("The users name is reported as: " + userName);  //Displays the input saved in userName to the console for verification
alert("Hello, " + userName + ".  \nLet's calculate your monthly income and expenses.");  //Prompt used to greet user once their name is known

var userIncome   = prompt("Please enter your monthly income (in dollars):");    //asks user for their monthly income and saves the input
var userExpenses = prompt("Please enter your monthly expenses (in dollars):");  //asks user for their monthly expense and save the input
var userPercent  = prompt("Please enter a percentage of your monthly income you would like to put into savings:");  //asks user for a percentage they would like to save of their monthly income

incomeFloat = parseFloat(userIncome).toFixed(2);      //converts string into decimal number to hundredth place setting
expenseFloat = parseFloat(userExpenses).toFixed(2);   //converts string into decimal number to hundredth place setting
percentFloat = parseFloat(userPercent).toFixed(2);    //converts string into decimal number to hundredth place setting
console.log("The users income is reported as: $" + incomeFloat);      //displays the input saved in incomeFloat to the console for verification
console.log("The users expenses is reported as: $" + expenseFloat);   //display the input saved in expenseFloat to the console for verification
console.log("The users percentage of savings is reported as: " + percentFloat + "%");  //display the input  saved in percentFloat to the console for verification
var userSavings   = (percentFloat / 100) * incomeFloat;    //turns percent given into a decimal and applied to income to calculate amount of monthly savings
var userIncomeAdj = incomeFloat - userSavings;             //adjusts available monthly income balance by removing amount saved by percentage disbursal
var userFinance   = (expenseFloat - userIncomeAdj) * -1;   //calculates amount of remaining balance user has once expenses are taken from income
savingsFloat = userSavings.toFixed(2);       //adjust decimal to hundredth place setting
incomeadjFloat = userIncomeAdj.toFixed(2);   //adjust decimal to hundredth place setting
financeFloat = userFinance.toFixed(2);       //adjust decimal to hundredth place setting
console.log("The user will save $" + savingsFloat + " per month.");      //displays the calculation to the console for amount of monthly savings based on percentage rate
console.log("The users adjust monthly income is: $" + incomeadjFloat);   //displays the calculation to the console for the adjusted income after savings has been removed
console.log("The user will have a balance of:  $" + financeFloat + " after paying bills.");  //displays the calculation to the console for the amount left over after paying bills
alert("Based on your desired savings percentage of " + percentFloat + "%, \nyou will be able to save $" + savingsFloat + " per month.");  //displays percentage rate and amount saved to the user
alert("You're adjusted monthly income is now $" + incomeadjFloat + ".");                             //displays adjust monthly income to user
alert("After paying your monthly expenses you have  $"  + financeFloat + " available to spend.");    //displays available balance after paying bills



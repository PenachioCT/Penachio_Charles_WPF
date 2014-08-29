/*
 Charles Penachio Jr
 WPF Section 01
 Assignment:  Functions Wacky
 08/26/2014
 */

//Let's play a shell game!
var userName = prompt("Please enter your name:");  //asks user for name and stores it
if(userName===""){  //validates user input
    userName=("Please re-enter your name:");
}
console.log("This is the users name:  " + userName);  //prints user input to console
alert("Hello " + userName + ", let's play a game!");  //message to user using input
alert("Find which cup the ball is hiding in...");  //message to user
var userCups = prompt ("How many cups would you like to play with?\n(Whole numbers only.  2-6 cups)");  //asks user for cups value and stores it
if(userCups==="" || isNaN(userCups)){  //validates user input
    userCups=prompt("Please re-enter the amount of cups using whole numbers only:  ");
}
console.log("This is the number of cups the user wants to use:  " + userCups);  //print user input to console
alert("Ok, we will be playing with " + userCups + " cups.");  //message to user using input
alert("Shuffling cups, please wait...");  //message to user
var userChoice = prompt ("Which cup do you think the ball is in?\n(1 - " + userCups + ")");  //asks user for guess
if(userChoice==="" || isNaN(userChoice)){  //validates users guess
    userChoice=prompt("Please re-enter your cup choice using whole numbers only:\n(1 - " + userCups + ")");
}
console.log("This is the cup the user choose:  " + userChoice);  //prints users guess to console
function findBallCup(uCups){  //creates function to find which cup the ball is in
    var ballCup = Math.round(Math.random()*(uCups-1)+Number(1));  //calculation to find ball
    console.log("This is the cup our ball is located in the function:  " + ballCup);  //prints ball location to console
    return ballCup;  //returns value for use outside of function
}

var ballLocation = findBallCup(userCups);  //call to the function
while(userChoice!=ballLocation){  //creates while loop to keep game going
    alert("That is incorrect.  Please try again.");  //message to user
    alert("Shuffling cups, please wait...");  //message to user
    var userChoice = prompt ("Which cup do you think the ball is in?\n(1 - " + userCups + ")");  //asks user for another guess
    if(userChoice==="" || isNaN(userChoice)){  //validates user guess
        userChoice=prompt("Please re-enter your cup choice using whole numbers only:\n(1 - " + userCups + ")");
    }
    console.log("This is the users next guess: " + userChoice);  //prints new guess to console
    findBallCup(userChoice);  //calls function for new ball placement on next run
}
alert("Congratulations " + userName + ", you won!");  //message to user
console.log("The user has won.");  //prints win message to console


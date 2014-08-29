/*
 Charles Penachio Jr
 WPF Section 01
 Assignment:  Functions Industry
 08/27/2014
 */

//pretty weak but this is all i could think of
//calculate time to complete job; breakdown design & coding/debugging processes
var designTime = prompt("How long do you think it will take you to design the site?\n(in days)");  //asks user for value and stores it
while(designTime==="" || isNaN(designTime)){  //validates user input for both an empty string and non number
    designTime=prompt("Please do not leave blank or use non-number.  This is required.\nPlease re-enter how long do you think it will take you to design the site?");
}
console.log("This is the ETA on how long it will take for site design:  " + designTime + " days.");  //prints users input to console

var programTime = prompt("How long do you think it will take you to program the site?\n(in days)");  //asks user for value and stores it
while(programTime==="" || isNaN(programTime)){  //validates user input for both an empty strin and non number
    programTime=prompt("Please do not leave blank or use non-number.  This is required.\nPlease re-enter how long it will take for you to program the site:  " + programTime);
}
console.log("This is the ETA on how long it will take for site programming:  " + programTime + " days.");  //prints users input to console

var graceTime = 2;  //declares a set time period
console.log("This is the grace period we are granting in days:  " + graceTime);  //prints value to console

function projectTime(dTime, pTime,gTime){  //function to calculate how much time the user needs
    var totalTime = Number(dTime) + Number(pTime) + Number(gTime);  //calculation
    return totalTime;  //returns value to function call
}

var projectTimeValue = projectTime(designTime, programTime, graceTime);  //stores/scopes function value outside of function
console.log("This is how many days it will take to complete:  " + projectTimeValue);  //returns value to console
alert("Based on your estimations, we are estimating that it will take you " + projectTimeValue + " days to complete your project." +  //message to user using inputs and calculation
    "\nThis includes a grace period of " + graceTime + " days.");


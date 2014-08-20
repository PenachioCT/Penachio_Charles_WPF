/*
 Charles Penachio Jr
 WPF Section 01
 Assignment:  Conditionals Worksheet
 08/19/2014
 */

//Example;  Stuff your face I
var compWeight = 290;   //declares the competitors weight

if(compWeight >= 250){
    //determines if the competitors weight meets the requirements to qualify
    console.log("The competitor qualifies for the heavyweight division.");
}else{
    //message if competitor fails to meet the requirement to qualify
    console.log("The competitor needs to gain some weight!");
}
console.log("");    //Spacing between Example & Group 1 Exercise

//Group 1:  Expressions w/Conditionals - Last Chance for Gas!
var gasEff    = 20;    //in mpg
var gasGauge  = 50;    //in %
var gasCap    = 20;    //in gallons
var nextGas   = 200;   //miles until next gas station

var gasRemain = gasCap * (gasGauge/100);  //find out how many gallons are left
var milRemain = gasRemain * gasEff;       //find out how many miles you still drive with gallons left in tank

if(milRemain > nextGas){
    //can you make it across the desert w/current fuel?  next gas station in 200 mi.  stop, yes or no?
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have " + gasRemain + " gallons of gas in your tank, better get gas now while you can!");
}
console.log("");    //Spacing between Group 1 & Group 2

//Group 2:  Multiple Results - Check the Login
var correctName = "User";  //sets user name
var correctPass = "Pass";  //sets user password

var userName = prompt("Please enter your User Name: \n (Case Sensitive)");  //asks user for the login name
var userPass = prompt("Please enter your Password: \n (Case Sensitive)");   //asks user for the login password

if(userName === correctName && userPass === correctPass){
    //determines if both username and pass are correct.
    console.log("Welcome, " + correctName + "!");
}else if(userName != correctName && userPass === correctPass){
    //determines if username is incorrect
    console.log("User not found.  Try again.");
}else{
    //determines if user password is incorrect
    console.log("Password does not match our records.");
}
console.log("");    //Spacing between Group 2 & Group 3

//Group 3:  Multiple Conditions - Tire Pressure I
var tireArray = new Array();
tireArray[0] = prompt("Please enter Front/Left tire pressure (psi):");
tireArray[1] = prompt("Please enter Front/Right tire pressure (psi):");
tireArray[2] = prompt("Please enter Rear/Left tire pressure (psi):");
tireArray[3] = prompt("Please enter Rear/Right tire pressure (psi):");

var tireFront;
var tireRear;

if(tireArray[0] === tireArray[1]){
    tireFront = true;
}else{
    tireFront = false;
}

if(tireArray[2] === tireArray[3]){
    tireRear = true;
}else{
    tireRear = false;
}

if(tireFront === true && tireRear === true){
    console.log("The tires pass spec!");
}else{
    console.log("Get your tires checked out!");
}






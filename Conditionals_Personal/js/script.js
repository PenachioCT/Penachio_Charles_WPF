/*
 Charles Penachio Jr
 WPF Section 01
 Assignment:  Conditionals Personal
 08/19/2014
 */

//Can we make a PB&J?
var availBread = prompt("How many slices of bread do you have?\n(whole slices only)");
var pButter    = prompt("Do you have any Peanut Butter?\n(yes/no)");
var jamJelly   = prompt("Do you have any Jelly?\n(yes/no)");

var ppjSpread;
var sandwichTime;


if(availBread === ""){
    availBread = prompt("Please re-enter how many slices of bread do you have?\n(whole slices only)");
}
if(pButter === "") {
    pButter    = prompt("Please re-enter if you have any Peanut Butter?\n(yes/no)");
}
if(jamJelly === ""){
    jamJelly   = prompt("Please re-enter if you have any Jelly?");
}

if(pButter === "yes" && jamJelly === "yes"){
    ppjSpread = 1;
}else{
    PPJSpread = 2;
}

if(availBread>=2){
    sandwichTime = 1;
}else{
    sandwichTime = 2;
}

if(ppjSpread === 1 && sandwichTime === 1){
    console.log("Awesome, you have the required ingredients to make a PB&J!");
}else{
    console.log("You do not have enough ingredients to make a PB&J.");
}

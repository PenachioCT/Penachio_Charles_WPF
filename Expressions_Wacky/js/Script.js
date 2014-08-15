/*
Charles Penachio Jr
WPF Section 01
Assignment:  Expressions - Wacky
08/13/2014
 */

//Array fun with Mad Libs
var userName = prompt("Please enter your name:");

console.log(userName);
alert("Welcome " + userName + ". \n Let's have some fun with MadLibs!");

var madlibArray = new Array ();
madlibArray[0] = prompt("Please enter an Adverb \n(Describes an action - Ex: Quickly, Carefully, Silently):");
madlibArray[1] = prompt("Please enter an Adjective \n(Describes something - Ex:  Green, Squishy, Cute):");
madlibArray[2] = prompt("Please enter a Number \n(Whole numbers only):");
madlibArray[3] = prompt("Please enter a Noun \n(Person, place, or thing - Ex:  Car, House, Child):");
madlibArray[4] = prompt("Please enter a Verb \n(An action - Ex:  Run, Jump, Swim):");
madlibArray[5] = prompt("Please enter an Adjective \n(Describes something - Ex:  Green, Squishy, Cute):");
madlibArray[6] = prompt("Please enter an Adverb \n(Describes an action - Ex:  Quickly, Carefully, Silently):");
madlibArray[7] = prompt("Please enter a Noun \n(Person, place, or thing - Ex:  Car, House, Child):");

console.log(madlibArray[0]);
console.log(madlibArray[1]);
console.log(madlibArray[2]);
console.log(madlibArray[3]);
console.log(madlibArray[4]);
console.log(madlibArray[5]);
console.log(madlibArray[6]);
console.log(madlibArray[7]);

alert("Calculating...");
alert("As we finish up our second week in our web programming fundamentals\n " +
    "class it is becoming apparent how much fun this class is.  For me, it\n" +
    "has been several years since I have written anything in code.  Not only\n" +
    "has this class been nostalgic but also engaging.  I was pleasantly\n" +
    "surprised at the eagerness of my fellow classmates on their interaction\n" +
    "and helpfulness with one another.  Moving forward I contine to have\n" +
    "high hopes for what has yet to come.");


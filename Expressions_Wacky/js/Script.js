/*
Charles Penachio Jr
WPF Section 01
Assignment:  Expressions - Wacky
08/13/2014
 */

//Array fun with Mad Libs
var userName = prompt("Please enter your name:");

console.log(userName);
alert("Welcome " + userName + ". \n Let's have some fun with Mad Libs!");

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

console.log("As we " + madlibArray[0] + " up our second week in our web programming fundamentals " +
    "class it is becoming " + madlibArray[1] + " how much fun this class is.  For me, it " +
    "has been " + madlibArray[2] + " years since I have written anything in code.  Not only " +
    "has this " + madlibArray[3] + " been nostalgic but also " + madlibArray[4] + ".  I was pleasantly " +
    madlibArray[5] + " at the eagerness of my fellow classmates on their " + madlibArray[6] + " " +
    "and helpfulness with one " + madlibArray[7] + ".  Moving forward I continue to have " +
    "high hopes for what has yet to come.");

alert("Calculating...");
alert("As we " + madlibArray[0] + " up our second week in our web programming fundamentals " +
    "class it is becoming " + madlibArray[1] + " how much fun this class is.  For me, it " +
    "has been " + madlibArray[2] + " years since I have written anything in code.  Not only " +
    "has this " + madlibArray[3] + " been nostalgic but also " + madlibArray[4] + ".  I was pleasantly " +
    madlibArray[5] + " at the eagerness of my fellow classmates on their " + madlibArray[6] + " " +
    "and helpfulness with one " + madlibArray[7] + ".  Moving forward I continue to have " +
    "high hopes for what has yet to come.");


/*
Charles Penachio Jr
WPF Section 01
Assignment:  Expressions - Wacky
08/13/2014
 */

//Array fun with Mad Libs
var userName = prompt("Please enter your name:");  //prompts user for their name and stores it as a variable for later use

console.log(userName);                                                      //display user name to the console
alert("Welcome " + userName + ". \n Let's have some fun with Mad Libs!");   //displays welcome message to user using their name

var madlibArray = new Array ();  //creates array
madlibArray[0] = prompt("Please enter an Adverb \n(Describes an action - Ex: Quickly, Carefully, Silently):");    //prompts user for variable to be placed in array
madlibArray[1] = prompt("Please enter an Adjective \n(Describes something - Ex:  Green, Squishy, Cute):");        //prompts user for variable to be placed in array
madlibArray[2] = prompt("Please enter a Number \n(Whole numbers only):");                                         //prompts user for variable to be placed in array
madlibArray[3] = prompt("Please enter a Noun \n(Person, place, or thing - Ex:  Car, House, Child):");             //prompts user for variable to be placed in array
madlibArray[4] = prompt("Please enter a Verb \n(An action - Ex:  Run, Jump, Swim):");                             //prompts user for variable to be placed in array
madlibArray[5] = prompt("Please enter an Adjective \n(Describes something - Ex:  Green, Squishy, Cute):");        //prompts user for variable to be placed in array
madlibArray[6] = prompt("Please enter an Adverb \n(Describes an action - Ex:  Quickly, Carefully, Silently):");   //prompts user for variable to be placed in array
madlibArray[7] = prompt("Please enter a Noun \n(Person, place, or thing - Ex:  Car, House, Child):");             //prompts user for variable to be placed in array

console.log(madlibArray[0]);  //displays array variable to console
console.log(madlibArray[1]);  //displays array variable to console
console.log(madlibArray[2]);  //displays array variable to console
console.log(madlibArray[3]);  //displays array variable to console
console.log(madlibArray[4]);  //displays array variable to console
console.log(madlibArray[5]);  //displays array variable to console
console.log(madlibArray[6]);  //displays array variable to console
console.log(madlibArray[7]);  //displays array variable to console

console.log("As we " + madlibArray[0] + " up our second week in our web programming fundamentals " +        //Displays mad lib to console
    "class it is becoming " + madlibArray[1] + " how much fun this class is.  For me, it " +
    "has been " + madlibArray[2] + " years since I have written anything in code.  Not only " +
    "has this " + madlibArray[3] + " been nostalgic but also " + madlibArray[4] + ".  I was pleasantly " +
    madlibArray[5] + " at the eagerness of my fellow classmates on their " + madlibArray[6] + " " +
    "and helpfulness with one " + madlibArray[7] + ".  Moving forward I continue to have " +
    "high hopes for what has yet to come.");

alert("Calculating...");                                                                                      //Displays an alert to customer as a filler message
alert("As we " + madlibArray[0] + " up our second week in our web programming fundamentals " +                //Displays mad lib to the user with their inputs being used
    "class it is becoming " + madlibArray[1] + " how much fun this class is.  For me, it " +
    "has been " + madlibArray[2] + " years since I have written anything in code.  Not only " +
    "has this " + madlibArray[3] + " been nostalgic but also " + madlibArray[4] + ".  I was pleasantly " +
    madlibArray[5] + " at the eagerness of my fellow classmates on their " + madlibArray[6] + " " +
    "and helpfulness with one " + madlibArray[7] + ".  Moving forward I continue to have " +
    "high hopes for what has yet to come.");


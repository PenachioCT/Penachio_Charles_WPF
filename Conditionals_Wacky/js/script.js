/*
 Charles Penachio Jr
 WPF Section 01
 Assignment:  Conditionals Wacky
 08/19/2014
 */

//Let's play a modified version of a drinking game called Bus Driver!
var userName = prompt("Please enter your name:");       //requests user for name and stores for later use
if(userName === "") {                                   //validates user name prompt
    userName = prompt("Please re-enter your name:");    //requests prompt again if first input invalid
}
console.log("Hello " + userName + ", let's play a modified version of Bus Driver. \nI will drive!");    //greeting to user
console.log("Prepping the bus to ride...");     //filler/flavor message

var busCards = ["black", "red", "red", "black", "red"];     //setup array for game

console.log("Instructions:  I will deal five cards face down.\nYou will decide if the first card is red or black." +            //description/purpose of prompts
    "If incorrect, you lose.\nIf correct, than you will guess if the next card is red or black.\n" +                            //description/purpose of prompts
    "You will proceed in this manner until you reach the end of the bus line of all cards have been flipped.\nLet's begin!");   //description/purpose of prompts

var riderChoice = prompt("Please decide the color of the card:\n(red or black)");       //prompts user for guess and stores for later use
if(riderChoice===""){                                                                   //validates guess prompt
    riderChoice = prompt("Please re-enter your choice:\n(red or black)");               //requests prompt again if first input invalid
}

var cardFlip;       //declares variable to store guess result
cardFlip = (riderChoice === busCards[0]) ? "Congratulations Rider.  First stop complete!":"Incorrect.  Try again!"; //calculates if guess is correct or not
console.log(cardFlip);  //displays result to console

if(cardFlip==="Congratulations Rider.  First stop complete!"){                      //if guess is = to this statement
    alert(cardFlip);                                                                //notifies user of result
    riderChoice = prompt("Please decide the color of the card:\n(red or black)");   //continues with guesses
}else{                                                                              //if guess is != to the statement
    console.log("That was wrong.  Try again.");                                     //displays to console
    alert(cardFlip);                                                                //notifies user of result
    riderChoice = prompt("Please decide the color of the card:\n(red or black)");   //continues with guesses
}

if(riderChoice===""){                                                               //validates guess prompt
    riderChoice = prompt("Please re-enter your choice:\n(red or black)");           //requests prompt again if first input invalid
}

cardFlip = (riderChoice === busCards[1]) ? "Congratulations Rider.  Second stop complete!":"Incorrect.  Try again!";  //calculates if guess is correct or not
console.log(cardFlip);  //displays result to console

if(cardFlip==="Congratulations Rider.  Second stop complete!"){                     //if guess is = to this statement
    alert(cardFlip);                                                                //notifies user of result
    riderChoice = prompt("Please decide the color of the card:\n(red or black)");   //continues with guesses
}else{                                                                              //if guess is != to the statement
    console.log("That was wrong.  Try again.");                                     //displays to console
    alert(cardFlip);                                                                //notifies user of result
    riderChoice = prompt("Please decide the color of the card:\n(red or black)");   //continues with guesses
}

if(riderChoice===""){                                                               //validates guess prompt
    riderChoice = prompt("Please re-enter your choice:\n(red or black)");           //requests prompt again if first input invalid
}

cardFlip = (riderChoice === busCards[2]) ? "Congratulations Rider.  Third stop complete!":"Incorrect.  Try again!";  //calculates if guess is correct or not
console.log(cardFlip);     //displays result to console

if(cardFlip==="Congratulations Rider.  Third stop complete!"){                      //if guess is = to this statement
    alert(cardFlip);                                                                //notifies user of result
    riderChoice = prompt("Please decide the color of the card:\n(red or black)");   //continues with guesses
}else{                                                                              //if guess is != to the statement
    console.log("That was wrong.  Try again.");                                     //displays to console
    alert(cardFlip);                                                                //notifies user of result
    riderChoice = prompt("Please decide the color of the card:\n(red or black)");   //continues with guesses
}

if(riderChoice===""){                                                               //validates guess prompt
    riderChoice = prompt("Please re-enter your choice:\n(red or black)");           //requests prompt again if first input invalid
}

cardFlip = (riderChoice === busCards[3]) ? "Congratulations Rider.  Fourth stop complete!":"Incorrect.  Try again!";  //caluclates if guess is correct or not
console.log(cardFlip);  //displays result to console

if(cardFlip==="Congratulations Rider.  Fourth stop complete!"){                     //if guess is = to this statement
    alert(cardFlip);                                                                //notifies user of result
    riderChoice = prompt("Please decide the color of the card:\n(red or black)");   //continues with guesses
}else{                                                                              //if guess is != to the statement
    console.log("That was wrong.  Try again.");                                     //displays to console
    alert(cardFlip);                                                                //notifies user of result
    riderChoice = prompt("Please decide the color of the card:\n(red or black)");   //continues with guesses
}

if(riderChoice===""){                                                               //validates guess prompt
    riderChoice = prompt("Please re-enter your choice:\n(red or black)");           //requests prompt again if first input invalid
}

cardFlip = (riderChoice === busCards[4]) ? "Congratulations Rider.  You reached the end of the line!":"Incorrect.  Try again!";  //calculates if guess is correct or not
console.log(cardFlip);  //displays result to console
alert(cardFlip);        //notifies user of result

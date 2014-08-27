/*
 Charles Penachio Jr
 WPF Section 01
 Assignment:  Functions Personal
 08/27/2014
 */

//Making Eggs
var userName = prompt("Please enter your name:");  //asks user for their name
if(userName===""){  //validates user name prompt
    userName=prompt("Plese re-enter your name:");
}
console.log("This is the users name: " + userName);  //prints user name to console
alert("Good Morning " + userName);  //greets the user using their name
var yesnoEggs = prompt("Would you like to make some eggs?\n(yes or no)");  //asks user if they want to make eggs
console.log("This is the users choice on whether to make eggs or not:  " + yesnoEggs);  //prints user decision to console
if(yesnoEggs===""){  //validates user egg decision
    yesnoEggs=prompt("Please re-enter if you would to make eggs:\n(yes or no)");
}
yesnoEggs === "yes" ? alert("Ok, let's get started!") : alert("The kitchen is closed.")  //ternary statement to process user decision to make eggs and whether to continue or terminate script
var loopcounter =0;  //variable to control loop
while(yesnoEggs==="yes" && loopcounter ===0) {  //begins loop
    var eggsUsed = prompt("How many eggs would you like?");  //asks user how many eggs to cook
    console.log("This is how many eggs the user wants to cook:  " + eggsUsed);  //prints number of desired eggs to console
    if(eggsUsed===""){  //validates number of eggs question
        eggsUsed=prompt("Please re-enter how many eggs you would like:");
    }
    var eggsCooked = prompt("How would you like to cook those eggs?\n(Scrambled, Sunny Side Up, Omelet)");  //asks user how to cook eggs
    console.log("This is how the user wants to cook their eggs:  " + eggsCooked);  //prints users decision on how to cook eggs to console
    if(eggsCooked===""){  //validates how to cook eggs questions
        eggsCooked=prompt("Please re-enter how you would like to cook your eggs:\n(Scrambled, Sunny Side Up, Omelet)");
    }
    function eggsPeople (eggsUsed){  //starts function to calculate how many people can eat with number of eggs used
        peopleFed = eggsUsed / 2;  //performs calculation
        console.log("This is how many people the user can feed with the amount of eggs cooked (assuming 2 eggs/person):  " +peopleFed);  //prints calculation answer to console
        return peopleFed;  //provides answer to calculation
    }
    if(eggsCooked=="scrambled"){  //starts else if statement to print comments on how eggs are cooked
        alert("Don't forget to scramble your eggs");  //statement for scrambled eggs
    }else if(eggsCooked=="Sunny Side Up"){
        alert("Don't rush your eggs.");  //statement for sunny side up eggs
    }else{
        alert("Make sure you're omelet is cooked all the way through");  //statement for omelete
    }

    alert("I hope you like the way your " + eggsCooked + " turn out.\nYou could have fed " + eggsPeople(eggsUsed) + " with the amount of eggs used (considering 2 eggs per person).");  //prints message on user choices to user
    var moreEggs = prompt("Are you still hungry?  Would you like to cook more eggs?\n(yes or no)");  //asks user if they are still hungry for more eggs
    if(moreEggs===""){  //validates if user decision to make more eggs or not
        moreEggs=prompt("Please re-enter if you would like to make more eggs:\n(yes or no)");
    }
    if(moreEggs==="no") {  //if user picks no, ends loop.  otherwise grab your hat because here we go again
        loopcounter++
    }
}
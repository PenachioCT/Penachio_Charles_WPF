/*
 Charles Penachio Jr
 WPF Section 01
 Assignment:  Conditionals Industry
 08/21/2014
 */

//Program, Test, & Debug?
var userProgram = prompt("Have you finished coding your program?\n(yes or no)");    //prompts user for a yes/no answer and stores it
if(userProgram===""){   //validates if input was valid or not
    userProgram=prompt("Please re-enter if you have finished coding your program:\n(yes or no)");   //asks user for input if invalid first time
}

var userTest=prompt("Have you finished testing/debugging your program?\n(yes or no)");  //prompts user for a yes/no answer and stores it
if(userTest===""){  //validates if input was valid or not
    userTest=prompt("Please re-enter if you have finished testing/debugging your program:\n(yes or no)");   //asks user for input if invalid first time
}

if(userProgram === "yes" && userTest === "yes"){    //checks if both conditions are true
    console.log("Good Job!  Take a break.");    //displays to console
    alert("Good Job!  Take a break.");  //displays to user
}else if(userProgram === "yes" && userTest != "yes"){   //check if one condition if one condition is true
    console.log("Please test & debug your program before taking a break.")  //displays to console
    alert("Please test & debug your program before taking a break.")    //displays to user
}else{  //if both conditions are false
    console.log("You have a lot of work to do before you can take a break!");   //displays to console
    alert("You have a lot of work to do before you can take a break!"); //displays to user
}



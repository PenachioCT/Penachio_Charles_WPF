/*
 Charles Penachio Jr
 WPF Section 01
 Assignment:  Functions Wacky
 08/26/2014
 */

//Let's play a shell game!
var userName = ("Please enter your name:");
prompt ("Hello " + userName + ", let's play a game!");
prompt ("Find which cup the ball is hiding in...");
var userCups = prompt ("How many cups would you like to play with?\n(Whole numbers only.  2-6 cups)");
prompt ("Ok, we will be playing with " + userCups + " cups.");
prompt ("Shuffling cups, please wait...");
var userChoice = prompt ("Which cup do you think the ball is in?\n(1 - " + userCups + ")");

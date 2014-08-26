/*
 Charles Penachio Jr
 WPF Section 01
 Assignment:  Functions Worksheet
 08/25/2014
 */

//Example - Calculate the area of a rectangle given the width and height of the rectangle.
//Calculate the Area of a Rectangle
var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log("The area of the Rectangle is " + area);

function calculateArea(w, h){
    return w*h;
}
//Calculate the circumference of a circle
var radius = 2;
var circleCircum = findCircum(radius);
console.log("The circumference of the cirlce is:  " + circleCircum);

function findCircum(radius){
    return 2*3.14*radius;
}

//Stung!
var vicWeight = 100;
var stingKill = findSKill(vicWeight);
console.log("It takes " + stingKill + " bee stings to kill this animal.");

function findSKill(vicWeight){
    return 8.666666667 * vicWeight;
}
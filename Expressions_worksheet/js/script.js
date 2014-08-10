//Charles Penachio Jr.
//Sunday, August 10 2014
//Expression Worksheet

//Dog Years
var sparkyHAge = 7;  //declares Sparky's age in human years.
var dogYears = 7;    //declares conversion value.
var sparkyDAge;      //Saves calculation of Sparky's age from human to dog years.

sparkyDAge = sparkyHAge * dogYears;  //Calculation to find Sparky's age in dog years

console.log("Sparky is " + sparkyHAge + " human year(s) old which is " + sparkyDAge + " in dog years.");  //prints values to screen

//End of Dog Years
console.log(" ");  //Provides line spacing between Dog Years & Slice of Pie:  P1

//Slice of Pie:  P1
var slicesPPizza = 8;  //declares number of slices each pizza has.
var numbPeople = 22;    //declares how many people eat pizza.
var numbPizza = 10;     //declares how many pizza's are at the party.
var slicesPPerson;     //saves calculation

slicesPPerson = slicesPPizza * numbPizza / numbPeople;  //Calculation to find how much people ate.  Good thing our slicer is incredibly accurate!!
slicesPPerson = parseFloat(slicesPPerson).toFixed(2);   //Takes calculation and enables floating or decimal form to the hundredth place.

console.log("Each person ate " + slicesPPerson + " slice(s) of pizza at the party.");  //prints values to screen.

//End of Slice of Pie:  P1
console.log(" ");  //Provides line spacing between Slice of Pie:  P1 & P2

//Slice of Pie:  P2
var slicesPPizza = 8;  //declares number of slices each pizza has.
var numbPeople = 22;   //declares number of people eat pizza.
var numbPizza = 10;     //declares number of pizza's are at the party.
var sparkyCut;         //saves calculation

sparkyCut = slicesPPizza * numbPizza % numbPeople;  //calculates how many slices will be left over for Sparky to consume.  Go Sparky!

console.log("Sparky got " + sparkyCut + " slice(s) of pizza.");  //prints value to screen.

//End of Slice of Pie:  P2
console.log(" ");  //Provides line spacing between Slice of Pie:  P2 & Average Shopping Bill

//Average Shopping Bill
var billArray = [234, 169, 122, 280, 99];  //declares weekly bill amounts in an array.
var billTotal;                              //saves array total calculation.
var billAverage;                            //saves average of array total.

billTotal = billArray[0] + billArray[1] + billArray[2] + billArray[3] + billArray[4];  //adds the array.
billAverage = billTotal / 5;                                                           //averages the array total.

console.log("You have spent a total of $" + billTotal + " on groceries over 5 weeks.  That is an average of $" + billAverage + " per week.");  //prints value to screen.

//End of Average Shopping Bill
console.log(" ");  //Provides line spacing between Average Shopping Bill & Discounts

//Discounts
var oPrice = 49.99;                          //declares original price.
var disPer = 30;                         //declares amount of discount (whole number, no need for decimal).
var desItem = "Handheld Portal Device";  //declares what the item is.  Thank you Aperture Science!
var staxPer = 6;                         //declares the tax percentage rate (whole number + decimal if needed, no need to already be in decimal form).
var itemWTax;                            //saves calculation .
var itemWOTax;                           //saves calculation.

itemWOTax = oPrice * (disPer / 100);                  //calculates how much the item will cost with the discount and no tax.
itemWTax = itemWOTax * (staxPer / 100) + itemWOTax;   //calculates how much the item will cost with the discount and tax.
itemWOTax = parseFloat(itemWOTax).toFixed(2);
itemWTax = parseFloat(itemWTax).toFixed(2);


console.log("Your " + desItem + " was originally $" + oPrice + ", but after a " + disPer + "% discount, it is now $" + itemWOTax + " without tax, and $" + itemWTax + " with tax.");  //prints value to screen.

//Discounts
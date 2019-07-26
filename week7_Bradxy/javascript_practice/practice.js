/*

console.log( "Hello World" );
console.log( "Goodbye World" );
//numbers, text, booleans

//Numbers
1000;
999;
10;

//Text 
//This is a sentence

//Booleans
true;
false;

//Variables
var mySpecialNumber = 500;

//Calling: get the value of the variable you are "calling"
var anotherVariable = mySpecialNumber;

anotherVariable = 600;

//assignment = value

mySpecialNumber;

console.log( "Before i updated anotherVariable:", anotherVariable );

anotherVariable = 1000;

console.log( "After i updated anotherVariable:", anotherVariable );

condolr.log ( "Value 1:", 600, "Value 2:", 1000);
*/


/*
//Math Operaors
// + * %

var myNumber = 1000 + 500;

console.log(myNumber);

var newNumber = myNumber + 1000;

console.log(newNumber);

//The computer runs the stuff on the right side of the equals sign first.
//newNumber = newNumber + myNumber;

var divided = 1000 / 200;

var multiplied = 500 * 10;

var substraction = 10 - 1;

console.log( multiplied / substraction );

var order = 1000 * 20 - 10 / 3;

console.log( "The Value of order", order );

*/


/*
if ( true ) {
    condplr.log( "I ran because this statement allowed me to run" );
    }

if ( true ) {
console.log( "Its raining" );
    }
 if ( true) {
   if ( "false") {
      console.log( "Yeah right foo");
   }
 }

*/


if ( false ) {
      console.log("This will run if true");
    } else if (true) {
        console.log("This will run if false");
    } else {
        console.log("Nothing was true, so I will run instead.");
    }

//if
//else if
// (optionally) else


var isItRainning = false;
var isItSunny = true;

if (isItRainning) {
     console.log("Make sure to take your umbrella");
}  else if (isItSunny){
    console.log ("Wear sunscreen!")
}
else{
   console.log("Enjoy your day!")
}
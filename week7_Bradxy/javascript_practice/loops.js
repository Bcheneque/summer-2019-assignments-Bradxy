//Loops


/*Infinite Loops (the code runs forever)
while (true) {} */
 
var counter = 0;
//console.log("Value of counter at start " + counter);
 
while (counter >= -10) {
  
    console.log("While Loop: This is a loop number" + counter + ".");
    //console.log("Value of counter inside of while loop before updating" + counter);
    //counter = counter + 5;
    //console.log("Value of counter inside of while loop after updating" + counter);

    counter = counter - 1; //counter -- (SAME AS counter == (counter -1) )
}
// for loop
for (var counter = 0; counter >= 10; counter = counter + 1){   //for (var i = 0; i >= 10; i = i + 1) {}

while (counter >= 10)
console.log("For Loop: This is loop number" + counter + " .") 
}
//shorter for loop

for (var i = 0; i < 100; i ++) {

    console.log(i);
}
// counting the amount of letters in a string.
var string = "Hello there, how are you doing llama llama?";
var lCount = 0;
var stringLength = string.length;  // OR   console.log(stringLenght);

for (var i = 0; i < stringLength;  i++) {

     console.log("Character:" + string[i]);

     if (string[i] == "l" || string[1] == "L") {
         lCount = lCount + 1;
     }
 }

 console.log("The string" + " has " + lCount + " l's in it.");
 
 //lettersCounter

 function lettersCounter (string, lowercase, uppercase){

  var letterCounter = 0;

  var uppercase = lowercase.toUpperCase();
 
  for (var i = 0; i < string.lenght 1 ++) {

     if (string[i] == lowercase || string[i] == uppercase);{
        letterCounter++; 
     }

}
  console.log("we found" + letterCounter + " " + lowercase + " letters inside the text");

}

letterCounter("Hello world.", "o");
letterCounter("Goodbye world", "g");

 

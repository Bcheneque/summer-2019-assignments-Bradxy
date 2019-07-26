// Creating a calculator

 var number1 = 100;
    var number2 = 9; 

    //console.log(process.argv);

    //console.log(parseInt("1209801238091")); (STRING VERSION)
 //storing values from the terminal into firstNumber and secondNumber
    var firstNumber = process.argv[2];
    var secondNumber = process.argv[3];
// convert the strings from firstNumber/ seconfNumber to actual numbers
firstNumber = parseInt(firstNumber);
secondNumber = parseInt (secondNumber);
// define a function that takes two numbers and spits a whole bunch of information
 function mathify (number1, number2) {   
//test if both variables actually hold numbers.
    if (typeof number1 == "number" && typeof number2 == "number") {
    //do math.
       var sum = number1 + number2;
       var difference = number1 - number2;
       var product = number1 * number2;
       var quotient = number1 / number2;
//report the results to the console.
    console.log("the sum of " + number1 + " and " + number2 + " is:", sum);
    console.log("The difference of " +number1 + " and " + number2 + " is", difference);
    console.log("The product of " + number1 + " and " + number2 + " is:",  product);
    console.log("The quotient of " + number1 + " and " + number2 + " is:",  quotient);
// if not numbers..
 } else { 
     //type out the errors.
     console.log("The value of number1 is not a number! Try again", "The datatype of number1 is " + typeof number1)
     console.log("The value of number2 is not a number! Try again", "The datatype of number2 is " + typeof number2);
 }
 }

 mathify(firstNumber, secondNumber);
  
 
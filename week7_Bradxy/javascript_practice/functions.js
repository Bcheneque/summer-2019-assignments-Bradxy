// Function syntax(comment)
function functionName () {

// Code that runs when the function is called. (comment)
console.log("Say something!");
console.log("Okay fine i will say something");
}
functionName();
functionName();



somethingImportant = "Not really important";

// Defining a function.
 function takeInfo(firstVariable, secondVariable) {// functionVariable inside the parentheses
   
     function takeInfor(firstVariable, secondVariable) {
         var sentence = firstVariable + " " + secondVariable + "!";

         return sentence;
     }
     
     //console.log(functionVariable); // parentheses creates the variables
    }

// Calling a function.

var results = takeInfo("Hello","world.");

   console.log(takeInfo("How", "are you"));

 var results2 = takeInfo ("hello there", "goodbye friend");

   console.log(results2);

//Takes in two variables, concatenates them and concole logs the result.
   function concatSentence(string1, string2) {
       var brickHouse = "She's mighty mighty.";
       var smokin = "Hello world.";

         console.log(brickHouse + smokin);
   }

    concatSentence();

    concatSentence();

    function concatItself(string1, string2) {
       concatSentence(string1, string2);
       concatSentence(string2, string1);
    }

     concatItself("ra", "dar");

    /* Parameters and Arguments

    function functionName (parameter1, parameter2) {

    } */
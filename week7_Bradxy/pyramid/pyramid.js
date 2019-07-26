
/*var pyramid1 = true;
var pyramid2 = true;
var pyramid3 = true;
var pyramid4 = true;
var pyramid5 = true;
var pyramid6 = true;
var pyramid7 = true;

console.log("*");

if (pyramid1) {

     console.log("* *");

} if(pyramid2) {
     
    console.log("* * *");

} if(pyramid3) {

    console.log("* * * *");

} if(pyramid4) {

    console.log("* * *");

} if(pyramid5) {

    console.log("* *");

} */
function pyramid(string) {

    for(var i = 0; i < 6; i++) {

        console.log(string);

        string += "*";
    }
}

pyramid("*");




/*var ast1 = "*";

 console.log(ast1);

ast1 = ast1 +  "*";

 console.log(ast1);

ast1 = ast1 + "*";

 console.log(ast1); */

// using loops
var ast1 = ""

/*ast1 = ast1 + "*";
  console.log(ast1);

 ast1 = ast1 + "*";
   console.log(ast1);

 ast1 = ast1 + "*";
   console.log(ast1); */

// this is the same code simplified for repetitive code
for( var i = 0; i < 5; i++) {
    ast1 = ast1 + "*";
    console.log(ast1);
}




  
       
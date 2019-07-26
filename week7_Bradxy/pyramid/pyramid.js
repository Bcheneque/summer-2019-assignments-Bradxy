
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

function pyramidString(string) {

    for(var i = 0; i < 6; i++) {

        console.log(string);

        string += "*";
    }
}

pyramidString ();



  
       
function findBiggestFraction(a,b) {
    
    var result;
   a>b ? result = ["firstFraction", a] : result = ["secondFraction"];
   return result;

   // a>b ? console.log("a: ", a) : console.log("b: ", b);
// using ? means "if" and : "else" (ternary Operator)
   /* if (a > b)
        console.log("a: ", a)
    else
        console.log("b: ", b); */
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);

//findBiggestFraction(firstFraction, secondFraction);

console.log("First fraction result:", firstFraction);
console.log("Second fraction result:", secondFraction);
console.log("Fraction" + fractionResult[0] + "with a value of" + fractionResult[1] + "is the biggest");  
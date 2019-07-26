var takesTheBus = true;
var meetsOldLady = false;
var meetsAnnoyingHobo = true;

var availableSeat = true; 
var findersKeepers = true;
var fightsHobo = true;
var exitsBus = true;

console.log("David woke up to get ready for work, he checks the bus schedule.");

if (takesTheBus) {
    console.log("He woke up early enough to catch the bus.");
    if (meetsOldLady) {
        console.log("option 1: Meets a nice old lady."); 
        if (availableSeat) {
            console.log("He offers her the available seat.");
        } else if(findersKeepers) {
            console.log("He says finders keepers.");
        } else {
            console.log("there was no seats, he stand all the way.");
        }

    } else if (meetsAnnoyingHobo) {
        console.log("Option 2: Meets annoying hobo.");
        if (fightsHobo) {
            console.log("David fights hobo man and looses.");
        } else if(exitsBus) {
            console.log("He gets scare and exits the bus.");
        } else {
            console.log("He ignores him.");
        }
}   else {
    console.log ("Meets no one.");
}
}   
    var walksToWork = true;
    var eatsASnack = true;
    var goesIntoAStore = true;
    var getsDistracted = false;
    var leavesTheStore = true;
    var throwsWrapper = true;
    var picksItUp = false;

    if (walksToWork) {
        console.log("he walks to work in downtown sf.");
        if (goesIntoAStore){
            console.log("He goes into a store and gets distracted."); 
            if (getsDistracted) {
            console.log("He's late for work.");
        }  else if(leavesTheStore) {
           }   console.log ("he decides he doesn't have time to shop.");

        } else  if(eatsASnack) {
            console.log("David eats a snack and throws the wrapper on the sidewalk.");
            if(throwsWrapper) {
                console.log ("David gets a ticket for littering.");
            } else if (picksItUp) {
                console.log ("he goes back and picks up the wrapper.");
            }
        } else {
            console.log("He walks fast and gets to work without distractions.");
        }

        }

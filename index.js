"use strict";

let destination = ["Berlin, Germany", "Melbourne, Australia", "Geneva, Switzerland", "Oslo, Norway", "Quito, Ecuador", "Ankara, Turkey", "Seville, Spain",
 "Cairo, Egypt", "Moscow, Russia", "Tokyo, Japan"];
let restaurant = ["Fast Food", "Inexpensive Local Cuisine", "Expensive Local Cuisine", "Other Foreign Food"]
let transportation = ["Boat", "Plane", "Train", "Automobile"]
let entertainment = ["site-seeing", "going on a Brewery Tour", "seeing a Commedy Show", "going Dancing", "going on a Museum Trip"]
let locationSatisfaction;
let foodSatisfaction;
let transportationSatisfaction;
let entertainmentSatisfaction;
function randomIndexGenerator(arr){
    let randomIndexGenerator = Math.floor((Math.random() * arr.length));
    return arr[randomIndexGenerator];
}
function randLocationGenerator(arr){
    console.log(randomIndexGenerator(destination));
    let locationSatisfaction = parseInt(prompt("If you are happy with your location, please enter '1'. If you would like to be reassigned randomly again, please enter '2'."))
    while(locationSatisfaction == 2){
        if(locationSatisfaction == 1){
            return
        }
        else if(locationSatisfaction == 2){
            console.log(randomIndexGenerator(destination));
            parseInt(prompt(locationSatisfaction));
        }
    }
}
alert("You are about to be randomly assigned a day trip somewhere in the world!");
console.log("You will be going to " + randomIndexGenerator(destination) + "!");
console.log("The type of restuarant you will eat at will be " + randomIndexGenerator(restaurant) + ".");
console.log("Your mode of transportation will be by " + randomIndexGenerator(transportation) + ".");
console.log("When you are there, you will be " + randomIndexGenerator(entertainment) + "!");
// Move this into areYouSatisfiedPrompt function
let userResponse = prompt("Are you satisfied with the outcome of your trip? Enter yes if so.").toLowerCase();
let isUserSatisfied = userResponse === "yes";
do { 
    // ask change function{
    //         switch (choice) {
    //              case 1 :
    //                  randomLocationGenerator
    //              ...
    //              default:
    //                  Give me valid answer function
    //     }
    //      areYouSatisfiedPrompt()
    // }
    userResponse = prompt("Please enter '1' to change your location. '2' to change your restaurant. '3' to change your transportation. '4' to change your entertainment. '5' to ").toLowerCase();
    if(isUserSatisfied){
        randLocationGenerator();
    }
} while(!isUserSatisfied);
console.log("We are excited you are satisfied with your randomly planned trip!");
alert("Congratulations on your upcoming trip!");



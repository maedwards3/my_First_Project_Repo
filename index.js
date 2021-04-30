"use strict";

let destination = ["Berlin, Germany", "Melbourne, Australia", "Geneva, Switzerland", "Oslo, Norway", "Quito, Ecuador", "Ankara, Turkey", "Seville, Spain",
 "Cairo, Egypt", "Moscow, Russia", "Tokyo, Japan"];
let restaurant = ["Fast Food", "Inexpensive Local Cuisine", "Expensive Local Cuisine", "Other Foreign Food"]
let transportation = ["Boat", "Plane", "Train", "Automobile"]
let entertainment = ["site-seeing", "going on a Brewery Tour", "seeing a Commedy Show", " going Dancing", "going on a Museum Trip"]
function randGenerator(arr){
    let randGenerator = Math.floor((Math.random() * arr.length));
    return arr[randGenerator];
}
alert("You are about to be randomly assigned a day trip somewhere in the world!")
console.log("You will be going to " + randGenerator(destination) + "!");
console.log("The type of restuarant you will eat at will be " + randGenerator(restaurant) + ".");
console.log("Your mode of transportation will be by " + randGenerator(transportation) + ".");
console.log("When you are there, you will be " + randGenerator(entertainment) + "!");
let userSatisfied = parseInt(prompt("If you are you satisfied with the outcome of your trip, enter '1'. If you would like to change a part of your trip, enter '2'."));
if(userSatisfied === 1){
    console.log("We are excited you are satisfied with your randomly planned trip!");
    alert("Congratulations on your upcoming trip!");
}
else if(userSatisfied === 2){
    userSatisfied = prompt("Please enter '1' to change your location. '2' to change your restaurant. '3' to change your transportation. '4' to change your entertainment. '5' to ")
}

















// while(dayTripLocation === destination){
//     console.log("You are going to " + destination + " !");
//     alert("You are going to " + destination + " !");
// }
// if(dayTripLocation !== destination[i]){
//     console.log("Please select a number 0 - 9.")
// }
// let dayTripLocation = parseInt(prompt("Hello! Select a number between 0 and 9 to see where you will randomly go for your day trip!"));

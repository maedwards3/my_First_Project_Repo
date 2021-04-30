"use strict";

let destination = ["Berlin, Germany", "Melbourne, Australia", "Geneva, Switzerland", "Oslo, Norway", "Quito, Ecuador", "Ankara, Turkey", "Seville, Spain",
 "Cairo, Egypt", "Moscow, Russia", "Tokyo, Japan"];
let restaurant = ["Fast Food", "Cheap Local Cuisine", "Expensive Local Cuisine", "Foreign Food"]
let transportation = ["Boat", "Plane", "Train", "Automobile"]
let entertainment = ["Fair", "Go-Karts", "Paintball", "Dancing", "Laser Tag"]
function randGenerator(arr){
    let randGenerator = Math.floor((Math.random() * arr.length));
    return arr[randGenerator];
}
let dayTripLocation = parseInt(prompt("Hello! Select a number between 0 and 9 to see where you will randomly go for your day trip!"));



















// while(dayTripLocation === destination){
//     console.log("You are going to " + destination + " !");
//     alert("You are going to " + destination + " !");
// }
// if(dayTripLocation !== destination[i]){
//     console.log("Please select a number 0 - 9.")
// }


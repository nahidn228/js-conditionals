/**
 * TERNARY
 *
 * three parts in TERNARY
 *
 *  ?  :
 * condition ? do something when true : do something when false
 *
 */

//const age = 17;

// normal if else
// if (age >= 18) {
//   console.log("Vote dio");
// } else {
//   console.log("Ghumai thako");
// }

// Simple Ternary
//age >= 18 ? console.log("Vote dio") : console.log("Ghumai thako");

let price = 500;
const isLeader = true;

// if (isLeader === true) {
//   price = 0;
// } else {
//   price = price + 100;
// }
//console.log(price);

//TERNARY

price = isLeader === true ? 0 : price + 100;

console.log(price);
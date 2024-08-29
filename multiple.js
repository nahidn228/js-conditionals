const salary = 25000;
const isBCS = true;
const height = 61;
const hasCar = true;

// 1ta condition
if (salary > 20000) {
  console.log("su------patro");
} else console.log("onno patro khuji");

// 2ta condition (and operation)

if (salary > 20000 && height > 66) {
  console.log("su------patro");
} else console.log("onno patro khuji");
// 2ta condition (or operation)

if (salary > 20000 || height > 66) {
  console.log("su------patro");
} else console.log("onno patro khuji");

/**
 * Complex Condition
 */

if ((salary > 20000 || height > 66) && isBCS == true) {
  console.log("tmr 14 gusti raji");
} 
/**
 * Complex Condition
 */

if ((salary > 20000 && height > 70) || isBCS == true) {
  console.log("tmr 14 gusti raji");
} 

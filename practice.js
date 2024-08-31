/***

1.Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

console.log("Practice Task - 1");
let burgerPrice = 400;
if (burgerPrice >= 500) {
  console.log("Free Drinks");
} else {
  console.log("Pay 30tk for Coke");
}

/*** 

2. BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
console.log("Practice Task - 2");

let BMI = 30;

if (BMI < 18.5) {
  console.log("you are underweight.");
} else {
  if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("you are normal.");
  } else {
    if (BMI >= 25 && BMI <= 29.9) {
      console.log("you are overweight.");
    } else {
      console.log("you are obese.");
    }
  }
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/ console.log("Practice Task - 3");

let score = 90;
if (score <= 59) {
  console.log("Your Grade is 'F' ");
} else {
  if (score >= 60 && score <= 69) {
    console.log("Your Grade is 'D' ");
  } else {
    if (score >= 70 && score <= 79) {
      console.log("Your Grade is 'C' ");
    } else {
      if (score >= 80 && score <= 89) {
        console.log("Your Grade is 'B' ");
      } else {
        if (score >= 90 && score <= 100) {
          console.log("Your Grade is 'A' ");
        } else {
          console.log("Please Type a valid score ");
        }
      }
    }
  }
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/ console.log("Practice Task - 3");

let myScore = 80;
let friendScore = 89;
if (myScore < 80) {
  console.log("Go Home and Act Sad");
} else {
  if (myScore >= 80 && friendScore >= 80) {
    console.log("Go for a lunch.");
  } else {
    if (friendScore < 80 && friendScore >= 60) {
      console.log("Good luck next time.");
    } else {
      if (friendScore <= 59 && friendScore >= 40) {
        console.log("message unseen");
      } else {
        if (friendScore < 40) {
          console.log("Block Him");
        }
      }
    }
  }
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */ console.log("Practice Task - 4");

let num1 = 40;
let num2 = 30;
let result = 0;

if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}
console.log(result);

// using ternary operator.
console.log("using ternary operator.");

result1 = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result1);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/ console.log("Practice Task - 5");

let childrenAge = 10;
let isStudent = true;
let seniorCitizen = 50;
let price = 800;

if (childrenAge < 10) {
  console.log("Ticket is free");
} else if (isStudent === true) {
  let discount = (price * 50) / 100;
  let payAmount = price - discount;
  console.log("You have got 50% Discount, please pay = " + payAmount);
} else if (seniorCitizen >= 60) {
  let discount = (price * 15) / 100;
  let payAmount = price - discount;
  console.log("You have have got 15% Discount, please pay =  " + payAmount);
} else {
  console.log("Please pay = " + price);
}

const age = 44;

const price = 500;

if (age <= 12) {
  console.log("You can eat for free");
} else if (age >= 60) {
  //50 discount
  const discount = (price * 50) / 100;
  console.log("Your Discount is = " + discount);

  const payAmount = price - discount;
  console.log("Your Pay Amount is = " + payAmount);
} else if (age >= 50) {
  // 25 % Discount
  const discount = (price * 25) / 100;
  console.log("Your Discount is = " + discount);
  const payAmount = price - discount ;
  console.log("Your Pay Amount is = "+ payAmount)
} 
else if(age >= 40){
  // 10% Discount
  const discount = price * 10 / 100;
  console.log("Your Discount is = " + discount);
  const payAmount = price - discount ;
  console.log("Your Pay Amount is = "+ payAmount)

}

else {
  console.log("Your Pay Amount is = " + price);
}

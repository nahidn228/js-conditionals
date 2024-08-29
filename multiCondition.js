/**
 * MUlti level condition
 */

const price = 4000;

if (price >= 5000) {
  //10% discount
  const discount = (price * 10) / 100;
  console.log("Your Discount is = " + discount);

  const payAmount = price - discount;
  console.log("Your New Price is = " + payAmount);
} else if (price > 2000) {
  // 5% discount
  discount = (price * 5) / 100;
  console.log("Your Discount is = " + discount);

  const payAmount = price - discount;
  console.log("Your New Price is = " + payAmount);
} else {
  console.log("Your Price is = " + price);
}

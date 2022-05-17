// set some in the cash counter drawer
let cashCounter = [
  { 50: 3 },
  { 20: 5 },
  { 10: 5 },
  { 5: 10 },
  { 2: 3 },
  { 1: 5 },
  { "0.50": 8 },
  { "0.20": 5 },
  { "0.10": 10 },
  { 0.05: 5 },
  { 0.01: 10 },
];
// To calculate the change
const prompt = require("prompt-sync")({ sigint: true });
// get the price of the product and cash from the customer
let price = parseFloat(prompt("Please enter the product price: "));
let cash = parseFloat(prompt("Please enter the amount paid: "));
// Find the difference to give the change back to the customer
let difference = cash - price; //12.50
//37.50 -20 =17.50
//17.50 -10=7.50
//7.50 -5 = 2.50
//2.50 - 2 =0.50
//0.50-0.50=0
// Set the change array to 0:
let change = [
  //{ 50: 0 },
  //{ 20: 0 },
  { 10: 0 },
  { 5: 0 },
  { 2: 0 },
  { 1: 0 },
  { 0.50: 0 },
  { 0.20: 0 },
  { 0.10: 0 },
  { 0.05: 0 },
  { 0.01: 0 },
];
// iterate through the change array and for each item iterate through the
// objects to update the value of it.
for (const item of change) {
  for (const key in item) {
      while(difference.toFixed(2)  >= Number(key)){
          difference -=Number(key);
          ++item[key]  // update the change array object value to 1.
      }
  }
}
//console.log(change);
// To get the filtered array that is updated with 1.
let filteredChange = change.filter(item => Object.values(item)[0]!== 0);
console.log(filteredChange);
// const prompt = require("prompt-sync")({ sigint: true });

// let price = parseFloat(prompt("Please enter the product price: "));
// let cash = parseFloat(prompt("Please enter the amount paid: "));

// function checkCashRegister(price, cash, cid) {
//   let difference = cash - price;
//   const originalDiff = difference;
//   let objectReturn = {
//     status: "",
//     change: [],
//   };

//   let arrCurrency = [
//     ["ONE HUNDRED", 100],
//     ["TWENTY", 20],
//     ["TEN", 10],
//     ["FIVE", 5],
//     ["ONE", 1],
//     ["QUARTER", 0.25],
//     ["DIME", 0.1],
//     ["NICKEL", 0.05],
//     ["PENNY", 0.01],
//   ];

//   cid.reverse();
//   //console.log(cid.reverse());
// // This is to calculate the total sum in the cash drawer
//   let cidSum = 0;
//   for (let i = 0; i < cid.length; i++) {
//     cidSum += cid[i][1];
//   }
//   //console.log(cidSum);
//   // taking the currency array in the result
//   let result = [...arrCurrency];
//   //console.log(result);

//   for (let i = 0; i < arrCurrency.length; i++) {
//     let returnMoney = 0;
//     console.log("cid and arrcurrency",+cid[i][1],arrCurrency[i][1])
//     let bill = cid[i][1] / arrCurrency[i][1];
//     console.log(bill);
//     bill.toFixed(2);
//     console.log(bill);
//     console.log(difference);
//     while (difference.toFixed(2) >= arrCurrency[i][1] && bill >= 1) {
//       difference -= arrCurrency[i][1];
//       console.log(difference)
//       returnMoney += arrCurrency[i][1];
//       console.log(returnMoney)
//       bill--;
//       console.log("bill",+bill)
//     }
//     console.log("difference",+difference);
//     console.log("returnMoney",+returnMoney);

//     if (returnMoney > 0) {
//       if (returnMoney - Math.floor(returnMoney) !== 0) {
//         result[i][1] = returnMoney.toFixed(2);
//         result[i][1] = parseFloat(result[i][1]);
//       } else {
//         result[i][1] = returnMoney;
//       }
//     } else {
//       result[i][1] = returnMoney;
//     }
//   }

//   let sumResult = 0;

//   for (let i = 0; i < cid.length; i++) {
//     sumResult += result[i][1];
//   }
//   sumResult = sumResult.toFixed(2);
//   console.log("sumResult",+sumResult);

//   if (cidSum < originalDiff || sumResult < originalDiff) {
//     objectReturn.status = "INSUFFICIENT_FUNDS";
//   } else if (cidSum == originalDiff) {
//     objectReturn.status = "CLOSED";
//     objectReturn.change = cid;
//   } else {
//     let resultFiltered = [];
//     for (let a = 0; a < result.length; a++) {
//       if (result[a][1] !== 0) {
//           console.log("result:",+result[a])
//         resultFiltered.push(result[a]);
//       }
//     }
//     objectReturn.status = "OPEN";
//     objectReturn.change = resultFiltered;
//   }
//   return objectReturn;
// }
// //console.log(checkCashRegister(price,cash,cid));
// console.log(checkCashRegister(price, cash, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

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

let price = parseFloat(prompt("Please enter the product price: "));
let cash = parseFloat(prompt("Please enter the amount paid: "));

let difference = cash - price; //12.50
//37.50 -20 =17.50
//17.50 -10=7.50
//7.50 -5 = 2.50
//2.50 - 2 =0.50
//0.50-0.50=0
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

for (const item of change) {
  for (const key in item) {
      while(difference >= Number(key)){
          difference -=Number(key);
          ++item[key]
      }
  }
}
console.log(change);
let filteredChange = change.filter(item=>{
    console.log(Object.values(item)[0]);
    Object.values(item)[0]!== 0})
console.log(filteredChange)
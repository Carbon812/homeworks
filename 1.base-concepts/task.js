"use strict";


function solveEquation(a, b, c) {
  const discriminant = b**2 - 4 * a * c;
  if (discriminant > 0){
    return [(- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant === 0) {
    return [- b / (2 * a)];
  }
  return [];
}


function calculateTotalMortgage(percent, contribution, amount, date) {

  // код для задачи №2 писать здесь

  // if(typeof percent !== 'number'){
  //   console.log("lazha");
  // }


  // console.log(a);
  //
  // let args = Array.from(arguments);
  //
  // for(let i = 0; i < args.length - 1; i++){
  //   if (typeof args[i] !== 'number'){
  //     let valName = this;
  //     let val = args[i];
  //
  //     console.log(`Параметр ${valName} содержит неправильное значение ${val}`);
  //   }
  // }


  let currentDate = new Date();

  let S = amount - contribution;

  let P = percent / 100 * (1 / 12);

  let n = (date - currentDate) / 1000 / 60 / 60 / 24 / 30;

  n = Math.round(n);

  let monthPayment = S * (P + (P / (((1 + P)**n) - 1)));

  let totalAmount = monthPayment * n;

  totalAmount = totalAmount.toFixed(2);

  return totalAmount;
}

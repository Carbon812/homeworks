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

  // код для задачи №2 писать здес

  let paramNames = ['percent', 'contribution', 'amount', 'date']

  let args = Array.from(arguments);

  for(let i = 0; i < args.length - 1; i++){

    let arg = Number(args[i]);

    if (isNaN(arg)){
      let valName = paramNames[i];
      let val = args[i];

      return `Параметр ${valName} содержит неправильное значение ${val}`;

    }
  }


  let currentMonth = new Date().getMonth();

  let currentYear = new Date().getFullYear();

  let yearDiff = date.getFullYear() - currentYear;

  let n = yearDiff * 12 - currentMonth + date.getMonth();

  let S = amount - contribution;

  let P = percent / 100 / 12;

  let monthPayment = S * (P + (P / (((1 + P)**n) - 1)));

  let totalAmount = monthPayment * n;

  totalAmount = totalAmount.toFixed(2);

  console.log(totalAmount);

  return totalAmount;
}

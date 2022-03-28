"use strict";

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь

  let discriminant = b**2 - 4 * a * c;

  if (discriminant < 0){
    arr = [];
  }else if(discriminant === 0){
    let root_0 = -b / (2 * a);
    arr = [root_0];
  }else{
    let root_1 = (-b + Math.sqrt(discriminant) ) / (2 * a);
    let root_2 = (-b - Math.sqrt(discriminant) ) / (2 * a);

    arr = [root_1, root_2];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}

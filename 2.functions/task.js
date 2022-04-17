// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];
  max = arr[0];
  sum = 0;
  // Ваш код

  for(let i = 0; i < arr.length; i++){

    if(arr[i] < min){
      min = arr[i];
    }
    if(arr[i] > max){
      max = arr[i];
    }

    sum += arr[i];
  }

  avg = sum / arr.length;

  avg = avg.toFixed(2);

  avg = Number(avg);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {

  // Ваш код
  let sum = arr.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);;

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let result;

  // Ваш кода
  for(let i = 0; i < arrOfArr.length; i++){
    result = func(arrOfArr[i]);
    if(result > max){
      max = result;
    }
  }

  return max;
}
//
// // Задание 3

function worker2(arr) {

  let min, max, diff;
  // Ваш код
  min = arr[0];
  max = arr[0];

  for(let i = 0; i < arr.length; i++){

    if(arr[i] < min){
      min = arr[i];
    }
    if(arr[i] > max){
      max = arr[i];
    }

    diff = max - min;
  }

  return Math.abs(diff);
}




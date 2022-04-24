function compareArrays(arr1, arr2) {
  let result;

  if(arr1.length !== arr2.length){
    return result = false;
  }

  function isEven(arr1_item) {
    // for (let i = 0; i < arr2.length; i++) {
    //
    // }

    if(arr2[arr1.indexOf(arr1_item)] === arr1_item){
      return true;
    }
  }

  result = arr1.every(isEven);

  return result;

}


function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(function (element) {
    return element > 0;
  })

  resultArr = resultArr.filter(function (element) {
    return element % 3 === 0;
  })

  resultArr = resultArr.map(function (element) {
    return element * 10;
  })
  // Ваш код

  return resultArr; // array
}

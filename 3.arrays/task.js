function compareArrays(arr1, arr2) {

  function isEven(arr1_item, inx) {

    if(arr2[(inx)] === arr1_item){
      return true;
    }

  }

  if(arr1.every(isEven) && arr1.length === arr2.length){
    return true
  }else{
    return false
  }

}


function advancedFilter(arr) {

  let resultArr;

  // resultArr = arr.filter(function (element) {
  //   return element > 0;
  // })
  //
  // resultArr = resultArr.filter(function (element) {
  //   return element % 3 === 0;
  // })
  //
  // resultArr = resultArr.map(function (element) {
  //   return element * 10;
  // })

  resultArr = arr.filter(elem => elem > 0).filter(elem => elem % 3 === 0).map(elem => elem * 10);

  return resultArr; // array
}

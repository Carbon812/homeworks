function parseCount(a){
   let isNum = Number.parseInt(a);
    console.log(Number.isNaN(isNum));
    console.log(isNum);
   if(Number.isNaN(isNum)){

       throw new Error("Невалидное значение");
   }

   return isNum;

}

function validateCount(a) {
    try{

        const result = parseCount(a);
        return result;

    }catch (e) {

        return e;

    }
}


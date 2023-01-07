//Task 1

function parseCount(a){
   let isNum = Number.parseInt(a);
   if(Number.isNaN(isNum)){
       throw new Error("Невалидное значение");
   }
   return isNum;
}

function validateCount(a) {
    try{
        return  parseCount(a);
    }catch (e) {
        return e;
    }
}

//Task 2

class Triangle{
    constructor(side_1, side_2, side_3) {

        this.side_1 = side_1;
        this.side_2 = side_2;
        this.side_3 = side_3;

       if(this.side_1 > this.side_2 + this.side_3 || this.side_2 > this.side_1 + this.side_3 || this.side_3 > this.side_2 + this.side_1){
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter(){
        return this.side_1 + this.side_2 + this.side_3;
    }

    getArea(){
        let p = 0.5 * (this.side_1 + this.side_2 + this.side_3);
        let a = p - this.side_1;
        let b = p - this.side_2;
        let c = p - this.side_3;

        let area = (Math.sqrt(p * a * b * c));

        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try{
        return new Triangle(a, b, c);
    }
    catch (e) {
        return {
            getPerimeter(){
                return "Ошибка! Треугольник не существует";
            },
            getArea(){
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}

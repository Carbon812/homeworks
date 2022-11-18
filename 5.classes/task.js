
//Task 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state = this.state * 1.5;

        if(this.state >= 100){
            return this.state = 100;
        }
        if(this.state <= 0){
            return this.state = 0;
        }
    }

    set state(number){
        this._state = number;
    }

    get state(){
        return this._state;
    }

}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Task 2
//
// class Library {
//     constructor(name, books = []) {
//         this.name = name;
//         this.books = books;
//     }
//
//     addBook(book){
//         if(book.state > 30){
//             this.books.push(book);
//         }
//     }
//
//     findBookBy(key, value){
//
//         let result = null;
//
//         for(let i = 0; i < this.books.length; i++){
//
//             let item = this.books[i];
//
//             if (item.hasOwnProperty(key)) {
//                 if(item[key] === value){
//                     result = item;
//                 }
//             }
//
//         }
//
//         return result;
//     }
//
//     giveBookByName(bookName){
//         // let result = null;
//         let item;
//
//         for(let i = 0; i < this.books.length; i++) {
//
//             let items = this.books;
//
//             item = this.books[i];
//
//             console.log(item.name);
//             console.log(bookName);
//
//             if (item.name === bookName) {
//
//                 console.log(item);
//                 // result = item;
//                 //
//                 let myIndex = items.indexOf(item);
//
//                 if (myIndex !== -1) {
//                     items.splice(myIndex, 1);
//                 }
//             }
//         }
//
//     }
// }

// Task 3

// Student.prototype.addMarks = function (...mark) {
//     //ваш код
//     if (this.marks === undefined) {
//         // добавить первый массив оценок
//         this.marks = mark;
//     } else {
//         // добавить второй и последующий масив оценок
//         this.marks = this.marks.concat(mark);
//     }
// }
// //
// Student.prototype.getAverage = function () {
//     //ваш код
//     if (this.marks !== undefined) {
//
//         let a = this.marks;
//         let b = a.length;
//
//         const initialValue = 0;
//         let sumWithInitial = a.reduce(
//             (previousValue, currentValue) => previousValue + currentValue,
//             initialValue
//         );
//
//         return sumWithInitial / b;
//     }
// }
//
// Student.prototype.exclude = function (reason) {
//     //ваш код
//     this.excluded = reason;
//     delete this.marks;
//     delete this.subject;
// // }
//
// function Student(name, gender, age) {
//     // Ваш код
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
// }
//
// // Student.prototype.setSubject = function (subjectName) {
// //     //ваш код
// //     this.subject = subjectName;
// // }
//
// // ваш код для остальных методов
//
//
// const arr = [
//     // {subject: "", marks: []}
// ]
//
// let arr2;
//
// Student.prototype.addMark = function (mark, subject) {
//
//     // let subjects = [];
//     //
//     // if(!subjects.includes(subject)){
//     //     subjects.push(subject)
//     // }
//
//     arr2 = {subject:subject, marks:[]};
//
//     if(arr2.subject === subject){
//         arr2.marks.push(mark);
//     }else{
//         arr2.subject = subject;
//         arr2.marks.push(mark);
//         arr.push(arr2);
//     }
//
//
//     //ваш код
//     // if (this.marks === undefined) {
//     //     // добавить первую оценку
//     //     this.marks = [mark];
//     // } else {
//     //     // добавить вторую и последующие оценки в массив
//     //     this.marks.push(mark);
//     // }
// }
//
// console.log(arr);
//
// //





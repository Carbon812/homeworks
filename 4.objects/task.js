function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
    //ваш код
    this.subject = subjectName;
}

// ваш код для остальных методов

Student.prototype.addMark = function (mark) {
    //ваш код
    if (this.marks === undefined) {
        // добавить первую оценку
        this.marks = [mark];
    } else {
        // добавить вторую и последующие оценки в массив
        this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark) {
    //ваш код
    if (this.marks === undefined) {
        // добавить первый массив оценок
        this.marks = mark;
    } else {
        // добавить второй и последующий масив оценок
        this.marks = this.marks.concat(mark);
    }
}
//
Student.prototype.getAverage = function () {
    //ваш код
    if (this.marks !== undefined) {

        let a = this.marks;
        let b = a.length;

        const initialValue = 0;
        let sumWithInitial = a.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );
        
        return sumWithInitial / b;
    }
}

Student.prototype.exclude = function (reason) {
    //ваш код
    this.excluded = reason;
    delete this.marks;
    delete this.subject;
}


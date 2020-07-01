function Student(){
    this.name = "mike";
    this.gender = "male"
}

// var st1 = new Student();
// st1.grade = "third"
// console.log(st1.grade)

// var st2 = new Student();
// console.log(st2.grade)

Student.prototype.grade = "third"

var st1 = new Student();
st1.grade = "1"
console.log(st1.grade)


var st2 = new Student();
console.log(st2.grade)

console.log(Student.toString())
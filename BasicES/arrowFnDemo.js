/*let sum = function(a,b){
    return "Sum: "+(a+b)
}
console.log(sum(11,22))

//with arrow
let sumAr = (a,b)=>{return "Sum: "+(a+b)}
console.log(sumAr(11,22))

//simplified
let sumArSim = (a,b)=>"Sum: "+(a+b)
console.log(sumArSim(11,22))

//if only one arg, no need for ()
let sq = a=>"Square: "+(a*a)
console.log(sq(11))

let age = 20;
let welcome = (age>=20) ? ()=>console.log("Hi Welcome") : ()=>console.log("Go home Kid")
welcome();

/*
with arrow fn. - this points to the outer closure, i.e. group, 
cannot run with new. Cant be used as constructors
have no args
no super keywords
*/

let group = {
    title: "JS",
    students: ["Prince","Monami", "Ashwin"],
    showList(){
        this.students.forEach(student => console.log(this.title+" : "+student));
    }
}

group.showList();


//Normal fn - this keyword is there but in this case, arrow fn is better
let group1 = {
    title: "JS",
    students: ["Prince","Monami", "Ashwin"],
    showList(){
        this.students.forEach(function(student) {console.log(this.title+" : "+student)});
    }
}

group1.showList();
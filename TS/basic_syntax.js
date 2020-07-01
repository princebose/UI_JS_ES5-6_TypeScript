/*var message:string = "Hi there";
//var a:string;
var b=22;
var global_c=22;
class a{
    num_val = 10;
    static sval  =12;

    storedNum():void{
        var local_num = 14;
    }
}
console.log(global_c);
console.log(a.sval);

var ob = new a;
console.log(ob.num_val);
console.log(ob.storedNum());
*/
// // use / and %
// var num = 123456;
// var res = 0;
// while (num>0){
//     res+=num%10;
//     num=Math.floor(num/10);
// }
// console.log(res)
// function employee(id:number,name:string, mail_id?:string){
//     console.log("Hi");
// }
// employee(12,"Mrk");
// function addNos(...nums){
//     var sum:number = 0;
//     for (let i = 0; i < nums.length; i++){
//         sum+=parseInt(nums[i]);
//     }
//     console.log(sum)
// }
// addNos([1,2,4,5,5,6,77,2,1,23,4])
// var fn = new Function("a","b","c","return a*b*c")
// console.log(fn(11,22,1))
//Lambda functions- anonymous or arrow functions
// var fn = (x:number)=>100*x;
// console.log(fn(10))
// var fn = (x:any)=>((typeof(x)=="string")?console.log("String"):(typeof(x)=="number")?console.log("Number"):console.log("Others"))
// fn("ands")
// fn(12)
// var arr = [1,2,3,4,5,6]
// var ar=[];
// var i=0;
// ar = arr.reverse();
// // for (let index = arr.length-1; index>=0; index--) {
// //     ar[i++] = arr[index]
// // }
// console.log(ar)
// var t=[10,10,10,"Hi"]
// console.log(t[t.length-1])
//Union to combine dataatypes
// var val:string|number
// val = 12;
// console.log(val)
// val = "Mark";
// console.log(val)
// function disp(name:string|string[]){
//     if (typeof(name)!="string"){
//         for (let index = 0; index < name.length; index++) {
//             console.log(name[index]);
//         }
//     }
//     else{
//         console.log(name)
//     }
// }
// disp("Nmae")
// disp(["asd","asda","Asdasd"])
//INTERFACES
// interface IPerson{
//     firstname:string,
//     lastname:string,
//     dis:()=>string
// }
// var customer:IPerson={
//     firstname:"Tom",
//     lastname:"Alter",
//     dis:():string=>{return customer.firstname+" "+customer.lastname}
// }
// console.log(customer.dis())
// interface IPerson{
//     name:string,
//     dis:string[]|string|(()=>string)
// }
// var a:IPerson = {name:"Mark", dis:[" sda",""]}
// console.log(a.dis)
// var a:IPerson = {name:"Mark", dis:" sda"}
// console.log(a.dis)
// var a:IPerson = {name:"Mark", dis:()=>{return "Hello"}}
// console.log(a.dis())
// interface Person{
//     age:number
// }
// interface Musician extends Person{
//     instrument:string
// }
// var Drummer = <Musician>{};
// Drummer.age = 21;
// Drummer.instrument = "Drums"
// console.log(Drummer.age + " "+ Drummer.instrument)
var Car = /** @class */ (function () {
    function Car(e) {
        this.engine = e;
    }
    Car.prototype.disp = function () {
        console.log(this.engine);
    };
    return Car;
}());
var mazda = new Car("V6");
mazda.disp();

// var car = {
//     name: "Acura NLK",
//     regNo: "1234GTA567"
// }

// function dispDetails(ownerName) {
//     console.log("OwnerName: "+ownerName+" Model: "+ this.name + " RegNo.: " + this.regNo)

// }
// //car.dispDetails()

// // var myCar = car.dispDetails;
// // var myCar = car.dispDetails.bind(car);
// // myCar()

// dispDetails.apply(car,["Sam"])
// //dispDetails.call(car,"Sam")

function car(name,regNo){
    this.name = name
    this.regNo = regNo

    this.display = function(){
        console.log(" Model: "+ this.name + " RegNo.: " + this.regNo)
    }
}

var mycar1 = new car("Mazda RX1","123GFPA1")
mycar1.display()
var mycar2 = new car("Mazda RX2","123G12A44")
mycar2.display()

// var officers = [
//     { id: 20, name: 'Captain Piett' },
//     { id: 24, name: 'General Veers' },
//     { id: 56, name: 'Admiral Ozzel' },
//     { id: 88, name: 'Commander Jerjerrod' }
//   ];
// // officers.forEach(ele => {
// //     console.log(ele.id)
// // });  

// // var ids = officers.map(function(of){
// //     return of.id
// // })

// var ids = officers.map(of=>of.id)
// console.log(ids)

// var pilots = [
//   {
//     id: 10,
//     name: "Poe Dameron",
//     years: 14,
//   },
//   {
//     id: 2,
//     name: "Temmin 'Snap' Wexley",
//     years: 30,
//   },
//   {
//     id: 41,
//     name: "Tallissan Lintra",
//     years: 16,
//   },
//   {
//     id: 99,
//     name: "Ello Asty",
//     years: 22,
//   }
// ];

// var totalYrsExp = pilots.reduce(function(acc,ob){
//   // if (ob.years>20){
//   //   return acc+ob.years
//   // }
//   // else{
//   //   return acc
//   // }
//   return acc>ob.years? acc : ob.years
  
// },0)

// console.log(totalYrsExp)

// var pilots = [
//   {
//     id: 2,
//     name: "Wedge Antilles",
//     faction: "Rebels",
//   },
//   {
//     id: 8,
//     name: "Ciena Ree",
//     faction: "Empire",
//   },
//   {
//     id: 40,
//     name: "Iden Versio",
//     faction: "Empire",
//   },
//   {
//     id: 66,
//     name: "Thane Kyrell",
//     faction: "Rebels",
//   }
// ];

// var rebels = pilots.filter(function(p){
//   return p.faction === "Rebels"
// })

// var empire = pilots.filter(function(p){
//   return p.faction === "Empire"
// })

// console.log(rebels)
// console.log(empire)

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

var total = personnel
  .filter(function(p){
    return p.isForceUser
  })
  .map(function(p1){
    return p1.pilotingScore+p1.shootingScore
  })
  .reduce(function(acc,score){
    return acc+score
  },0)

console.log(total)
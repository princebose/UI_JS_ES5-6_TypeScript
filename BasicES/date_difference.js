var date1 = new Date("01/21/2020")
var date2 = new Date("06/21/2020")

var timeDiff = date2.getTime() - date1.getTime()

var daysDiff = timeDiff / (1000 * 3600 * 24)

console.log(daysDiff)

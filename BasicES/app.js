var num = 334433
var sum = 0
while (num) {
    //document.write(sum)
    sum += num % 10;
    num = num / 10;
}
document.write(sum)
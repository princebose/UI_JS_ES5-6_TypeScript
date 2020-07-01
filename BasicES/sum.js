//can also use ...z instead of arguments
function sum() {
    var res = 0
    var index = 0
    while (index < arguments.length) {
        //console.log(arguments[index])
        res = res+arguments[index]
        index = index+1
    }
    console.log(res)
}


sum(11,22,1,12,33,1)
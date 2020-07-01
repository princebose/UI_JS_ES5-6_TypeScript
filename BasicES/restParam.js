function sum(a,b,...z){
    let sum=0;
    console.log(a)
    console.log(b)
    for (let ele of z){
        sum+=ele
    }
    return sum
}

console.log(sum(1,12,12,12,22))
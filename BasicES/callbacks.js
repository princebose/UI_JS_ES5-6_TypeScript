function first(){

    setTimeout(()=>console.log("First"), 500)
}

function second(){

    console.log("second")
}
first();
second();

function a(value,callback){
    console.log(value);
    callback();
}

a("john", ()=>{console.log("Callback executed")})
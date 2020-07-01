//Scoping
// var -  scoped to ommediate function body
//let - scoped to immediate enclosing blocks

(function fn(){
    var foo = "Foo"
    var bar = "Bar"

    console.log(foo,bar)
    {
        let name = "babel"
        let foo = "Fu"
        console.log(name,foo,bar)
    }
    console.log(foo,bar)
    console.log(name) //wont work, let is a local var
})();

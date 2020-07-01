const object1 = {};

Object.defineProperties(object1,{
    property1:{
        value:100,
        writable:true
    },
    property2:{
        value:23,
        writable:true
    }
});

console.log(object1.property2)
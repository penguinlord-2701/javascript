
// primitive 


//7 types : strings ,numbers , boolean , null , undefiend , symbol
//BigInt


const score = 100 

const scorevalue=100.3

const isLoggedIn= false

const id = Symbol('123')
const id1 = Symbol('123')

console.log(id === id1);

const bigNumber = 3456879521455545445;
console.log(typeof(bigNumber));

//refrences (non primitive)

//arrray , objects, functions 

const heros =["shaktiman","doga","naagraj"];
let myobj ={       // object declaration
    name:"daksh",
    age: 22,
}
const temp = null;
const myfunction = function(){
    console.log("hello world");
}
console.log(typeof(temp));
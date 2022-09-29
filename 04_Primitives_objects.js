//nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true ; // can also be false
let d = BigInt("567") + BigInt(3)
let e = "Amit"
let f = Symbol("I am nice Symbol")
let g
console.log(a,b,c,d,e,f,g)
console.log(typeof b,typeof c,typeof d,typeof e,typeof f,typeof g)

// Non Primitive Data Type -- Objects in Js
const item = {
    "Amit": true,
    "Ankit": false,
    "Mohan": 9,
    "Raj": undefined
}
console.log(item["Mohan"])
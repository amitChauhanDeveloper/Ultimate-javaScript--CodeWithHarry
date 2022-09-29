//Program to add first n natural numbers
/* let sum = 0
let n = prompt("Enter the value of n :")
for (let i = 0; i < n; i++) {
    sum += (i+1)
}
alert("Sum of first " + n + " natural number is " + sum) */

let obj = {
    amit: 90,
    ankit: 85,
    mohan: 95,
    vishal: 55,
    rohan: 65
}
// For in loop

for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a]);
}

// For of loop

for (let b of "amit") {
    console.log(b);
}
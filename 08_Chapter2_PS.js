// Chapter 2 PS
// Problem No 1
/* let age = prompt("What is your age?")
if(age>10 && age<20){
    alert("Your age lies between 10 and 20")
}
else{
    alert("Your age doesn't lies between 10 and 20")
} */

// Problem No 2
/* let age = prompt("Enter the number: ")
switch (age) {
    case '1':
        alert("Today is a Monday")
        break
    case '2':
        alert("Today is a Tuesday")
        break
    case '3':
        alert("Today is a Wednesday")
        break
    case '4':
        alert("Today is a Thusday")
        break
    case '5':
        alert("Today is a Friday")
        break
    case '6':
        alert("Today is a Saturday")
        break
    case '7':
        alert("Today is a Sunday")
        break
    default:
        alert("Enter the valid number..");
}
 */
// Problem No 3
/* let num = prompt("Enter the number: ")
num = Number.parseInt(num)
if(num % 2 ==0 && num % 3 == 0){
    alert("Your number is divisible by 2 and 3")
} 
else{
    alert("Your number is not divisible by 2 and 3")
} */
// Problem No 4
let num = prompt("Enter the number:")
num = Number.parseInt(num)
if ((num % 2 == 0 && num % 3 == 0) || (num % 2 == 0 || num % 3 == 0)) {
    alert("Your number is divisible by 2 either 3")
}
else {
    alert("Your number is not divisible by 2 either 3")
}

//Problem No 5
let age = prompt("Enter your age ?")
let a = age >= 18 ? "Yes you can drive": "No you can not drive"
alert(a)


let a = prompt("Hey whats your age?");
a = Number.parseInt(a) //Converting the string to a number
console.log(typeof a);
if (a >= 18) {
    alert("You are valid for driven license");
}
else {
    alert("You are not valid for driven license");
}

if (a < 0) {
    alert("This is invalid age");
}
else if (a < 9) {
    alert("You are a kid and you cannot even think of driving");
}
else if (a < 18 && a >= 9) {
    alert("You are a kid and you can think of driving after 18");
}
else {
    alert("You can drive as you are above 18");
}
console.log("You can", (a < 18 ? "not drive" : "drive"));
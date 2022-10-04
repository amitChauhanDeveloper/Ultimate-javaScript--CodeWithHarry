const hello = () =>{
    console.log("Hey how are you. I am fine and you ?");
    return "I am also fine"
}
function onePlusAvg(x,y) {
    return 1+(x+y) / 2
    
}

const sum = (p,q)=>{
    return p+q
}

let a = 1;
let b = 2;
let c = 3;
let v =hello();
console.log(v);
console.log("One Plus Average of a and b is", onePlusAvg(a,b));
console.log("One Plus Average of b and c is", onePlusAvg(b,c));
console.log("One Plus Average of c and a is", onePlusAvg(c,a));
console.log(sum(9,6));
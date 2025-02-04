const userEmail = "abhya@google.com"
// assuming string value as truth - truthy

if(userEmail) {
    console.log("Got user email");
}
else {
    console.log("Please input email");
}

/*
FALSY VALUE ---> false, 0, -0, BigInt 0n, "", null, UNdefined, NaN

TRUTHY VALUE ---> "0", 'false'," ", [], {}, function(){}
*/

// if(userEmail.length === 0) {
//     console.log("array is empty");}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

/*
    false == 0 ----> true
    false == '' ----> true
    0 == '' ----> true
*/

// NULLISH COALESCING OPERATOR (??) null undefined

let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15

val1 = null ?? 10 ?? 20 //10
console.log(val1);

// TERNIARY OPERATOR

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80");;
// let n1 = +prompt("Enter Number 01 :");
// let n2 = +prompt("Enter Number 02 :");

function add(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        console.log("Enter Valid Number");
        return "Invalid input";
    } else {
        return n1 + n2;
    }
}

let result = add(n1, n2);
if (result !== "Invalid input") {
    console.log(`Sum of two numbers is : ${result}`);
}


// add(n1,n2)



// function subtract(n1,n2){
//     return n1 - n2
// }
// // subtract(n1,n2)
// console.log(`Subtraction of two numbers is : ${subtract(n1,n2)}`)



// function multiply(n1,n2){
//     return n1 * n2
// }
// // multiply(n1,n2)
// console.log(`Multiplication of two numbers is : ${multiply(n1,n2)}`)



// function divide(n1,n2){
//     return n1 / n2
// }
// // divide(n1,n2)
// console.log(`Division of two numbers is : ${divide(n1,n2)}`)



// function modulus(n1,n2){
//     return n1 % n2
// }
// // modulus(n1,n2)
// console.log(`Modulus of two numbers is : ${modulus(n1,n2)}`)



// function power(n1,n2){
//     return n1 ** n2
// }
// // power(n1,n2)
// console.log(`Power of number is : ${power(n1,n2)}`)

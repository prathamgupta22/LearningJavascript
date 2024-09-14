// let var const
// scope

var a = 5;
//var is functional scopt

// const and var are block scope

// let has a variable shadowing property
// function test() {
//   let a = "Hello";

//   if (true) {
//     let a = "Hi"; // this a will shadow above a and will pas a as hi
//     console.log(a);
//   }
//   console.log(a); // it will have access to hello
// }
// test();

//but we cannot shadow let using var
// it will throw variable is already present
//it is called illegal shadowing

// function test() {
//   let a = "Hello";

//   if (true) {
//     var a = "Hi"; //throw a error a is already declared
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// function test() {
//   let a = "Hello";

//   if (true) {
//     const a = "Hi"; // this a const can shadow above let a and will pas a as hi
//     console.log(a);
//   }
//   console.log(a); // it will have access to hello
// }
// test();

// we cannot redeclare let
// let a;
// let a;error
// var can be redeclare

//REINITIALISATION
// WE CAN REINITIALIZE LET AND VAR BUT NOT CONST
// let a = 5;
// a = 8;

// HOISTING
console.log(count); //undefined bcz of hoisting
var count = 1;

console.log(num); //cannot acces num before initialisation
let count = 1;

//let and var are hoisted in temporal dead zone = variable are in scope but they are not declared yet

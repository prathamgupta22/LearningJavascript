//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
//symbol is define some unique features

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
//id and another id are not same as they are defined by symbol

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

//non primitive datatypes is function ogj
// https://262.ecma-international.org/5.1/#sec-11.4.3

//stack(PRimititive) , heap(non - primitive)

let my = "pratham";
let another = my;
another = "gupta";
my = "na na na";
console.log(my);
console.log(another);

let userone = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

let usertwo = userone;
usertwo.email = "pg@";

console.log(userone.email);
console.log(usertwo.email);

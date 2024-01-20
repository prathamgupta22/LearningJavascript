const score = 400;
console.log(score);
//js automatically founf it is datatype of  number

const balance = new Number(100);
console.log(balance); //output Number:100

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //indian standar means hundred thosand lakhs

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); //its an object
// console.log(Math.abs(-4)); //negative converts to positibve
// console.log(Math.round(4.6)); //ouput 5
// console.log(Math.ceil(4.2));  // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8));//8

console.log(Math.random()); // it will a;ways give value between 0 - 1
console.log(Math.random() * 10 + 1); // minimum value wold be 1 nmeans it will give 1 - 9
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

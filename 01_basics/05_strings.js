const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");

//string interpolation modern way of add in betwween string mostly used in backend
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com");

// console.log(gameName[0]); // h
// console.log(gameName.__proto__); output{}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const game = "pratham";
const newString = game.substring(0, 4);
console.log(newString);

const anotherString = game.slice(-7, 4);
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));

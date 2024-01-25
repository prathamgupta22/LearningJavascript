// array
//inside array in js there is a length properperty and a prototype of array
const myArr = [0, 1, 2, 3, 4];
const myHeroes = ["shaktiman", "naagraj"];
console.log(myArr[0]);

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2[1]);

//array methods
myArr.push(6);
console.log(myArr);
myArr.pop(6);
console.log(myArr);
myArr.unshift(9);
console.log(myArr);
myArr.shift(9);
console.log(myArr);

console.log(myArr.includes(4)); // if exist true else false
console.log(myArr.indexOf(4)); //if value not exit -1 else index

const newarr = myArr.join();
console.log(myArr); // type array
console.log(newarr); //type string join convert array into string

// slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myn1);

const myn2 = myArr.splice(1, 3);
console.log("C ", myn2);

console.log("A", myArr);

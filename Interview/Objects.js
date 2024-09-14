// Objects in js
// In JavaScript, objects are one of the fundamental building blocks used to group data and functionality. They allow you to store collections of data and more complex entities.

// const user = {
//   name: "Pratham",
//   age: 24,
//   "like this video": true,
// };

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// delete user.age;
// console.log(user["like this video"]);
// delete user["like this video"];
// console.log(user);

//dynamic key value to object

// const property = "firstName";
// const name = "Piyush agarwal";

// const user2 = {
//   [property]: name,
// };
// console.log(user2.firstName);

// const user = {
//   name: "Pratham",
//   age: 24,
//   isTotallygood: true,
// };
// for (key in user) {
//   console.log(user[key]);
// }

// const user2 = {
//   a: "A",
//   b: "b",
//   a: "c",
// };
// console.log(user2);
// IF TWO KEYS ARE SAME THEN LAST KEY WILLBE PRINTED

//CREATE A FUNCTION MULTIPLIER THAT MULTIPLIES ALL NUMERIC PROPERTY BY 2
// let nums = {
//   a: 100,
//   b: 200,
//   c: "My nums",
// };

// function check(nums) {
//   for (keys in nums) {
//     if (typeof nums[keys] == "number") {
//       nums[keys] = nums[keys] * 2;
//     }
//   }
// }

// check(nums);
// console.log(nums);

//json.stringify and json.parse
const user = {
  name: "test",
  age: 16,
};

const obj = JSON.stringify(user);
// console.log(obj);
localStorage.setItem("user", JSON.stringify(user));
//the most way where i can use this is in when storing data in local storage

console.log(localStorage.getItem(JSON.parse("user")));

console.log(JSON.parse(obj));

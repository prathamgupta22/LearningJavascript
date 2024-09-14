const evenNumbers = [0, 2, 4, 6, 8];

// some method used loop with some extra method
// evenNumbers.some((num, index, array) => {
//   console.log(num, index, array);
// });

// evenNumbers.some((num) => {
//   return null;
// });
//if we return truth value it will say true else for falsy value it will return false

// console.log(
//   evenNumbers.some((num) => {
//     return num > 4;
//   })
// );
//agar ek value bhi true hai toh overall answer true

// console.log(
//   evenNumbers.some((num, index) => {
//     if (num % 2 === 1) console.log(num, index);
//     return num % 2 === 1;
//   })
// );

//EVERY SABKA LIA CHECK KRTA HAI JAISA SOME MAI EK BHI TRUE TOH TRUE BUT IN EVERY SAB TRUE HONA CHAIYA

const result = evenNumbers.every((num) => {
  return num % 2 === 0;
});
// console.log(result);

// const num = [
//   { name: "pratham", rollno: 6 },
//   { name: "aratham", rollno: 5 },
//   { name: "bratham", rollno: 4 },
//   { name: "cratham", rollno: 3 },
//   { name: "dratham", rollno: 2 },
// ];

// console.log(num.sort((a, b) => a.rollno - b.rollno));

// // const a = ["zaaa", "yss", "addcd", "basdsa", "casdas"];
// // console.log(a.sort());

// const num = [
//   { name: "pratham", rollno: 6 },
//   { name: "aratham", rollno: 5 },
//   { name: "bratham", rollno: 4 },
//   { name: "cratham", rollno: 3 },
//   { name: "dratham", rollno: 2 },
// ];

// console.log(num.sort((a, b) => a.name.localeCompare(b.name)));

// const arr = [1, [2, 3], [[4, 5], 6], [[[[[9, 0]]]]]];

// // let ans = [];
// // for (let i = 0; i < arr.length; i++) {
// //   if (!Array.isArray(arr[i])) {
// //     ans.push(arr[i]);
// //   }
// // }
// let newArr = [];
// function check(arr) {
//   arr.map((item) => {
//     if (Array.isArray(item)) {
//       check(item);
//     } else {
//       newArr.push(item);
//     }
//   });
// }
// check(arr);
// console.log(newArr.sort());

const student = {
  name: "pratham",
  rollno: 6,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  marks: {
    math: 95,
    science: 88,
    english: 92,
  },
};

let newObj = {};

function check(obj) {
  const keys = Object.keys(obj);

  keys.map((item) => {
    if (typeof obj[item] === "object") {
      check(obj[item]);
    } else {
      newObj[item] = obj[item];
    }
  });
}

check(student);
console.log(newObj);

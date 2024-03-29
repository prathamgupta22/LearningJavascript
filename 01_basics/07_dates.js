// dates
let myDate = new Date(); //date object and its current instance
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); //object

let myCreateDate = new Date(2023, 0, 23);
//months start from 0 in js
console.log(myCreateDate.toDateString());

let myCreateDate2 = new Date("2023-01-14");
console.log(myCreateDate2);

let myCreateDate3 = new Date(2023, 0, 23, 5, 3);
console.log(myCreateDate3);

let mydate = new Date("01-14-2023");
console.log(myDate);
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
});

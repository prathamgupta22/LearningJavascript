function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

sayMyName(); // () means function execution
//saymyName is just a reference to function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }//its wrong as it will give undefined

function addTwoNumbers(number1, number2) {
  //parameter

  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5); //3 , 5 are arguments
console.log("Result: ", result);

function loginUserMessage(username) {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`; // ` interpolation of string `
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "nanana",
  price: 500,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

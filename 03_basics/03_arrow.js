//this keyword  current context ko refer karta hai
const use = { 
    username : "pratham",
    price:999,
    WelcomeMessage : function() {
        console.log(`${this.username} ,welcome to website`); 
        console.log(this);
    }
}

user.WelcomeMessage();
user.username = "Sam"
// user.WelcomeMessage() now sam will be printed as sam is now the current context
console.log(this);

// function chai(){ 
//     let username = "hitesh"
//     console.log(this.username); //typeof username not defined as in function it cannot be defiend
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//Arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this); //empty parenthesis 
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 //explicit return when we have to use returhn function
// }

// const addTwo = (num1, num2) =>  num1 + num2 implicit function it will comsider return is  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) error
//as with curly we have to use return function

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(()=>{})
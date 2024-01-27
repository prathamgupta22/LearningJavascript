//object literalll means literallly ek object banana
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("got user details");
    // console.log(`Username : ${this.username}`);
    console.log(this); // it will return current object
  },
};
// console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // empty parenthesis
// to know about the current context this keyword is used

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne);
console.log(userTwo);
//constructor function har baar ek naya instance deta hai
console.log(userOne.constructor);
//referce khud hi ka baare mai

function SetUsername(username) {
  // Complex DB calls or other operations
  this.username = username;
  console.log("SetUsername called");
}

function createUser(username, email, password) {
  // Using SetUsername as a constructor with 'new'
  SetUsername.call(this, username);
  //explicitly calling function
  //reference hold karna ka liya
  //refernce means return value or set value

  // Setting other properties
  this.email = email;
  this.password = password;
}

// Creating a new user object
const chai = new createUser("chai", "chai@fb.com", "123");

// Logging the created user object
console.log(chai);

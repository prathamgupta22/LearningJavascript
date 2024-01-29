class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //getter to get the value
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}hitesh`;
  }

  //set value in class
  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);

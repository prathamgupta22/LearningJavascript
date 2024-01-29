const User = {
  _email: "h@hc.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

//kiss object ka basis pa functio create karu
const tea = Object.create(User);

console.log(tea.email);

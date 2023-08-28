//singleton
//object literal method to declare object
//hamesa . sa hi access karenga object ko but in some cases like symbol we use square bracket[] 
const mySym = Sumbol("key1");

const JsUser = {
    name:"hitest",
    "fullname":"pratham gupta",//fullname cannot be accessed with . operator
    age:18,
    location:"jaipur",
   [ mySym]:"mykey1",//sumbol print and acess interview ques
    email: "pratham@gmail.com",
    isloggedin:false,
    lastLoginDays:["monday", "saturday"]
};//object

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullname"])
console.log(JsUser[mySym]) //wrong as it convert it into String
 
// JsUser.email = "p@123"
// Object.freeze(JsUser.email)//now email cant be changed
// JsUser.email = "ppa@123"

console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello")
}
JsUser.greetingTwo = function(){
    console.log(`hello, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

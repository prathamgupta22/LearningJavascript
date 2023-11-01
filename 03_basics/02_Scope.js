//{} is known as Scope
//let a = 300; it can be used any where as it declared globally means gloabal scope

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a); //it will be printed as it is under the scope
}
// console.log(a) //  a is not defined as let follows scope and it can be use in IF BLOCK
// console.log(b) SAME AS LET IT HAS SCOPE
// console.log(c) ANS = 30 VAR DOESNT FOLLOW SCOPE
//THATS WHY WE GENERALLY DO NOT USE VAR

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // it will throw error as website is defined under funtion two 
    // and can be access only in function two not outside of it
    two()
}
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))//function can be callled before declaratioj

function addone(num){
    return num + 1
}

addTwo(5) // as variable is defined afterwards
const addTwo = function(num){ //some time know as expression
    return num + 2
}
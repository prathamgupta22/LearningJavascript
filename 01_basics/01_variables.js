const accountId = 144553 //const is something which cannot be changes
let accountEmail = "honest.pratham11.com"
var accountPassword = "1234"
accountCity = "JaipuR"
let accountState

//accountId = 2 const cannot be changed

accountEmail = "hc@hc.com"
accountPassword = "2424"
accountCity = "jbp"

console.log(accountEmail)
console.table([accountId,accountEmail,accountPassword, accountCity, accountState])

/*in todays time prefered not to use var
because of issue in block scope and funcitional scope
if we want to change a city in a particular scope but in var it will change everywhere
*/
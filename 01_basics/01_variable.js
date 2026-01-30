/*Software mai keywords ka role pre-assigned h
yha let,var,const - memory assign*/ 
const accountId = 144553 //const-permanent value
let accountEmail = "push345@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //it is possible but not preferred
let accountState; //undefined 

// accountId = 2 //not allowed because of const

accountEmail = "abc.com"
accountPassword = "1211"
accountCity = "Bengal"

/*
prefer not to use var 
because of the issue in block scope and functional scope
*/

console.log(accountId);

// to show in list
console.log([accountId, accountEmail, accountPassword, accountCity]);

// to show in table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



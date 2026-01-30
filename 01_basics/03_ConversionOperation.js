// "33" - 33
// "33abc" - nan -type number
// true = 1 

/*

let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let score1="33abc"
console.log(typeof score1);
let value = Number(score1) //Nan specialtype
console.log(value);
console.log(typeof value);


let score2=null
console.log(typeof score2);
let value2 = Number(score2) //Nan specialtype
console.log(value2);
console.log(typeof value2);

let score3=undefined
console.log(typeof score3);
let value3 = Number(score3) 
console.log(value3);
console.log(typeof value3);

let score4=true
console.log(typeof score4);
let value4 = Number(score4)
console.log(value4);
console.log(typeof value4)

//Similarly Boolean(score),String (score) and other datatypes are used


// let islogin = 1
// let islogin = "" 
let islogin = 'hiter'

let booleanIsLogin = Boolean(islogin)
console.log(booleanIsLogin);

// 1<=> true ,0<=>false
// " " = false , " string" =true


*/
//**************   Operations    ************


let value = 3
let negval = -value
console.log(negval);

/*
console.log(2+2);
console.log(2-2);
console.log(2*7);
console.log(2/3);
console.log(2%6);


let str1="hello"
let str2=" world"

let str3 = str1+str2
console.log(str3);

//it will not sum it will print side by side(horizontally) 
console.log("1" + 2);  //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2);//122

//it will add also by guildline

console.log(1 + 2 + "2"); //32

console.log(1 + 2 * 2 /3%5); //dont use bad method

console.log((1 + 2) * 3 % 6); //correct method
*/


console.log(true);
console.log(+true); //bad 
console.log(+""); //bad 

let num1,num2,num3

num1 = num2 =num3 =2+2 //bad

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);

//https://tc39.es/ecma262/#sec-type-conversion
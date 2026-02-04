// const score = 400


// const balance = new Number(100)//number is datatype in js 
// console.log(balance);

// console.log(balance.toString().length); //tells the length of string
// console.log(balance.toFixed(2)); //places after decimal 100.00

// const num = 23.4897
// console.log(num.toPrecision(3))//priority before decimal 
// //kind of round off system 23.48 = 23.5 ,

// const num2 = 123.4897
// console.log(num2.toPrecision(3)) // 123

// const num3 = 1123.4897
// console.log(num3.toPrecision(3)) // converts to exponential 1.12e+3

// //Representation of numbers 
// const a = 100000000
// console.log(a.toLocaleString('en-IN')); 

// Number.toString      // various other methods

//*********************Maths**********************************/
// console.log(Math); //Various methods
// console.log(Math.abs(-4)); //convert negative to positive 
// console.log(Math.round(4.87)); //round off the given decimal
// console.log(Math.ceil(4.9)); //round off the given decimal to upper
// console.log(Math.floor(4.9)); //round off the given decimal to lower
// console.log(Math.min(4.9,1,0,6.0)); //min value
// console.log(Math.max(4.9,1,0,6.0)); //max value

console.log(Math.random()); //takes a random value 0-1
console.log((Math.random()*10)+1); //gives values between 0-9
console.log(Math.floor((Math.random()*10)+1)); 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1))+min); //math.floor +  min
console.log(Math.floor(Math.random()*(max - min +1))+min); //math.floor +  min
console.log(Math.floor(Math.random()*(max - min +1))+min); //math.floor +  min


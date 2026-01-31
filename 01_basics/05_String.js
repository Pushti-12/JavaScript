const name = "Pushti"
const num = 90

//console.log(name + num +  " value");

//string interpolation
// console.log(`Hello my name is ${name} and my num is ${num}`);

const gname = new String("Pushti-Agrawal")

// console.log(gname[0]);
// console.log(gname.__proto__);




// console.log(gname.length);
// console.log(gname.toUpperCase());
console.log(gname.charAt(2));
console.log(gname.indexOf('x'));


const newString = gname.substring(0,3)
console.log(newString);


const newString1 = gname.slice(-5,3)
console.log(newString1);


const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"

console.log(url.replace('11', '30'));

console.log(url.includes('hitesh'));
console.log(gname.split('-'));






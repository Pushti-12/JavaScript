const myArr = [8,1,2,3,4,5]
const myHeroes =["shaktiman","batman"]

//method 2
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);   //for accessing 

//Array methods
// myArr.push(7)
// myArr.push(2)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr);

// const arr = myArr.join()

// console.log(myArr);
// console.log(arr);
// console.log(typeof arr);

//slice or splice 

console.log("A", myArr); //original array 
const myn1 = myArr.slice(1,3)

console.log(myn1); //result of slicing
console.log("B", myArr); //is there anychanges in originalk array after slicing

const myn2 = myArr.splice(1,3)
console.log(myn2);    //result of splice
console.log("C", myArr);   //changes in ori array



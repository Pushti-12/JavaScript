//singleton - object mde using constructor
//object.create

//declaration symbol
// const mySym = Symbol("key1")
const mySym1 = Symbol("key2")

//object declaration using literals 

const JsUser = {
    name: "Pushti",
    age: 20,
    // mySym: "mykey1",
    [mySym1]: "mykey2",
    location: "jaipur",
    isLogin: false,
    email: "prishi00@gmail.com",
    lastLoginDays: ["Monday","Saturday"]
}      //object

// console.log(JsUser.email);          //not so goood 
// console.log(JsUser['email']);       //best

// console.log(typeof JsUser.mySym);
// console.log(typeof mySym1); //symbol type 

// //freezing 
// JsUser.email = "pushti@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "riya@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    // console.log("Hello Js User");
    return "Hello Js User"
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
    return  
}
console.log(JsUser.greeting2());

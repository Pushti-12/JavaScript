// const tinderUser = new Object()
const tinderUser = {}
console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Pushti"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "me00@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pushti",
            lastname: "agrawal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}   
const obj2 = {3: "c", 4: "d"}       

const obj3 = Object.assign({}, obj1, obj2)  //merging objects
console.log(obj3);

const obj4 = {...obj1, ...obj2}  //merging objects using spread operator
console.log(obj4);  
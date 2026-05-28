let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

//let  myCreatedDate = new Date(2026,0,23)
// let  myCreatedDate = new Date(2026,0,23,5,3)
// let  myCreatedDate = new Date("2023-01-24")
// let  myCreatedDate = new Date("01-24-2026")

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// -----------------------Timestamp--------------
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

//------------------for complex program----------
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1); //count from 0 so add 1
// console.log(newDate.getDay());

//-----string interpolation-----------
// '${newDate.getDay()} and the time '

//we can also define propertes----------------------------------
newDate.toLocaleString('default',{
    weekday:"long",
    hour:"2-digit"
})





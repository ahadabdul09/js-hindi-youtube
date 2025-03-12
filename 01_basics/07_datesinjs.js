// DATE

let myDate = new Date()
// console.log(myDate.toString());  // o/p : Wed Mar 12 2025 16:06:57 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // o/p : Wed Mar 12 2025
// console.log(myDate.toISOString()); // o/p : 2025-03-12T16:06:57.289Z
// console.log(myDate.toJSON());  // o/p : 2025-03-12T16:06:57.289Z
// console.log(myDate.toLocaleDateString());  // o/p : 3/12/2025
// console.log(myDate.toLocaleString()); // o/p : 3/12/2025, 4:06:57 PM

// console.log(typeof myDate)    // Object


// const myCreatedDate = new Date(2034, 3, 34, 5,3,43); // created your own date and time first 3 for date and rest for time, month start from 0
// const myCreatedDate = new Date("2034-03-23"); // another way to daclare a date yyyy-mm-dd
const myCreatedDate = new Date("01-11-2045"); // dd-mm-yyyy
//console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()     // used when you create poll who was fast and when u design a quiz it is being used

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  // by doing so u can compare the dates as they are in milli seconds and it will be converted into time
// Date.now will give date of current in milli sec 

//console.log(Math.floor(Date.now()/1000)); // /1000 this will convert milli sec to sec and Math.floor is used to get the round of

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate()); // you will gate the date
console.log(newDate.getDay());  // you will get the day
console.log(newDate.getMonth() + 1); // u will get the month +1 is added cause month starts with 0

console.log(`todays date is ${newDate.getDate()} and time is ${newDate.toLocaleTimeString()}`);

newDate.toLocaleString('dafault',{
    weekday: 'long'
});

console.log(newDate.toLocaleString('dafault',{  // here you can modify the changes that you want 
    weekday: 'narrow',
    hour: '2-digit'
}));

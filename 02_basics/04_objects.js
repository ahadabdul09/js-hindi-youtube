//const tinderUser = new Object()  // singleton obkject
const tinderUser = {}  // non singleton object
tinderUser.id = "123abd"
tinderUser.name = "ahad"
tinderUser.loggedIn = false

//console.log(tinderUser);

const regularUser = {  
    email: "somegamil.com",
    fullName:{
        userFullName:{           // object inside another object 
            lastName: "ahad",
            firstname: "abdul",
        }
    }
}
//console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

//const obj3 = {obj1 , obj2}  // o/p: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } the obj will get added as an array 
//const obj3 = Object.assign(  {}, obj1, obj2) // o/p: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } {} this is the target element and rest are source and the new value is stored in this {}
//console.log(obj3);

 const obj3 = {...obj1,...obj2}  // spread operator  // o/p: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  will use this only
 //console.log(obj3);
 

const user = [
    {

    },
    {

    },
    {

    }
]

user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));   // will get all the key values
// console.log(Object.values(tinderUser));   // will get all the values
// console.log(Object.entries(tinderUser));  // will divide each array into array 

// console.log(Object.hasOwnProperty('name'));  // will check if that property is present in that obj or not // will return boolean value


const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"ahad"
}

//console.log(course.courseInstructor); you can use this 

// you can access the object contents by doing so, you can destructure it by doing this

const {courseInstructor: inst} = course   // by doing so u with just have to write the members name and not the objects name , in {} the other is the name given, if u use that name then that member will be called
//destructure of the value is done above in {}
console.log(inst)

// {   // json   ye object notation hai
//     "name": "ahad",       // here the key and the value both are stored in string format
//     "fullname": "abdulahad"
// }


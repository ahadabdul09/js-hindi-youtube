const coding = ["java","ruby","js","cpp"];

// coding.forEach( function (item) {  //8:14:50 on kiya hai ye
//     console.log(item);   
// })
// coding.forEach( (item) => {  // using arrow f'cn
//     console.log(item);
    
// })

// function printMe(item){  // u can declare a function and then call the reference 
//     console.log(item);
// }
// coding.forEach(printMe) reference of the f'n is used

// coding.forEach( (item,index,arr)=> { // u can pass more paramenter int his foreach loop like index to get the index number as well as the arr
//     console.log(item,index,arr);
    
// });

const myCoding = [
    {
        myLang: "javaScript",
        myName: "js"
    },
    {
        myLang: "java",
        myName: "j"
    },
    {
        myLang: "Script",
        myName: "s"
    }
]

myCoding.forEach( (item) => {
    console.log(item.myLang);  // we can access the array ka object and then the value of that object which it stores
})
const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby'
}
//for in loop is used for object to iterate
for (const key in myObject) { 
    //console.log(key); will give only the key
    //console.log(myObject[key]); // give value of the key
}

const prgm = ["js","ruby","stark"]

for (const key in prgm) {
   //console.log(key); //u will be grtting the value 0 1 2 as they are the key for yhis array
   //console.log(prgm[key]); // by doing so u will be getting the value to the keys
}

// const map = new Map()
// map.set('IN', "INDIA")
// for (const key in map) {
//     console.log(key);  // map is not iteratable
// }


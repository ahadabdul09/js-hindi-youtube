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
   console.log(key);
   
}
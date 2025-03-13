// Arrays  do read about arrays in mdn 

const myArr = [1,2,3,4,5,6]
//console.log(myArr[0]); // access the element by using index

// Array Methos

//myArr.push(6)   // add element at the end of the array
//console.log(myArr);

//myArr.pop()   // remove an element from the end of the array
//console.log(myArr);

//myArr.unshift(8); // you will add that element at the start of that array and the rest of the element will be shifted to right
//myArr.shift()   // it is same as pop, it will remove element from the start of the array
// console.log(myArr);

// console.log(myArr.includes(3));  // it will tell if that element is present or not in the array
// console.log(myArr.indexOf(4));   // will give the index of that element 

// const newArr = myArr.join();  // .join will convert the array to string
// console.log(typeof newArr);

// slice, spice

console.log("A",myArr);

const myn1 = myArr.slice(1,3); // return a copy of a section of an array and the max range is not included

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);   // it manipulates the original array // diff b/w slice and spice
console.log("C",myArr);

console.log(myn2);

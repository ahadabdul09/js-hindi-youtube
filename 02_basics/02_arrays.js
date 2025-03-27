const marvel_heros = ["thor","Ironman","spiderman"]
const dc = ["superman","batman","flash"]

//marvel_heros.push(dc)

// console.log(marvel_heros);  // other arr is added in the first array as an element
// console.log(marvel_heros[3][2]);

// const newArr = marvel_heros.concat(dc) // it will concatenate two array and then store it in the new array
// console.log(newArr);   // limited to add only two at a time

const all_new_heros = [...marvel_heros, ...dc]   // here u can add as many arr u want by just using ...arrName
//console.log(all_new_heros);        // called it as a spread operator breaks all the elemets of the arrays and then add them together

const array1 = [1,2,3,[4,2,5],3,5,[3,6,7[1,8,4,[3,6,2]]]]
// console.log(array1);

const real_array1 = array1.flat(Infinity); // it will return a new array in which all the sub array is added recursively
// console.log(real_array1);

// when ever we take data from diff site we get in the form of nodelist object or anything else but we want it in array

console.log();


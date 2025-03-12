const name = "ahad"
const namee = " abdul"
// console.log(name + namee);

console.log(`my name is ${namee.toUpperCase()} and ${name}`);   // use this to print the op

const newName = new String('abdul-ahad-india-bahrain');    // new way to declare a string
console.log(newName[0]);                     // accessing the keys of the String by placing the index number in []`

// console.log(newName.length);  // you can use function by using . nd the functions name 

// console.log(newName.toUpperCase());
// console.log(newName.charAt(3));   // you will get the char at that index 
console.log(newName.indexOf('h'));    // you will get the index of that element

const newString = newName.substring(0,4);  // if you pass an negaative number then this fn will ignore it and will start from 0
console.log(newString);

const anotherString = newName.slice(-1,4);  // here you can use negative value and the minus indicate that the string start from the end
console.log(anotherString);

const newStringOne = "   ahad   ";
console.log(newStringOne);

const anotherStr = newStringOne.trim()  // this fn will remove the blank spaces from the string
console.log(anotherStr);

const url = "https://abdulahad.com/abdul%20ahad"

console.log(url.replace('%20', '-'));  // it will replace %20 with - 
console.log(url)

console.log(url.includes('ahad'));   // this will check if that element is present in the string or not

console.log(newName.split('-'));   // it will split the string where ever - is present

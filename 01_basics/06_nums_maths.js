const number = 400

let balance = new Number(100)   // you will be getting the number only
// console.log(balance);
// console.log(typeof(balance));

// console.log(balance.toString().length);  // by doing so you have converted the number into string
// console.log(balance.toFixed(5)); // here while u use fixed fn u have to pass a parameter in this which will let u know the number of decimal point u will get


balance = balance.toString()

// console.log(typeof balance);

const otherNumber = 45.345
// console.log(otherNumber.toPrecision(4)); // it will round off the number by the number of digit which is passed in the argument // use wisely use it when u know that you will get fixed value like 3 or 4 or etc

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')); //by default ',' will be placed as us stand if we want ind then pass en-IN in ' ' then u will get in india stnd 


//++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++=

// console.log(Math)
// console.log(Math.abs(-4));  // abs is absolute value it will convert negative to positive numbers
// console.log(Math.round(5.7)); // it will round off the number to it nearest digit
// console.log(Math.ceil(4.1)); // by using ceil u will get the top value of that integer
// console.log(Math.floor(4.2)); // it will give the lower number

console.log(Math.random()); // it will give u random value from 1 to 0 
console.log(Math.random() * 10);  // u will get number in first place
console.log((Math.random()*10) + 1); // by doing do u will get number greater than 1

const min = 10;
const max = 15;

console.log(Math.floor(Math.random()*(max - min + 1)) + min); // (max- min + 1) this is to put the range limit to the random variable, + min shifts the range do that the value starts from min


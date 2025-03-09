// Primitive  call by value

// 7 types : String, number, booleqan, null, undefined, Symbol, BigInt

// js is dynamic typed cause which means the variables can hold values of diff types during runtime

const number = 100
const numberValue = 100.3  // both comes under numbers there is no diff for decimal 

const isLoggedIn = false  // boolean are used in such a way   // return type is boolean
const outSideTemp = null // it means it's empty       // return type is object
let userEmail; // undefined

const id = Symbol('123')       // return type is of Symbol
const anotherId = Symbol('123')   // the result of both the symbol is diff 

console.log(id === anotherId)


// Reference type / non premitive  in memory there refernce are allocated 

// Array, Objects, Functions

const heros = ["abdul", "ahad"]   // array they are placed in [ ] brackets, refrence type  // return type is object
let myobj = {            // you can store the array in a variable    // return type is object
    name : "ahad",    // thsi is an  object, they are in { } brace, they have a key value
    age : 34
}

// you can treat a function as a variable

const myFunction = function(){       // myFunction return type is function
    console.log("hello world");
}

myFunction();

console.log(typeof myobj)  // typeof will geet the datatype of that element 
                                // typeof null is object
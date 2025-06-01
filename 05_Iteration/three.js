// for of

//[" "," "] // string store krta hai
//[{},{}] // object

const arr = [1, 2, 3, 4, 5]

for (const num of arr){ 
    //(const iterater of object) obj mtlb kis cheeez pe aand not the actual object, it will get all the value of object
    //console.log(num);
}

const greeting = "HELLO WORLD!!";
for (const greet of greeting) {
    if(greet == " ")
        break;
    //console.log(greet);
    
}

//MAPS
// array jaisa hota hai bs thoda iteration change hote hai isme 
// hold key-value pairs, stores only unique values 
const map = new Map()
map.set('IN', "INDIA")
//console.log(map);

for (const [key,value] of map) { //[key, value] this is used to destructure tha map, key and value seperately
    //console.log(key);
    
}

const myObject = {
    game: "GTA"
}

for (const [key,value] of myObject) { // this won't work as object can't be iterated in for of loop
    //console.log(key); 
}


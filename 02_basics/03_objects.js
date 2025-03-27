//Singleton
//object.create

//Object literals

const mySym = Symbol("key1");

const Jsuser = {
    name: "ahad",
    "full name" : "abdul ahad ",  // u can't access this key-value using . operator so u should use [" "].
    age: 18,
    //mySym : "myKey1",  // here this key data type is of string
    [mySym]: "mykey1",  // this is a correct way to declare a symbol as a key
    location: "patna",
    isLoggedIn: false,
    email : "Ahdabadul@gmail.com",
    lastLoggedIn: ["Monday","Wednesday"]
}

//console.log(Jsuser["name"]);  // to access the elements of the objects, you can also use . operator 
//console.log(Jsuser["full name"]);
//console.log(typeof Jsuser[mySym]);  // here the symbol is used as a string and not as a symbol cause the way wwe have declared a symbol is wrong (12)


//console.log(Jsuser["email"]);
Jsuser.email =  "ahad78610@yahoo.com"  // you can access the obj value by using . operator and change its value
//console.log(Jsuser["email"]);

//Object.freeze(Jsuser);  // by doing so u have freezed your object and no further changes will propogate 
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hey there");
}
Jsuser.greetingtwo = function(){
    console.log(`Hey there , ${this.name}`);  // you can access the object keys in the funtion 
}

//console.log(Jsuser.greeting);  // here the function ref is called out
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());


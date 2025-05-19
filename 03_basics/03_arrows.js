const user = {
     username: "Ahad",
     price: 10,

     welcomeMessage : function(){
          console.log(`${this.username}, welcome to website`);
          console.log(this)   // current context ka value isse melega boleto ye user ke {} beech wale
     }
}

// user.welcomeMessage()
// user.username = "abd";
// user.welcomeMessage()

//console.log(this); // this 'this' will give {} as output but if we do this same in chrome then we will get window casue this will give the value present in that context 

// const chai = function (){
//    let username = "Ahad";
//    console.log(this.username); // we got O/P as undefined cause this can't be used in funct'n but only when you create object 
   
// }

//chai()

// const chai =  () => {   // here the arrow f'n is being used
//    let username = "Ahad";
//    console.log(username); 
   
// }
// chai()

// const addTwo = (num1,num2) => {    // this is arrow function
//      return num1 + num2 
// } 


//const addTwo = (num1,num2) =>  num1 + num2 //Implicit return

//const addTwo = (num1,num2) =>  ( num1 + num2 ) // Implicit return

const addTwo = (num1,num2) =>  ({username: "ahad"}) // to return an object u have to use {} in ()
console.log(addTwo(2,4))
//Immediately invoked Function Expression
//sometime we have problem with the global scope variable and just to avoid it we use IIFE
(function chai(){
    //named IIFE
    console.log("Abdul Ahad");
})(); // just to make the second fucntion run we have to end the first one first with semicolon ;

( () => {   // we can use arrow f'n as well in this IIFE
    console.log(`HIiii`);
    
}  )();

//(Func'n Defination)(Invoke the fn'c)

( (name) => {   
    console.log(`HIiii ${name}`);// if we want a variable in the func'n, you can use this as same as a normal fun'c where u can pass the argument and stuff
}  )("AHAD")
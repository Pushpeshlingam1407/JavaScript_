//TODO: Anonymous function

console.log("1");
console.log(9);

setTimeout(function(){
    console.log("2");
}, 2000);

console.log("3");

//TODO: Call stack and Event loop
//1. Call stack is a data structure that is used to store the function calls.
//2. Event loop is a mechanism that is used to handle the asynchronous code in javascript.
//3. When a function is called, it is added to the call stack. When the function is executed, it is removed from the call stack.
//4. When an asynchronous function is called, it is added to the event queue. The event loop checks the call stack and if it is empty, it takes the first function from the event queue and adds it to the call stack.

//What are the advantages of using anonymous functions?
//1. Anonymous functions are easier to write and read.
//2. Anonymous functions can be used as arguments to other functions.
//3. Anonymous functions can be used to create closures.
//4. Anonymous functions can be used to create IIFEs (Immediately Invoked Function Expressions).


//TODO: IIFE (Immediately Invoked Function Expression)
(function(a,b){
    console.log("This is an IIFE",a,b);
})(20,30);
// ! We are defining anonymous functions, executing IIFEs, and studying stack execution.
//TODO: Anonymous function

console.log("1");
console.log(9);

setTimeout(function () {
  console.log("2");
}, 2000);

console.log("3");

//TODO: Call stack and Event loop
//* 1. The call stack is a data structure used to store active function calls.
//* 2. The event loop is a mechanism used to handle asynchronous code in JavaScript.
//* 3. When a function is called, it is pushed onto the call stack. When execution completes, it is popped off the call stack.
//* 4. When an asynchronous function finishes its operation, its callback is added to the event queue. The event loop checks if the call stack is empty; if so, it moves the first callback from the event queue to the call stack.

//TODO: What are the advantages of using anonymous functions?
//* 1. Anonymous functions are easier to write and read.
//* 2. Anonymous functions can be passed as arguments to other functions.
//* 3. Anonymous functions can be used to create closures.
//* 4. Anonymous functions can be used to create IIFEs (Immediately Invoked Function Expressions).

//TODO: IIFE (Immediately Invoked Function Expression)
(function (a, b) {
  console.log("This is an IIFE", a, b);
})(20, 30);

//TODO: When and Why is an IIFE needed?
//* IIFEs are used to create a private variable scope.
//* They help prevent global scope pollution.
//* They can be used to create closures and modular patterns.

(function () {
  const a = 10;
  console.log("Inside the IIFE", a);
})();

//* console.log("Outside the IIFE", a);

//TODO: Callback functions
// ! We are passing callbacks into functions and tracing their execution order.
//* 1. A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
//* 2. Callback functions are used to handle asynchronous operations in javascript.

//TODO: Difference between callback functions and higher order functions
//* 1. A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
//* Whereas, a higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result.
//* 2. Callback functions are used to handle asynchronous operations in JavaScript.
//* Higher-order functions are used to create abstractions and to make code more reusable.

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
greet("Pushpesh", function () {
  console.log("Welcome to the world of javascript");
});

console.log("-------------------------");
function fun(msg) {
  console.log("This message is came from first function: " + msg);
}

const show = (msg, fun) => {
  console.log("First function is called");
  fun(msg);
};

show("This is a callback function", fun);

//TODO: Flow of execution:
//* 1. Callback function: When a function is passed as an argument to another function and is executed after some operation has been completed.
//* 2. Higher order function: When a function is passed as an argument to another function and is executed when it is called.

//* Order of execution: Callback function is executed after some operation has been completed
//* Order of execution: Higher order function is executed when it is called

//TODO: Example of callback function with use case
const numbers = [1, 2, 3, 4, 5];
function sum(number) {
  return number + 10;
}
const result = numbers.map(sum);
console.log(result);

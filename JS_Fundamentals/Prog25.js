//TODO: Callback functions
//* 1. A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
//* 2. Callback functions are used to handle asynchronous operations in javascript.

//TODO: Difference between callback functions and higher order functions
//* 1. A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
//* Where as, A higher order function is a function that takes one or more functions as arguments and/or returns a function as its result.
//* 2. Callback functions are used to handle asynchronous operations in javascript.
//* Higher order functions are used to create abstractions and to make code more reusable.

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

//TODO: Simple difference between callback function and higher order function with small example
//* Higher order function: when a function is passed as an argument to another function
function sum(a, b) {
  return a + b;
}

function operation(a, b, sum) {
  return sum(a, b);
}

const res = operation(20, 30, sum);
console.log(res);

//* Callback function: when a function is executed after some operation has been completed
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
greet("Pushpesh", function () {
  console.log("Welcome to the world of javascript");
});

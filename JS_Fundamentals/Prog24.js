//TODO: Higher order functions
//* 1. A higher order function is a function that takes one or more functions as arguments and/or returns a function as its result.
//* 2. Higher order functions are used to create abstractions and to make code more reusable.

function sum(a, b) {
  return a + b;
}

function operation(a, b, sum) {
  return sum(a, b);
}

const res = operation(20, 30, sum);
console.log(res);

// TODO: Another example
function operation(a, b, op) {
  return op(a, b);
}

const result = operation(10, 20, (x, y) => x * y);

console.log(result);

//TODO: Simple shortest example
const res1 = (a, b) => a + b;
console.log(res1(10, 20));

//* When a function is passed as an argument to another function, that outer function is called a higher-order function.
//* When a function is returned from another function, that outer function is also called a higher-order function.

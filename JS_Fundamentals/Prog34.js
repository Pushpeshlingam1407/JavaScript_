//TODO: Closures
//* A closure is a function that has access to its own scope,
//* the outer function's scope, and the global scope.

function outer() {
  const a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

const res = outer();
res();

//TODO: Why are closures needed?
//* Closures are used to create private variables.
//* Closures are also used to create higher-order functions.
//* Closures are also used to create modules.

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(2)); // 7

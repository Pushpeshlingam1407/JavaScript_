//TODO: Higher order functions
//1. A higher order function is a function that takes one or more functions as arguments and/or returns a function as its result.
//2. Higher order functions are used to create abstractions and to make code more reusable.

function sum(a,b){
    return a+b;
}

function operation(a,b,sum){
    return sum(a,b);
}

const res=operation(20,30,sum);
console.log(res);

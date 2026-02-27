//TODO: Hoisting is a mechanism in V8 Chrome engine 
//TODO: It works only ES6 below versions functions
//TODO: When the reference error is raised -> if you try to access a variable before it is declared
//TODO: Undefined (You're declared the variable but you haven't assigned any value to it)
//TODO: Reference error (You're trying to access a variable before it is declared)
// console.log(a);
// var a=10;

let a = 10;
console.log(a);

//const sum = (a, b) => a + b;
console.log(sum(10, 20));

function sum(a,b)
{
    return a+b;
}

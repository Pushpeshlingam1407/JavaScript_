//let var const 
//TODO: const is a immutable state
//TODO: let, const are block scope variable
//TODO: var is a global scope variable
const a= 10;
console.log(a);

var c=25;
let x=20;
{
    const p=100;
    console.log("Block 1 "+c);
    console.log("Block 1 "+x);
    {
        console.log("Block 1 "+p);
    }
    console.log(p);
}
{
    console.log("Block 2 "+c);
    console.log("Block 1 "+x);

}

console.log("--------------");
//Difference between var and let
//1. var is function-scoped, while let is block-scoped.
//2. var can be redeclared within the same scope, while let cannot be redeclared in the same scope.
//3. var variables are hoisted to the top of their scope and initialized with undefined, while let variables are also hoisted but are not initialized until their declaration is reached in the code execution flow.

//example of var and let
function example() {
    console.log(a); // undefined (due to hoisting)
    var a = 10;
    console.log(a); // 10   
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 20;
    console.log(b); // 20
}
example();
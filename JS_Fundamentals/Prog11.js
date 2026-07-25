// ! Deep Dive: Scoping differences (let vs var vs const).
//TODO: let vs var vs const

/*
 * let vs var vs const:
 * - var is function-scoped, while let and const are block-scoped.
 * - var is hoisted and initialized with undefined, whereas let and const are hoisted but remain in the Temporal Dead Zone until they are declared.
 * - var allows both redeclaration and reassignment.
 * - let allows reassignment but not redeclaration within the same scope.
 * - const requires initialization at the time of declaration and does not allow reassignment.
 * - let and const were introduced in ES6 to overcome the limitations of var.
 *
 * Hoisting & Temporal Dead Zone (TDZ):
 * - Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope before the code is executed.
 * - Variables declared with var are hoisted and initialized with undefined.
 * - Variables declared with let and const are also hoisted, but they are not initialized until their declaration is reached, so accessing them before that results in a ReferenceError due to the Temporal Dead Zone.
 */

//* Constants allow initialization only at declaration time and cannot be reassigned later.
//* Constants are block-scoped variables.

//* let is also a block-scoped variable, but it can be reassigned later.
//* var is a function-scoped or globally-scoped variable.
const a = 10;
var b = 20;
console.log(a); //10
{
  console.log("First block");
  var b = 0;
  const a = 20;
  console.log(a); //20
  console.log(b); //0
  b += 20;
  console.log(b); //20
}
{
  console.log("Second block");
  const a = 30;
  console.log(a); //30
  b += 20;
  console.log(b); //40
}
b += 20;
console.log(b); //60

const c = 10;
let d = 20;
let g = 40;
console.log(c);
console.log(d);
{
  g += 40;
  console.log(g); //80
  console.log("Third block");
  console.log(c); //10
  console.log(d); //20
  const e = 20;
  let f = 40;
  console.log(e); //20
  console.log(f); //40
  {
    // e+=20;
    f += 40;
    console.log(f); //80
    console.log(e);
  }
}

function test() {
  if (true) {
    var y = 20;
  }
  console.log(y);
}
test(); //20

function test2() {
  if (true) {
    let x = 10;
  }
  console.log(x);
}
test2(); //ReferenceError: x is not defined

console.log(p); //undefined
var p = 10;

console.log(q); //ReferenceError: Cannot access 'b' before initialization
let q = 20;

console.log(r); //ReferenceError: Cannot access 'c' before initialization
const r = 30;

var m = 10;
let n = 20;
console.log(global.m);
console.log(global.n);

//TODO: let doesn't allow redeclaration in the same scope
//* let y=1;
//* let y=2; //SyntaxError: Identifier 'y' has already been declared

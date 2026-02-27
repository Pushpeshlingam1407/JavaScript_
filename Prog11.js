//TODO: let vs var vs const 
//* constanst can allow the initialization only at the declaration time and it cannot be re-assigned later.
//* constants are block scoped variables

//* let also block scope variables but they can be re-assigned later
//* var global scope and block scope variable
const a=10;
var b=20;
console.log(a); //10
{
    console.log("First block");
    var b=0;
    const a=20;
    console.log(a); //20
    console.log(b); //0
    b+=20;
    console.log(b); //20
}
{
    console.log("Second block");
    const a=30;
    console.log(a); //30
    b+=20;
    console.log(b); //40
}
b+=20;
console.log(b); //60

const c=10;
let d=20;
let g=40;
console.log(c);
console.log(d);
{
    g+=40;
    console.log(g); //80
    console.log("Third block");
    console.log(c); //10
    console.log(d); //20
    const e=20;
    let f=40;
    console.log(e); //20
    console.log(f); //40
    {
        // e+=20;
        f+=40;
        console.log(f); //80
        console.log(e);
    }
}


function test(){
    if(true) {
        var y=20;

    }
    console.log(y);
}
test(); //20

function test2(){
    if(true) {
        let x=10;
    }  
    console.log(x);
}     
test2(); //ReferenceError: x is not defined

console.log(p);  //undefined
var p=10; 

console.log(q); //ReferenceError: Cannot access 'b' before initialization
let q=20;

console.log(r); //ReferenceError: Cannot access 'c' before initialization
const r=30;

var m=10;
let n=20;
console.log(global.m); 
console.log(global.n);

//TODO: let doesnt allow redeclaration in the same scope
//* let y=1;
//* let y=2; //SyntaxError: Identifier 'y' has already been declared  
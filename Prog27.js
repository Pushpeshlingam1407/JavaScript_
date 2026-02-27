//TODO: Generator functions
//1. A generator function is a function that can be paused and resumed at any time.
//2. It is defined using the function* syntax and it returns an iterator object.

function* fun(){
    let c=0;
    for(let i=0;i<2;i++){
        c+=2;
        yield 1;
    }
    return c;
}
const gen = fun();

console.log(gen.next()); // First execution
console.log(gen.next()); // Second execution
console.log(gen.next()); // Final return

console.log("---------------------------------");
function* tc(){
    let tn=1;
    while(true){
        yield tn;
        tn=tn*2;
    }
}
const gen1=tc();
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

console.log("----------------------------------");
function* simplePasswordGenerator() {
    yield "abc123";
    yield "xyz789";
    yield "pass@2026";
}

const passwords = simplePasswordGenerator();

console.log(passwords.next().value);
console.log(passwords.next().value);
console.log(passwords.next().value);
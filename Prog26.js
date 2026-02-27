//TODO: Construction functions
//1. A constructor function is a function that is used to create objects.

function Person(name=null, age=null) {
    this.name = name;
    this.age = age;
}

//Like deep copy 
const p1 = new Person("Pushpesh", 21);
const p2 = new Person("Jon snow", 25);
const p3 = new Person();
console.log(p1.name); 
console.log(p1.age);  

p1.age=60;
console.log(p1.age);
console.log(p2.name);
console.log(p2.age);

console.log(p3.name);
console.log(p3.age);
p3.name="Arya Stark";
p3.age=18;
console.log(p3.name);
console.log(p3.age);
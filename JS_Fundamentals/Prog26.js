// TODO: Learn constructor functions for object blueprinting.
//TODO: Construction functions
//* 1. A constructor function is a function that is used to create objects.

function Person(name = null, age = null) {
  this.name = name;
  this.age = age;
}

// Like deep copy
const p1 = new Person("Pushpesh", 21);
const p2 = new Person("Jon snow", 25);
const p3 = new Person();
console.log("Name: " + p1.name);
console.log("Age: " + p1.age);
console.log("\n================\n");

p1.age = 60;
console.log("Age: " + p1.age);
console.log("\n================\n");

console.log("Name: " + p2.name);
console.log("Age: " + p2.age);
console.log("\n================\n");

console.log("Name: " + p3.name);
console.log("Age: " + p3.age);
console.log("\n================\n");
p3.name = "Arya Stark";
p3.age = 18;

console.log("Name: " + p3.name);
console.log("Age: " + p3.age);

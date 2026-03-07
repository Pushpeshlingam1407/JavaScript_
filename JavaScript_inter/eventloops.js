// TODO: MODEL 1
console.log("Number 1");
setTimeout(() => {
  console.log("Number 2");
}, 1000);
console.log("Number 3");

// TODO: Output: Number 1 -> Number 3 -> Number 2

// TODO: MODEL 2
console.log("First");
Promise.resolve().then(() => {
  console.log("Second");
});
console.log("Third");

// TODO: Output: First -> Third -> Second

// TODO: MODEL 3
console.log("First");
setTimeout(() => {
  console.log("After 1st");
});
Promise.resolve().then(() => {
  console.log("Second");
});
console.log("Third");

// TODO: Output: First -> Third -> Second -> After 1st

// TODO: Priority Order
//! Console operations (top to bottom) -> Promises (Microtask Queue) -> setTimeout / setInterval (Macrotask Queue)

// TODO: Every piece of code we write first goes into memory (Heap),
// TODO: then it moves to the Call Stack for execution.

// TODO: Depending on the code, operations are moved to the Microtask Queue or Macrotask Queue.

// TODO: Web APIs move tasks to the Macrotask Queue,
// TODO: while high-priority tasks like Promises move to the Microtask Queue.

// TODO: The Event Loop continuously checks the Call Stack and
// TODO: moves tasks from the queues to the stack based on priority.

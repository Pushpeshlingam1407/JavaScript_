/* What are Pure Functions?

1. A pure function is a function that always produces the same output for the same input.
2. Pure functions do not modify any external state.
3. Pure functions do not have side effects.
*/

function sum(ar1, ar2) {
  return ar1 + ar2;
}

console.log(sum(10, 20));
console.log(sum(20, 10));

/* What are Impure Functions?

1. An impure function can produce different outputs for the same input.
2. Impure functions can modify external state.
3. Impure functions can have side effects.
*/

let tot = 0;

function grandTotal(ar1, ar2) {
  tot += ar1 + ar2;
  return tot;
}

console.log(grandTotal(10, 20));
console.log(grandTotal(10, 20));

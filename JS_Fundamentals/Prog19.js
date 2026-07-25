// ! We are finding elements matching a condition and testing all elements using find and every.
//TODO: Find, Every functions

//TODO: Find
//* syntax: array.find((element)=>{return element>value})
//* It returns the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
const arr = [1, 2, 3, 4, 5, 6];
let res = arr.find((x) => x > 3);
console.log(res);

function cv(ele) {
  return ele > 4;
}
res = arr.find(cv);
console.log(res);

res = arr.find((x) => x > 0);

//TODO: Every
//* syntax: array.every((element)=>return element>value)
//* tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
function ce(ele) {
  return ele > 10;
}
res = arr.every(ce);
console.log(res);

console.log(arr.every((x) => x > 0));

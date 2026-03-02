//TODO: Array Methods Part 2 in Javascript

//* 8) Join() & toString() => convert array into a string format
const fruits = ["Apples", "Grapes", "Banana"];
const fa = fruits.join(",");
const fb = fruits.toString();
console.log(fruits);
console.log(fa);
console.log(fb);

//* 9) pop() => Deletes the last element of an array

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
nums.pop();
console.log(nums);

//* 10) forEach() => Does not return anything; it executes a callback function for each element in the array.
const pp = [1, 2, 3, 45, 77];
var x = 0;
pp.forEach((ele) => console.log(ele));
pp.forEach((ele) => {
  x += ele;
  console.log(x); //* Cummulative sum of the elements in the array
});

//* 11) Push() => Adds an element to the end of the array.
nums.push(810);
console.log(nums);

//* 12) unshift() => Adds one or more elements to the beginning of the array.
nums.unshift(1234);
console.log(nums);

//* 13) shift() => Removes the first element of the array
nums.shift();
console.log(nums);

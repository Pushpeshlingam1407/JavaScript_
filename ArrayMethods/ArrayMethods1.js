//TODO: Array Methods Part 1 in javascript

//* 1) Values() => this method returns an iterator that provides that values for each element in the array
let arr = [1, 2, 3, 4, 45, 6];
let x = arr.values();
for (let value of x) console.log(value);

//* 2) Length => Returns the length of the array.
console.log(arr.length);

//* 3) reverse() => This method reverses the order of elements in an array.
console.log(arr.reverse());

//* 4) sort() => This methods sorts the elements of an array in place and returns the sorted array
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
console.log(months.sort());
//TODO:  It sorts only in string format not in the numbers format so it doesn't sort the numbers properly

//? Solution :
//TODO: Sorting Numbers in Ascending order in Javascript
const numbers = [1, 2, 5, 78, 89, 43, 708, 33];
numbers.sort((a, b) => a - b);
console.log(numbers);

//TODO: Sorting Numbers in Descending order in Javascript
const num1 = [1, 2, 5, 78, 89, 43, 700, 33];
num1.sort((a, b) => b - a);
console.log(num1);

//* 5) at() => This method returns the element at the specified index in the array.
console.log(arr.at(1)); //* Example: arr[arr.length -1]

//* 6) fill() => This method fills elements of an array from the start index to the end index (up to 3 arguments).
const fruits = ["Apples", "Grapes", "Banana", "Papaya"];
fruits.fill("Mango", 1, 2); //* ("element",StartIndex,EndIndex);
console.log(fruits);

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
nums.fill(0, 1, nums.length - 1);
console.log(nums);

//* 7) from() => Converts an object or iterable into an array.
const phalam = {
  0: "Pineapple",
  1: "Guava",
  2: "Pomegranate",
  length: 3, //! You must specify the length to convert it into an array.
};
console.log(phalam);
console.log(Object.keys(phalam).length); //! if you do not know the Object length
const fa = Array.from(phalam);
console.log(fa);

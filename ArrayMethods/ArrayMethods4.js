//TODO: Array Methods Part 4 in Javascript

//* 23) find() => to check an element is present in the array or not.
const arr = [10, 20, 30, 40, 50];
const res = arr.find((ele) => ele >= 30);
console.log(res);

//* 24) includes() => returns true or false whether the given element is present in the array or not.

const res1 = arr.includes(40);
console.log(res1);

//* 25) entries() => Converts an object into an iterator that contains key-value pairs.

const data = [100, "Pushpesh", "Javascript"];
console.log(data);

const obj = data.entries();
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);

// * 26) reduce() => higher-order function that reduces an array to a single value by executing a "reducer" callback function on each element.

const red = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sv = red.reduce((acc, cv) => {
  return acc + cv;
});
console.log(sv);

//* 27) reduceRight() => same as reduce() but it works from right to left

const svv = red.reduceRight((acc, cv) => {
  return acc + cv;
});
console.log(svv);

//* 28) isArray() => Returns true if the given data is an array; otherwise, returns false.

console.log(Array.isArray(red));
const pq = "Haii, My name is Pushpesh";
console.log(Array.isArray(pq));

//* 29) filter() => Creates a new array with elements that pass the specified condition

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = nums.filter((num) => num % 2 == 0);
const odd = nums.filter((num) => num % 2 != 0);
console.log(even);
console.log(odd);

//* 30) map() => Creates a new array by applying a function to each element of the array.
//* applies a callback function, and returns a new array with the transformed results.

const person = {
  id: 100,
  name: "Pushpesh",
  course: "Javascript",
  rating: 5,
};
console.log(Object.keys(person));
console.log(Object.values(person));
Object.keys(person).map((ele) => console.log(ele));
Object.values(person).map((ele) => console.log(ele));

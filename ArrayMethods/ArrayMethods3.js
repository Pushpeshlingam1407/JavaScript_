//TODO: Array Methods part 3 Javascript

//* 14) copyWithin() => The copyWithin() method copies a sequence of array elements to another position in the same array. It modifies (mutates) the original array.

// *Syntax: array.copyWithin(targetIndex, startIndex, endIndex)

// targetIndex → The index where copied elements will be placed.
// startIndex  → The index where copying starts.
// endIndex    → (Optional) The index where copying stops (not included).

let num = [1, 2, 3, 4, 5, 6, 8, 9, 10];

console.log(num); //* Original Array
num.copyWithin(3, 0, 3);
console.log(num);
// Output: [1, 2, 3, 1, 2, 3, 8, 9, 10]

// Explanation:
// Elements at index 0,1,2 → (1,2,3)
// are copied to index 3,4,5
// The original values at 3,4,5 are overwritten.

//* 15) Concat => Merges 2 arrays into another single array
let odds = [1, 3, 5, 7];
let evens = [2, 4, 6, 8];
let total = odds.concat(evens);
console.log(total);
console.log(odds.concat(evens));
console.log([...odds, ...evens]); //* Using Spread operator

//* 16) splice()
const nums = [1, 2, 3, 4, 5, 6];

// splice(start, deleteCount, items)
// 2 → start at index 2
// 1 → remove 1 element (3)
// 9, 99 → add at index 2

nums.splice(2, 1, 9, 99);

console.log(nums); //[1, 2, 9, 99, 4, 5, 6]

const pars = [1, 2, 3, 4, 5, 6];
pars.splice(1, pars.length - 2, "Aegon", "Jon snow", "Arya");
console.log(pars);

//* 17) flat() => Flattens a nested array into a single array.
const arr = [1, [2, [3, [5]]], 4];
console.log(arr);
console.log(arr.flat());
console.log(arr.flat(Infinity)); //! Flattens the array completely

//* 18) indexOf() => Returns 1st index of the element in an array and
//* lastIndexOf() => Returns last index of the element in an array

const ele = [1, 2, 3, 4, 5, 6, 3, 6, 3, 4, 90];
console.log(ele.indexOf(3));
console.log(ele.lastIndexOf(3));
console.log(ele.lastIndexOf(87)); //! returns -1 because the element is not present in the array
console.log(ele.indexOf(87)); //! returns -1 because the element is not present in the array

//*19) Array.of() => Creates a new array from the given arguments.
const list = Array.of(100, "Pushpesh", true, 90500.87);
console.log(list);

//* 20) every() => returns true or false depending on whether every element satisfies the condition

const alpha = [1, 2, 3, 4, 5, 6];
const res = alpha.every((x) => x % 2 != 0);
console.log(res);

//* 21) some() => returns true or false depending on whether some elements satisfies the condition

const res1 = alpha.some((x) => x % 2 != 0);
console.log(res1);

//* 22) slice() => Returns a shallow copy of a portion of an array without modifying the original array.
//TODO: slice(start, end) returns elements from index 'start' up to, but not including, index 'end'.

const num1 = [1, 2, 3, 4];
console.log(num1.slice(1, 3));
console.log(num1);

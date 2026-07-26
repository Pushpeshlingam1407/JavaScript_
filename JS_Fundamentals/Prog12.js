//TODO: ARRAYS
// ! We are declaring an array, accessing elements by index, and reading the array length.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("first element: ", nums[0]); // 1
console.log("length of array: ", nums.length); // 10
console.log(" array: ", nums);
nums.push(11); // adds an element to the end of the array
console.log("after push: ", nums);

nums.pop(); // removes the last element from the array
console.log("after pop: ", nums);

nums.shift(); // removes the first element from the array
console.log("after shift: ", nums);

nums.unshift(0); // add an element to the start of the array
console.log("after unshift: ", nums);

nums = nums.splice(2, 3); // (startIndex, deleteCount) remove elements from array
console.log("after splice: ", nums);

//TODO: ARRAYS
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums[0]); // 1
console.log(nums.length); // 10
console.log(nums);
nums.push(8); // adds an element to the end of the array
console.log(nums);

nums.pop(); // removes the last element from the array
console.log(nums);

nums.shift(); // removes the first element from the array
console.log(nums);

nums.unshift(1); // add an element to the start of the array
console.log(nums);

nums = nums.splice(2, 3); // (startIndex, deleteCount) remove elements from array
console.log(nums);


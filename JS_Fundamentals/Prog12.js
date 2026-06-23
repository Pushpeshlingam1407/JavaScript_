//TODO: ARRAYS
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums[0]); //1
console.log(nums.length); //10
console.log(nums);
nums.push(8);
console.log(nums);

nums.pop(); // remove the last element
console.log(nums);

nums.shift(); // remove the first element
console.log(nums);

nums.unshift(1); // add the first element
console.log(nums);

nums = nums.splice(2, 3); // start from index 2, remove 3 elements
console.log(nums);

// TODO: map, filter, reduce

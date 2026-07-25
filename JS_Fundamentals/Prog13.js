// ! We are iterating through array elements using for...in (index) and for...of (value) loops.
//TODO: Array Iteration
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

for (let x in nums) {
  console.log(x); //index
}
for (let x of nums) {
  console.log(x); //value
}

let l = nums.length;
for (let i = 0; i < l; i++) {
  console.log("Array Elements: " + nums[i]);
}
console.log(nums[0]);
console.log(nums[1]);

//TODO: tricky Question
let x = [1, 2];
x[100] = 20;
console.log(x.length); // Length is 101 because index 100 sets length to 100 + 1 (holes are counted).
console.log(x);

var p = [1, 3, 6, 67, 64, 56, 89, 100, 189, 134, 167, 145, 156, 178, 190];
p.sort();
console.log(p);

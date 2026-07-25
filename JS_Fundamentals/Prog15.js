//TODO: SPLICE
//* syntax: array.splice(start_index,no_of_element_to_delete,adding_elements)
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("OG Array: ");
console.log(nums);
nums.splice(2, 0, 100, 200);
console.log("After Splice: ");
console.log(nums);

//TODO: SLICE
//* syntax: array.slice(startindex,endindex)
let oorum = nums.slice(2, 5);
console.log("Sliced Array: ");
console.log(oorum);

console.log("OG Array: ");
console.log(nums);
delete nums[2];
console.log("After Delete: ");
console.log(nums);

nums = "Hello my name is jon snow".split(" ");
console.log("String Split: ");
console.log(nums);
if (Array.isArray(nums)) {
  console.log("true");
} else console.log("false");

//TODO: INCLUDES
let p = ["Jon", "snow", "is", "a", "bastard"];
console.log("Includes: ");
console.log(p.includes("snow"));
console.log(p.includes("hello"));

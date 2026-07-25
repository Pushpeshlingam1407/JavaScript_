// ! Concept: Array filling with fill() and value retrieval with at().
//TODO: Fill, at values

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log("Using Bracket Notation: " + months[0]);
console.log("Using At() Method: " + months.at(0));

//TODO: IT used to return the array element

const res = months.values();

console.log("\nMonths: ");
for (let x of months) {
  console.log(x);
}

//TODO: it returns the array keys
console.log("\nKeys: ");
for (x of months.keys()) {
  console.log(x);
}

const nums = [1, 2, 3, 4, 5];
console.log("Normal Array: " + nums);

//TODO: Fill
//* syntax: fill(value,startIndex,endIndex)
console.log(nums.fill("x", nums.length - 5, nums.length - 2));

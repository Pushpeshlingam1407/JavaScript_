//TODO: Array Methods part 2 in Javascript

//* 8) Join() & toString() -> convert array to string format
const fruits = ["Apples", "Grapes", "Banana"];
const fa = fruits.join(",");
const fb = fruits.toString();
console.log(fruits);
console.log(fa);
console.log(fb);

//* 9) pop() -> to delete the last element in an array

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
nums.pop();
console.log(nums);

//* 10) forEach() -> can't return anything it's just a call back function
const pp = [1, 2, 3, 45, 77];
var x = 0;
pp.forEach((ele) => console.log(ele));
pp.forEach((ele) => {
  x += ele;
  console.log(x); //Cummulative sum of the elements in an array
}); 

//* 11) Push() -> to pushthe element at the end of the array
nums.push(810);
console.log(nums);

//* 12) unshift() -> to add the elements at the beginning of the array
nums.unshift(1234);
console.log(nums);

//* 13) shift() -> To remove the first element of the array
nums.shift();
console.log(nums); 
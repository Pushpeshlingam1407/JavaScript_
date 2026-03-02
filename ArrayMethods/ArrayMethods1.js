//TODO: Array methods part 1 in javascript

//* 1) Values(): this method returns an iterator that provides that values for each
let arr = [1, 2, 3, 4, 45, 6];
let x = arr.values();
for (let value of x) console.log(value);

//* 2) Length -> it returns the length of an array
console.log(arr.length);

//* 3) reverse() -> this method reverse the order of elements in an array
console.log(arr.reverse());

//* 4) sort() -> this methods sorts the elements of an array in place and returns the sorted array
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
console.log(months.sort());
//TODO:  It sorts only in string format not in the numbers format so it doesn't sort the numbers properly

//* 5) at() -> This method return the element at the specified index from the array
console.log(arr.at(1)); //* arr[arr.length -1]

//* 6) fill() -> this method fill all the elements of an array from (start,end) upto 3 arguments
const fruits = ["Apples", "Grapes", "Banana", "Papaya"];
fruits.fill("Mango", 1, 2); //* ("element",StartIndex,EndIndex);
console.log(fruits);

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
nums.fill(0, 1, nums.length - 1);
console.log(nums);

//* 7) from() -> Object to array
const phalam={
    0:"Pineapple",
    1:"Guava",
    2:"Pomegranate",
    length:3 //! Should mention the length that should return to array 
}
console.log(phalam);
console.log(Object.keys(phalam).length) //! if you dont know the Object length
const fa=Array.from(phalam);
console.log(fa);
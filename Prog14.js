let nums=[1,2,3,4,5,6,7,8,9,10];
console.log(nums);
let nums1=[1,3,6,67,64,56,89,100,189,134,167,145,156,178,190];
let total=nums.concat(nums1);
console.log(total);


//TODO: Spread Operator
//Combine two arrays using spread operator
let total1=[...nums,...nums1];
console.log(total1);

let values=[41,24,55];
// let [c,b,a]=values;
// console.log(a);
// console.log(b);
// console.log(c);

let [a,,b]=values;
console.log(a);
console.log(b);


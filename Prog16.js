let nums=[11,22,45,67,89];

//TODO: It returns the index of the first occurrence of the specified value, or -1 if it is not found.
console.log(nums.indexOf(45));
for(let x in nums){
    console.log(x+"->"+nums[x]); //index
}

//TODO: Of returns the value of the first occurrence of the specified value, or -1 if it is not found.
for(let x of nums.values()){
    console.log(x); //value
}

//TODO: Reduce
// syntax array.reduce((accumulator,currentvalue)=>{return accumulator+currentvalue},initialvalue)
// let sum=nums.reduce((acc,curr)=>(acc+curr),0);
// console.log(sum);

function sum(acc,curr){
    return acc+curr;
}   
const total=nums.reduce(sum);
console.log(total);
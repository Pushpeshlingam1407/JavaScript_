//TODO: Fill, at values

const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(months[0]);
console.log(months.at(0));

//TODO: IT used to return the array element

const res=months.values();

for(let x of months){
    console.log(x);
}

//TODO: it returns the array keys

for(x of months.keys()){
    console.log(x);
}

const nums=[1,2,3,4,5];
console.log(nums);

//TODO: Fill syntax: fill(value,start,end)
console.log(nums.fill('x',nums.length-5,nums.length-2))

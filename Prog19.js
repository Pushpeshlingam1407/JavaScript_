//TODO: Find, every functions

//TODO: Find - returns the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
const arr = [1, 2, 3, 4, 5,6];
let res = arr.find(x=>x>3);
console.log(res);

function cv(el){
    return el>4;
}
res=arr.find(cv);
console.log(res);

res=arr.find((x)=>x>0);

//TODO: Every - tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
function ce(ele){
    return ele>10;
}
res=arr.every(ce);
console.log(res);


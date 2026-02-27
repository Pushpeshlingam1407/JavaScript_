
//TODO: Interview Q&A
// TODO: Question no 1
const arr=[-1,null,undefined, "a",2,3,5,"Undefined"]

console.log(ct(arr));
function ct(arr){
    let c=0;
    for(let val of arr) if(val) c++;
    return c;
}

//TODO: Question no 2
const movie={
    title:"game of thrones",
    releaseYear: 2011,
    rating: 9.3,
    director: "GRRM",
};

sp(movie);
function sp(obj){
    for(key in obj){
        if(typeof obj[key]=="string") console.log(key,":",obj[key]);
    }
}

let values=Object.keys(movie);
console.log(values);
values.forEach((ele)=>console.log(ele));
const movie={
    title: "Interstellar",
    releaseYear: 2014,
    rating: 8.7,
    director: "Christopher Nolan",
};

showprop(movie);
function showprop(obj){
    for(let key in obj){
        if(typeof obj[key]=="string") console.log(key,":",obj[key]); //* Prints the key and value only if the value is a string.
    }
}

let values=Object.keys(movie);
console.log(values); //* Prints only the keys of the object as an array.
values.forEach((ele)=>console.log(ele)); //* Prints each key from the array.

values=Object.values(movie);
console.log(values); //* Prints only the values of the object as an array.
values.forEach((ele)=>console.log(ele));//* Prints each value from the array.

values=Object.entries(movie);
console.log(values); //* Prints the entire object as an array of key-value pairs.
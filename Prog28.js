//TODO: Function with REST operator

function sum(...args){
    let total=0;
    for(let i=0;i<args.length;i++){
        total+=args[i];
    }  
    return total; 
}

console.log(sum(12,456,78));
console.log(sum(25,678,232,19984,3086));
console.log(sum(23,11,34,234,1344,2423,232422,23242,2342,45,5,12452342,98));

//TODO: API Calling
//https://jsonplaceholder.typicode.com/

const url = "https://jsonplaceholder.typicode.com/users/";

fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

const getData=async()=>{
    const data =await fetch(url).then((response)=>response.json());
    data.map((user)=>{
        console.log(user.id+" - "+user.name+" - "+user.email);
    });
};
getData();


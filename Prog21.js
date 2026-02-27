//TODO: Objects, Array Destructuring, Rest Operator

const person = {
    id: 1,
    name: "Pushpesh",
    age: 21,
    city: "Ongole",
    country: "India"
};

const address = {
    city: "Ongole",
    state: "Andhra Pradesh"
};  

//TODO: Object Spreading
const student={...person, ...address};
console.log(person);
console.log(address);
console.log(student);

//TODO: Object Destructuring
const {id, name, age, city, country}=person;
console.log(age);
console.log(city);
console.log(country);

//TODO: Array Destructuring

const arr=[1, 2, 3, 4, 5];
[a,,c,,d]=arr;
console.log(a);
console.log(c);
console.log(d);
//TODO: Objects, Array Destructuring, Rest Operator
// ! We are destructuring arrays and objects and using the Rest and Spread operators.

const person = {
  id: 1,
  name: "Pushpesh",
  age: 21,
  city: "Ongole",
  country: "India",
};

const address = {
  city: "Banglore",
  city: "Hyderabad",
  state: "Andhra Pradesh",
};

//TODO: Object Spreading
const student = { ...person, ...address };
console.log(person);
console.log(address);
console.log(student); //* If Multiple keys with same name, the last one will be taken.

//TODO: Object Destructuring
const { id, name, age, city, country } = person;
console.log(age);
console.log(city);
console.log(country);

//TODO: Array Destructuring

const arr = [1, 2, 3, 4, 5];
[a, , c, , e] = arr;
console.log(a); //* 1
console.log(c); //* 3
console.log(e); //* 5

//TODO: Rest Operator
const person1 = {
  id: 1,
  name: "Pushpesh",
  age: 21,
  city: "Ongole",
  country: "India",
};
const { id: id1, name: name1, ...rest } = person1;
console.log(id1); //* 1
console.log(name1); //* Pushpesh
console.log(rest); //* {age: 21, city: "Ongole", country: "India"}

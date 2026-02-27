//TODO: Objects

const person = {
    id: 1,
    name: "Pushpesh",
    age: 21,
    city: "Ongole"
};


//TODO: Shallow copy - it creates a new object but the nested objects are still referenced to the original object.
//TODO: Case 1:
const student = person; // Not a copy, just a reference to the same object
student.name = "jon snow"; // This will change the name in the original object as well
console.log(person.name); // Output: jon snow

//TODO: Case 2:
const student1 = {...person}; // Shallow copy using spread operator
student1.name = "arya stark"; // This will not change the name in the original object
console.log(person.name); // Output: jon snow

const person1 = {
    id: 1,
    name: "Pushpesh",
    address: {
        city: "Ongole",
        state: "Andhra Pradesh"
    }
};

const student2 = {...person1}; // Shallow copy using spread operator
student2.address.city = "Hyderabad"; // This will change the city in the original object as well because the address is a nested object and is still referenced to the original object
console.log(person1.address.city); // Output: Hyderabad

//TODO: Case 3:
const student3 = Object.assign({}, person1); // Shallow copy using Object.assign()
student3.address.city = "Bangalore"; // This will change the city in the original object as well because the address is a nested object and is still referenced to the original object
console.log(person1.address.city); // Output: Bangalore

//TODO: Case 4:
const arr1 = [1, 2, { a: 10 }];

const arr2 = [...arr1];

arr2[0] = 100;
console.log(arr1[0]); 
// 1 ✅ Primitive copied

arr2[2].a = 50;
console.log(arr1[2].a); 
// 50 ❌ Nested object referenced


//TODO: Deep copy - it creates a new object and also creates new nested objects, so the nested objects are not referenced to the original object.
//TODO: Case 1:
const per = {
    id: 1,
    name: "Pushpesh",
    address: {
        city: "Ongole",
        state: "AP"
    }
};

// ✅ Deep copy
const stu = JSON.parse(JSON.stringify(per)); // Deep copy using JSON methods

per.address.city = "Hyderabad";

console.log(per.address.city);   // Hyderabad
console.log(stu.address.city);  // Ongole ✅ (not changed)

//TODO: Case 2:
const per1 = {
    id: 1,
    name: "Pushpesh",
    address: {
        city: "Ongole",
        state: "AP"
    }
};

// ✅ Deep copy manually
const stu1 = {
    ...per1,
    address: {
        ...per1.address
    }
};

per1.address.city = "Bangalore";

console.log(per1.address.city);   // Bangalore
console.log(stu1.address.city);  // Ongole ✅
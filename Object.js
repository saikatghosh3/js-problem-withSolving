1.// Create an object person with properties: name, age, city.
// Print all values.

const person = {
    name:"jhon",
    age: 39,
    city: "Bangladesh"
}

console.log(person.age);
console.log(person.name);
console.log(person.city);


// 2.Add a new property email to this object.
person.email = "saikat@gmail.com";
console.log(person);


// 3. now delete a property form person 
delete person.email;
console.log(person);

// 4.Loop Through Object (Beginner)
// Print all keys and values.

for (let key in person){
 console.log(key + ":" + product[key]);
 
}

5.// Count how many properties exist in this object.
const count = Object.keys(student).length;
console.log(count);

6.// checks if a property exists or not

if(email in person){
    console.log("Exists");
    
}
else{
    console.log("sorry not existis");
}


// 7. Merge two objects 
const obj1 = {a:1, b:2}
const obj2 = {c:1, d:2}

const c = {...obj1,...obj2};
console.log(c);


8.// nested object access 
const personOne = {
    name: "saikat",
    age:30,
    city:{
        zip:48484, 
        cityName: "Dhaka"
    }
}

console.log(personOne.city.zip);

// 9. convert an object into  array 
const car = {
    brand : "Totota", 
    model: "corolla", 
    year: 2020
}

const arr = Object.entries(car);
console.log(arr);

// 10. Find the highest value in Object 
const marks = {
  Rahim: 80,
  Karim: 95,
  Hasan: 88
};

let highestName = "";
let highestMark = 0;

for (let student in marks){
    if(marks[student]> highestMark){
        highestMark = marks[student];
        highestName = student;
    }
}
console.log(highestName + " scored highest: " + highestMark);
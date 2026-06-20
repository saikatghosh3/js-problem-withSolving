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




// create a price list 
const products=[
{
name:"Laptop",
price:50000
},
{
name:"Phone",
price:30000
}
];

function listPrice(arr){
   return arr.map(product =>{
return`${product.name}: ${product.price}`
    });
}

console.log(listPrice(products));

// get top highest numbers 
function highestNumbers (arr){
    return arr.sort((a,b)=>b-a).slice(0,3)
}
console.log(highestNumbers([40,55,68,90,787]));


// sort name alphabetically 
const names = [
  "Karim",
  "Rahim",
  "Abir",
  "Saikat"
];
function SortAlphabetically(arr){
    return arr.sort();
}
console.log(SortAlphabetically(names));

// count the active user 
function countActiveUser(arr){
    return arr.filter(user=> user.active).length;
}
const users = [
  { active: true },
  { active: true },
  { active: false }
];

console.log(countActiveUser(users));



// Remove user without email
const users = [
  {
    name: "A",
    email: "a@gmail.com"
  },
  {
    name: "B"
  }
];



function  withoutEmail(arr){
    return arr.filter(user => user.email);
}
console.log(withoutEmail(users));



// find a product if it is outofStock
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10 },
  { id: 2, name: "Phone", price: 30000, stock: 0 },
  { id: 3, name: "Headphones", price: 2000, stock: 0 },
  { id: 4, name: "Mouse", price: 1500, stock: 5 }
];


function outOfStock(arr){
    return arr.filter(product =>product.stock === 0).map(p=>p.name)
}

console.log(outOfStock(products));

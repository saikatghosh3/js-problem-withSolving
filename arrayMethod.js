// 1.filter the even numbers 

const arr = [1,3,4,5,6,7,7,8,56];
const result= arr.filter(num => num % 2==0);
console.log(result);


//2. double each number 
const double = arr.map(num => num*2);
console.log(double);

//3. sum of array 
const arr2 = [10,30 ,49];
const sumNumbers = arr.reduce((sum, num)=> sum + num, 0);
 
console.log(sumNumbers);

//4. Find the first  user above 18;
const users1 = [
  { name: "A", age: 15 },
  { name: "B", age: 22 },
  { name: "C", age: 17 }
];

const firstUser = users1.find(user => user.age > 18);
console.log(firstUser);

//5. remove the duplicate from array.

const arr3 = [1,3,3,3,45,6,7,77,8,8,9];
const pure = [...new Set(arr3)];

console.log(pure);


//6. flatten array 1 level 
const arr4 = [1,3,4,[5,6],7];
const oneLevel = arr4.flat();
console.log(oneLevel);


//7. sort Products by Price 
const products = [
  { name: "A", price: 300 },
  { name: "B", price: 100 },
  { name: "C", price: 200 }
];

const sortresult = products.sort((a,b)=> a.price - b.price);
console.log(sortresult);


//8. get the name only 
const users = [
  { name: "Saikat", age: 25 },
  { name: "John", age: 30 }
];

const getName = users.map(user => user.name);
console.log(getName);

// 9. check if all  passed 
const marks = [50, 60, 70, 30];
const allPassed = marks.every(mark => mark >= 40);
console.log(allPassed);

// 10. return sqaure of each Number
const numbers = [12,34,53];
const sqaureNumbers = numbers.map(num=> num * num);
console.log(sqaureNumbers); 

// 11. extract all emails from users 
 const usersWithEmails = [
  {name:"A", email:"a@gmail.com"},
  {name:"B", email:"b@gmail.com"}
];

const emails = usersWithEmails.map(user => user.email);
console.log(emails);

// 12. Return products with price 1000

const products = [
  {name:"Phone", price:800},
  {name:"Laptop", price:50000},
  {name:"Mouse", price:500}
];

const expensive = products.filter(p => p.price > 1000);
console.log(expensive);

// 13. find the first even numbers 
const numbers = [13,,23,4,5,6];
const firstEven = numbers.find(p => p % 2 ===0 );
console.log(firstEven);

// 14. check if any user is admin  
const users = [
  {name:"A", isAdmin:false},
  {name:"B", isAdmin:true}
];

const hasAdmin = users.some(user=> user.isAdmin);
console.log(hasAdmin);

// 15. check if all the Products in stock 
const products = [
  {name:"A", inStock:true},
  {name:"B", inStock:true}
];

const inStock = products.every(p=> p.inStock);
console.log(inStock);


// 16. Total price of cart 
const cart = [
  {name:"Phone", price:1000},
  {name:"Laptop", price:2000}
];

const TotalPrice = cart.reduce((sum, item)=> sum + item, 0);
console.log(TotalPrice);

// 17.  count passed Students 

const marks = [12,30,50,70];
const passed = marks.filter(mark => mark > 40).length;
console.log(passed);

// .lenght retuns only number 
// but without it will return only new array.
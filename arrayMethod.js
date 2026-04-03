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
// 1. find the negetive numbers from an array 

const arr = [10, -5, 20, -15, 30];

function getNegativeNumbers(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.push(arr[i]);
    }
  }

  return result;
};
console.log(getNegativeNumbers([10, -5, 20, -15, 30]));


// find the average of an array
function getAverge(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum +=arr[i];
    }
    return sum/arr.length;
}
console.log(getAverge([3,4,5,6,7,8,9]));


// make all the character capital 
function capitalize(str){
    return str.toUpperCase();

}
console.log(capitalize("world"));


// how many even numbers are in array 
function countEven(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}
console.log(countEven([2,4,5,6,7,8,9,10]));

// find the longest word
function logestWord(sentence){
    let longest = words[0];
    const words = sentence.split(" " );


    for(let i =1; i<words.length; i++){
        if(words[i].length> longest.length){
            longest = words[i];
        }
    }
    return longest;
}
console.log(logestWord("hi how are you"));

// find the smallest number 

function findsmallest(arr){
    let min = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i]<min){
         min= arr[i];
        }
    }
    return min
}
console.log(findsmallest([20,3,4,5,6,7,7,299]));


// sub all the value of object
const obj = {
  a: 10,
  b: 20,
  c: 30
};

function sumObjectValues(obj){
    let sum = 0; 
    for(let key in obj){
        sum +=obj[key];
    }
    return sum;
}
console.log(sumObjectValues(obj));


// if a particular number is present in an array or not 

function exists(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }

  return false;
}

console.log(exists([2,3,4,5,6], 4));


// find the odd number sum 

function sumOfOdd(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumOfOdd([1,2,3,4,5]));


// count the words in a str 
function wordCount(str){
  return str.trim().split(" ").length;
}
console.log((wordCount("hi my name is saikat ")));


// merge the two array 
function mergeArray(arr1, arr2){
  return [...arr1, ...arr2]
}
console.log(mergeArray([1,2,3,5], [35,6,7,88,89]))

// double the nubmer of array 

function doubleNumber(arr){
  return arr.map(num => num* 2)
}
console.log(doubleNumber([1,3,45,6]));


// who has got the highest marks 

const students = [
  { name: "Rahim", marks: 70 },
  { name: "Karim", marks: 95 },
  { name: "Jony", marks: 80 }
];

function getTopStudent(students) {
  let top = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students[i].marks > top.marks) {
      top = students[i];
    }
  }

  return top;
}

console.log(getTopStudent(students));




// solving with method.
// find the negetive number :
function findNegetive(arr){
  return arr.filter(num => num <0)
}
console.log(findNegetive([2,3,5,-6,-8]));


// find the average number 
function findAverage(arr){
  return arr.reduce((sum, num)=> sum + num , 0)/arr.length
}
console.log(findAverage([1,2,3,45,67,5]));



// get the user name 

const users = [
  { id: 1, name: "Saikat", age: 25 },
  { id: 2, name: "Rahim", age: 30 },
  { id: 3, name: "Karim", age: 22 }
];


function getName(arr){
  return arr.map(user => user.name)
}

console.log(getName(users))



// filter the 18+ users 

const users = [
  { name: "A", age: 17 },
  { name: "B", age: 25 },
  { name: "C", age: 20 }
];

function getAdult(arr){
return  arr.filter(user => user.age > 18)
}
console.log(getAdult(users));


// calculate total cart price 

const cart = [
  {
    product: "Laptop",
    price: 50000,
    quantity: 1
  },
  {
    product: "Mouse",
    price: 500,
    quantity: 2
  }
];

function findTotal (arr){
  return arr.reduce((sum, num)=> sum + num.price * num.quantity, 0)
}

console.log(findTotal(cart))


// sort products by price 
const products = [
  {name:"Laptop", price:50000},
  {name:"Mouse", price:500},
  {name:"Phone", price:30000}
];

function sortProducts (arr){
   return arr.sort((a,b)=> a.price - b.price)
}
console.log(sortProducts(products));


//get total marks 
const students = [
 {
  name:"A",
  marks:80
 },
 {
  name:"B",
  marks:90
 }
];

function totalMarks(arr){
  return arr.reduce((sum, student)=> sum + student.marks, 0);
}

console.log(totalMarks(students))
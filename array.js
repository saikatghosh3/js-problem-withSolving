// 1.Find the Maximum number in Array. 
const numbers =[4,3,5,6,78,0];

let maxNum = numbers[0];
for(let i = 1; i< numbers.length; i++){
    if(numbers[i]> maxNum){
    maxNum = numbers[i];
    }
}

console.log(maxNum);

// 2. Reverse an array 
const arr = [1,2,3,4,5];
let reversed = [];
for(let i = arr.length-1; i>=0; i++){
    reversed.push(arr[i]);
}

console.log(reversed);

// 3. find the all even numbers 
const numbers = [1,2,3,4,5,6];
const isEven = [];

for(let i= 0; i<numbers.length; i++){
    if(numbers[i] %2 ===0){
        isEven.push(numbers[i]);
    }
}

console.log(isEven);

// 4. find the sum of array 

const arr= [2,3,4,5,6,7];

 let sum = 0;

 for (let i = 0; i< numbers.length; i++){
    sum += numbers[i]
 }
 console.log(sum);

//  5. merge  tow array 

const arr1 = [1,2,3,4,5];
const arr2 = [1,2,3,4,5,67,7,8];

const arr3 = [...arr1,...arr2];
console.log(arr3);

// 6. count how many times 2 has appears

const arr = [1,2,2,3,2,4];
let count = 0;
for(let i= 0; i<arr.length; i++){
    if(arr[i] === 2){
        count++;
    }
}

console.log(count);


// Find common elements between two array 
arr1 = [1,2,3,4]
arr2 = [3,4,5,6]

let common = [];
for(let i= 0; i<arr1.length; i++){
    if(arr2.includes(arr1[i])){
        common.push(arr1[i]);
    }
}

console.log(common)



// array ps solved with method 
//1. Return a new array where every number is multiplied by 2.

const arr = [2,4,5,6,7,8,9];

const result = numbers.map(num=>num*2);
console.log(result);

// 2. Extract name form obj 

const users = [
  {name:"Saikat", age:25},
  {name:"Rahim", age:30}
];


const result = users.map(user=> user.name);
console.log(result);

// 3. Return users whose age ≥ 18.
const users = [
 {name:"A", age:15},
 {name:"B", age:22},
 {name:"C", age:18}
];


const adults = users.filter(user=>user.age >= 18);
console.log(adults);

// 4.Find user with name = Rahim

const users = [
 {name:"Saikat", age:25},
 {name:"Rahim", age:30}
];


const user = users.find(user=> user.name === "Rahim");
console.log(user);


// 5. filter the even number 

const numbers = [1,2,3,4,5,6,67,7,8,8,9,97,44];

const even = numbers.filter(num=> num %2 === 0);
console.log(even)

// 6. check if numbers exists 
const numbers = [1,2,3,3,4,5,6,7,8];

const exists = numbers.includes(5);
console.log(exists);


// 7.  sum of numbers using reduce 

const numbers = [10,2,3,567,75,33];

const sum = numbers.reduce((total, num)=> total + num, 0);
console.log(sum);

// 8. sort number ascending order 

const numbers = [5,3,66,6,8,35,654];

const sortNumbers = numbers.sort((a,b)=> a -b);
console.log(numbers);

// 9. check any number is > 10;
const numbers = [3234,3,30,5,5,6,7];

const result = numbers.some(num => num > 10);
console.log(result);


some method example: 
// find()-> finds the first matching. stop when first match found    returns single value
// some() checks if any elements matches . stop at first match       returns  boolean

//every() checks if all elemensts match condition.  stops when first failure occurs  returns boolean

// reduce -> combines array into single value.    returns single value

//  inclues checks if value exists , stops when match found  returns boolean


// for each  -> loops through array.   returns nothing (undefined.)


// map/filter -> checks all elements and retuns new array.
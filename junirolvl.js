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

console.log(getTopStudent(students))
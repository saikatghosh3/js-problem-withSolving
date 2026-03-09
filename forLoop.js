//1. Find the sum of all numbers in an Array

const numbers = [19,3,45,56,66];
let sum = 0;
for(i=0; i<numbers.length; i++){
    sum+=numbers[i];
}

console.log(sum);


// 2.Find the largest number in an array

const numbers = [111,33,45,67,77,345];

let largest = numbers[0];
for (let i= 1; i<numbers.length; i++){
    if(numbers[i]>largest){
        largest = numbers[i];
    }
}

console.log(largest);

// 3.Reverse a string 
function ReverseStr(string){
    return string.split("").Reverse().join("")
}

console.log(ReverseStr("hello"));

// 4. count how many even numbers are there 

const numbers = [2, 5, 8, 11, 14];

let count = 0;
for(let i = 0;i<=numbers.length; i++){
    if(numbers[i] %2 ===0){
        count ++; 
    }
}

console.log(count)

// 5. Count how many "a" is there 

const str = "banana";

let count = 0; 
for(let i = 0; i<str.length; i++){
    if(str[i]==="a"){
        count ++;
    }
}

console.log(count);

// it can also be solved with the help of function 

function CountSpecific(str,charFound){
    let count = 0; 
    for(let i = 0; i<str.length; i++){
        if(str[i]===charFound){
            count++;
        }
    }
}

console.log(CountSpecific(hello, "a"));


// 6.find the common numbers between array 
const arr1 = [1,2,3,4];
const arr2 = [3,4,5,6];


let common = [];

for(let i = 0; i<arr1.length; i++){
    if(arr2.includes(arr1[i])){
        common.push(arr1[i])
    }
}

console.log(common)

// 7.count the words in secentec 
const sentence = "I love javascript";
let words = sentence.split(" ");
let count = 0;

for(let i = 0 ; i<sentence.length; i++){
    count++
}

console.log(count);
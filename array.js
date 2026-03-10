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
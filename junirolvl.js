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
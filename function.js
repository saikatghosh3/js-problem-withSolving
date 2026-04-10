//1. Create a function that returns sum of two numbers.
function sum(a,b){
    return a +b ;
}

console.log(sum(5,8));


// 2.check the number is even or odd 
function checkEvenOdd(num){
   if(num %2== 0){
    return "even"
   }else{
    return "Odd"
   }
}
console.log(checkEvenOdd(7));

// 3. find the larget  among two numbers 
function findMax(a,b){
    return a> b? a: b;
}

console.log(findMax(4,5));

// 4. count vouwels in string 

function countVowels(str){
    const  vowels = "aeiouAEIOU"
     let count = 0;
    for(i=0; i<=str.length; i++){
        if(vowels.includes(str[i])){
            count ++; 
        }
    }
    return count;
}

console.log(countVowels("javascript"));

// 5. Reverse a string 
function reverseStr(str){
    let reverse = "";
    for(let i= str.length-1; i>= 0; i--){
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseStr("hello"));


// 6. find the sum of array 

function sumArray(arr){
    let sum = 0;
    for(i= 0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum;
}

console.log(sumArray([1,23,4,5,67,88]));
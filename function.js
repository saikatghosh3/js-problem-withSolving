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


// 7. find the even numbers from array 
 
function findEven(arr){
    let result = [];
    for(let i = 0; i<= arr.length; i++){
      if(arr[i] %2 == 0){
        result.push(arr[i]);
      }
    }
    return result;
}
console.log(findEven([1,2,3,54,56,7,8]));

// 8. check the string is palindrome

function isPalindrome(str){
    let reversed = str.split("").reverse().join("");
    return str===reversed;
}

console.log(isPalindrome("madam"));

// 9. find the largest Number in Array 
function isalargest(arr){
    let max = arr[0];
    for(let i = 0; i<=arr.length; i++){
        if(arr[i]> max){
            max = arr[i]
        }
    }
    return max;
}
console.log(isalargest([12,3,4,7567,3]));

// 10. retun names of users age > 25;
const users = [
  {name:"A", age:20},
  {name:"B", age:30},
  {name:"C", age:28}
];

function oldUsers(users){
    return users.filter(user => user.age > 25).map(user => user.name);
}
console.log(oldUsers(users));
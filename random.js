// implement all the number inside array 
function addAll(arr){
    let sum = 0; 
    for(let i=0 ; i< arr.length; i++){
        sum +=arr[i]
    
    }
    return sum;
}
console.log(addAll([1,2,3,4,5,6,]));


// reverse the string :

function reverseString (str){
    return str.split("").reverse().join("");

}
console.log(reverseString("hello")); 


// find the largest  number in the array

function findLargest (arr){
    let largest = arr[0];
for(let i =0; i< arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i]
    }

}
return largest;
}
console.log(findLargest([1,2,3,4,]));



// count the vowel 
function countVowels (str){
    let count =0;
    const vowels = "aeiouAEIOU";
    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello"));



// Fizzbazz problem :

// ১ থেকে ২০ পর্যন্ত print করো।

// 3 দিয়ে divisible হলে → Fizz
// 5 দিয়ে divisible হলে → Buzz
// দুটো দিয়েই divisible হলে → FizzBuzz


function fizzBuzz(){
for(let i = 1; i<=20;i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    
    }
}
}
    fizzBuzz();
    console.log(fizzBuzz());



    // Remove the duplicate 

    function removeDuplicate(arr){
        return [...new Set(arr)];
    
    }
    console.log(removeDuplicate([2,3,3,4,4,5,6,7,88,8,8,9]))



    // find the factorial 

    function findFactorial(num){
        let result = 1;
        for(let i =1;i<=num; i++){
            result *= i;
        
        
        }
        return result;
    }
    console.log(findFactorial(5));



// make function that will take input an array and return 
function getEven(arr){
    let result = [];
for(let i = 0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
        result.push(arr[i]);
    }
}
return result;
}

console.log(getEven([1,2,3,4,5,6,7,8,9]));
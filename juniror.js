// 1. reverse  a string 
function reversestr (str){
    return str.split("").reverse().join("");

}

console.log(reversestr("hello"));

// 2. palindrome  mane ulta korle o ak e thake 
function isPalindrome (str){
    let reversed = str.split("").reverse().join("");
    if(str === reversed){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome("madam"))


// 3. find the largest number in the array 

function findLargest(arr){
   let largest = arr[0];
   for(let i = 0; i<arr.length; i++){
    if(arr[i]> largest){
        largest = arr[i]
    }
   }
   return largest;
}
console.log(findLargest([1,3,4,5,6,7,5]));

// 2nd method 

function findLargest (arr){
    return Math.max(...arr)
}

console.log(findLargest([1,3,4,5,6,7,5]));




// 4. remove duplicate 
function  removeDuplicate(arr){
 return [...new Set(arr)];
}
console.log(removeDuplicate([1,3,4,5,6,7,5,6,3]))


// 5. count vowels in string 
function countVowels (str){
    let vowels = "aeiouAEIOU";
    let count = 0; 
         for(let i =0; i< str.length; i++){
        if(vowels.includes(str[i])){
          count ++
        }
    }
    return count ;
}

console.log(countVowels("saikat"));


// 6. find the Even numbers  inside array 

function EvenNumbers(arr){
    return arr.filter(num=> num % 2 === 0)
}
console.log(EvenNumbers([1,2,3,4,5,6,7,8]));


// 7. capitalize the first letter 
function capilaizeLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalizeFirstLetter("javascript"));



// 8. sum of array numbers 
function sumofNumbers(arr){
    return arr.reduce((sum , current)=> sum + current, 0)    
}
console.log(sumofNumbers([1,2,3,4,5]));


// 9. check two str are anagram 
function checkAnagram(str1, str2){
    let check1 = str1.split("").sort().join("");
    let check2 = str2.split("").sort().join("");
    if(check1 === check2){
        return true;
    }else{
        return false;
    }
}


console.log(checkAnagram("saikat", "ghosh"));



// 10. Flatten Array 
function flattenArray(arr){
    return arr.flat(Infinity)
}
console.log(flattenArray([1,[2,3],[4,[5]]]));
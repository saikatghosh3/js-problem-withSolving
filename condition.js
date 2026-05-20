// 1. write a function that checks whether a person is adult or Minor 

function checkAge(age){
    if(age >= 18){
        return "adult"
    }else{
        return "child"
    }
}

console.log(checkAge(15));
console.log(checkAge(21));

//2. solve same problem with ternary operator 

function checkAge(age){
   return age>=18? "adult": "child"
}
console.log(checkAge(15));
console.log(checkAge(21));

// 3. check Username and Password  
// If username is "admin" AND password is "1234" then login success.

function checkAuth(username, password){

    if(username === "admin" && password ==="1234"){
        return "Login success"
    }else{
        return "Invalid"
    }
}
console.log(checkAuth("admin", "1234"));
console.log(checkAuth("admin", "1111"));

// 4. If total price is greater than 1000 OR user is premium member, then free delivery.

function getDelivery(total, isPremium){
    if( total >1000 || isPremium){
        return "free delivery"
    }
    else{
        return "Deliver charge applied"
    }
}

console.log(getDelivery(1200, false));
console.log(getDelivery(500, true));
console.log(getDelivery(500, false));


// 5. Find evern or off with tarnary operator 

function checkEvenOdd(num){
    return num % 2=== 0 ? "even": "odd" 

}
console.log(checkEvenOdd(22));
console.log(checkEvenOdd(25));



// 6.multiple condition

function isPassed (attendance, marks){
    if(attendance >= 80 && marks >= 40){
        return "passed"
    }else
        return "failed"
}

console.log(isPassed(90, 50));
console.log(isPassed(30, 30));



// 7. a user can only enter if logged in and email verified 

function accessDashboard (isLoggedIn, isVerified){
    return isLoggedIn && isVerified ?
     "Access Granted" : "Access denied"
}

console.log(accessDashboard(true, true));
console.log(accessDashboard(true, false));


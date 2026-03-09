// Print hello after 2 seconds

setTimeout(()=>{
    console.log("hello after 2 seconds")
},2000);


// 2.Create a function that greets the user after 1 second.

function greetUser(name){
    setTimeout(()=>{
        console.log("hello" + name);
        
    },1000)
}

greetUser("saikat");

// 3. create a promise that resolves with "Task Complete". 
 const task = new Promise ((resolve, reject)=>{
    resolve("Task Complete")
 })
 task.then(result => {
    console.log(result);
 });


//  4. Rsolve a promise that will resolve after two seconds
function delayMessage(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Done after 2 seconds");
        },2000);
    })
}

delayMessage().then(result => {
    console.log(result)
})

// 5. Reject a promise if number is negetive 
function checkNumber(){
    return new Promise((resolve, reject)=>{
        if(num <=0){
            resolve("Positive number");
        }else reject("Negetive number")
    })
}

checkNumber(-5).then(res => console.log(res));


// 6. Resolve login if password is correct 

function login(password){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(password === "1234"){
                resolve("Login successful")
            }else{
                reject("Wrong password")
            }
        },2000)
    })
}

login("1234").then(res=> console.log(res));
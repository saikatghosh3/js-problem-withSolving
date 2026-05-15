
// 1. fetch data with .then 

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1");
}

getUser ()
.then((res)=> res.json())
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

// 2. now solve problem with async await

async function loadUser() {
    try{
        const res = await getUser();
        const data = await res.json();
        console.log(data)
    }catch(error){
        console.log(err)
    }
}
loadUser();



// make a function that will print "hello " after 2 second 

function delayMaggage(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello world");
        }, 2000)
    });
}

delayMaggage().then((msg)=>{
    console.log(msg)
});


//async await dea dealy handle 


async function  showMessage(){
    const res = await delayMaggage();
    console.log(res)
}

showMessage()



// Problem 5: Random Success or Fail
// Task

// এমন Promise বানাও:

// random number > 0.5 হলে success
// না হলে reject করবে



function checkNumber (){
    return new Promise((resolve, reject)=>{
        const num = Math.random()
        if(num > 0.5){
            resolve("success")
        }else{
            reject("Failed")
        }
    })
}

checkNumber()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

  checkNumber()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


  //6. async await error handling 

  async function runCheck() {
    try{
        const result = await checkNumber();
        console.log(result);
    }catch(error){
    console.log(error)
  }
}
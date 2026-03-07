const { log } = require("async");

1.// Fetch all the users form api and print their name
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json();

        users.forEach(user => {
            console.log(user.name)
            
        });
    
    
} 

getUsers();
// 2. fetch a user where id = 3 it's name and email.

const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
const user = await response.json();

console.log(user.name);
console.log(user.email);


// 3. Fetch posts and display first 5 post titles 
async function getPost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    posts.slice(0,5).forEach(post=>{
        console.log(post.title);
        
    })
}

getPost();

// 4. Send new post to server. 

async function createPost(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST", 
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            title:"new post",
            body: "learning Fetch APi",
            userId: 1
        })
    })

    const data = await res.json();
    console.log(data);
    
}

createPost();


// 5. Fetch users and handle error handling 

async function  users() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        console.log(data);
    }catch(error){
         log("Error:, error");
    }
}
users();

// now some problems with .then 

// 6. fetch todos and print first 5 tasks
fetch("").then(response => response.json("https://jsonplaceholder.typicode.com/todos"))
.then(data => {
    data.slice(0, 5).forEach(todo => {
        console.log(todo.title)
    })
})

// 7. print only completed todos 
fetch('').then(res => res.json())
.then(todos => {
    const completed = todos.filter(todo => todo.completed);
    console.log(completed);
})

// 8. Delete a Request 
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
.then(res => res.json()).then(data => {
    console.log("Deleted", data)
})
// Synchronous or blocking
// -line by line execution 

// Asynchronus or nonblocking
// -line by line execution not guaranteed 
// -callbacks will fire

const fs = require("fs");
let text=fs.readFile("dele.txt", "utf-8", (err,data)=>{
    console.log(err,data);
});
console.log("this is a message");
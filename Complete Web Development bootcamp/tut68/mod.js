// Creating custom modules in Node using Node.js


console.log("This is module");
function average(arr){
    let sum=0;
     arr.forEach(element => {
         sum += element;
     });
     return sum/arr.length;
}

// module.exports = average;

// module.exports={
//     avg:average,
//     name:"Harry",
//     repo:"Github"
// 

module.exports.name="Harry";

console.log("this is tutorial 53")

function greet(name, greetText="This is a default value of greetText (know as defaut argument) " ){
    console.log(greetText + " " + name);
    console.log(name +" is a good boy");
}

function sum(a,b,c){
         let d=a+b+c;
         return d;
        //  This line will never execute
        // console.log("Function is returned")
}
let name="Harry";
let name1="Shubham";
let name2="Rohan";
let name3="Sagar";
let greetText="Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);
// let returnVal=greet(name3);  //This line will give output undefined
// console.log(returnVal);

let returnVal=sum(1,2,3);
console.log(returnVal);

// console.log(name+" is a good boy");
// console.log(name1+" is a good boy");
// console.log(name2+" is a good boy");
// console.log(name3+" is a good boy");


//Imp note 
// function mai vohi cheeze pass karni chaiyai joh ki use ho rahi hai
//Ekh function ekh kaam kai liye rakhai
//Function should be easy to read

//Return kai baad kuch bi likha hai toh voh accept nahi karti hai 
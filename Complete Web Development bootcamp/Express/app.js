const express = require("express");
const path = require("path");

const app= express();
const port=80;

// For serving static files
app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the view directory
app.set('views',path.join(__dirname,'views'));

// Our pug demo endpoint 
app.get("/demo",(req, res)=>{
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there and thanks for telling me how to use pubg' });
});

app.get("/",(req, res)=>{
    res.status(200).send("This is homepage my first app with Harry");
});

app.get("/about",(req, res)=>{
    res.send("This is about page of my first app with Harry");
});

app.post("/about",(req, res)=>{
    res.send("This is post page of my first app with Harry");
});

app.get("/this",(req, res)=>{
    res.status(400).send("This page is not found in Vishal Programming");
});

app.listen(port , ()=>{
    console.log(`This application started successfully on port ${port}`);
});
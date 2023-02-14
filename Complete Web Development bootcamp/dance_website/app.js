const express= require("express");
const path = require("path");

const app=express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const bodyparser = require("body-parser");

const port=8000;

       //Define mongoose schema


       const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

  const Contact = mongoose.model('Contact', contactSchema);

//EXPRESS SPECIFIC STUFF
app.use(express.static('static'));  //FOR SERVING STATIC FILES
app.use(express.urlencoded());

//  PUG SPECIFIC STUFF
app.set('view engine', 'pug');    // Set the template engine as pug
app.set('views',path.join(__dirname,'views')); // Set the view directory

// ENDPOINTS
app.get('/', (req,res)=>{
    const params = { };
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req,res)=>{
    const params = { };
    res.status(200).render('contact.pug', params);
});

app.post('/contact', (req,res)=>{
   
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to database")
    });
    
    // res.status(200).render('contact.pug')
});


// START THE SERVER
app.listen(port , ()=>{
    console.log(`This application started successfully on port ${port}`);
});

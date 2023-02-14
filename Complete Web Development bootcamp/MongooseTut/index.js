// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harry', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  // console.log("We are connected bro/sis...")
});

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  const greeting = "My name is " + this.name ;
  console.log(greeting);

}

const Kitten = mongoose.model('harrykitty', kittySchema);

const harrykitty = new Kitten({ name: 'harrykitty' });
const harrykitty2 = new Kitten({ name: 'harrykitty2' });
// console.log(harrykitty.name);
// harrykitty.speak();

harrykitty.save(function (err, harrykitty) {
  if (err) return console.error(err);
  harrykitty.speak();
});

harrykitty2.save(function (err, k) {
  if (err) return console.error(err);
  k.speak();
});

Kitten.find({name:"harrykitty2"},function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})


//Searching  for data in mongodb

use harry

// This query will return all the object with rating equal to 3.5
db.items.find({rating:3.5})
db.items.find({rating:{$gte: 3.5}})   //greater than equal to
db.items.find({rating:{$gt: 3.5}})    //greater than

// And Operator
db.items.find({rating:{$gt: 3.5}, price:{$gt: 200}})    

db.items.find({rating: {$lt:3.5}, price:{$gt: 114000}})    

db.items.find({rating:{$gt: 3.5}, price:{$gt: 114000}})    


db.items.find({$or:[{rating:{$gt: 3.5}}, {price:{$gt: 114000}}] })    

db.items.find({rating: {$gt: 3.5}}, {rating:1}) // rating should only display in this (rating has highest prefarance)
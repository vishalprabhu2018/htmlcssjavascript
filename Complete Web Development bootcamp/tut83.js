show dbs 
use harry
show collections

db.items.find({price:2000})

// Deleting items from the Mongo Database

db.items.deleteOne({price:2000})  //deleteOne will delete the matching document entry and will delete the  first entry in case of multi document  match

db.items.deleteMany({price:129000})


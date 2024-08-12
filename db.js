/*//data base file 
//to connect with mongoose    mongoose.connect(URI)
const mongoose = require('mongoose');
//mongoose URI paste karo 

const mongooseURI = "mongodb://localhost:27017/notebook";



//mongoose returns promises
async function connectToMongo() {
    await mongoose.connect(mongooseURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }

//export connect to mongo function
module.exports = connectToMongo;
*/

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/notebook');
  console.log("Connected to mongo data base....");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

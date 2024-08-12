//this is actually the express server
//entry point of the backend
const { default: mongoose } = require('mongoose');
const connectToMongo = require('./db');
var cors = require('cors')
//hello world example
const express = require('express') //import express
const app = express()  //express ka object stores in app
const port = 5000  //at port 3000

app.use(cors())

//to use request.body we need to use middleware
app.use(express.json()); 
//writing routes
/*app.get('/', (req, res) => {    //.get endpoint 
  res.send('Hello World!')  
})  

app.get('/login', (req, res) => {    //.get endpoint 
  res.send('This is login page')  
})//
*/

app.use('/api/auth' , require('./Routes/auth'))  //'path' , import that file
app.use('/api/notes', require('./Routes/notes')) //'path' , import that file
 
app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)  //to handle incoming HTTP requests
})


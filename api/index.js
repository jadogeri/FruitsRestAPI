const express = require("express")
const cors = require("cors")
// const lowDb = require("lowdb")
// const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
const errorHandler = require('../src/middleware/errorHandler');
const { createConnection } = require("../src/database/configs/lowdb")

const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

 const database  = createConnection();

let getConnection =() =>  { return database};

 if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('../src/database/localStorage');
}

//console.log('database', JSON.stringify(database))
localStorage.setItem('database', JSON.stringify(database));
//console.log(JSON.parse(localStorage.getItem('database')));
//localStorage.clear();


const app = express()

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(bodyParser.json())

const PORT = 4500;

app.use('/api/user', require('../src/routes/userRoutes'));
app.use('/api/fruit', require('../src/routes/fruitRoutes'));
app.use('/api/client', require('../src/routes/clientRoutes'));
app.use('', require('../src/routes/homeRoutes'));


app.use(errorHandler)

app.listen(PORT, ()=> {
  console.log(`Backend is running on http://localhost:${PORT}`)
})

module.exports = { app, getConnection }




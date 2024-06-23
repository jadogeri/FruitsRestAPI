const dotenv = require('dotenv');
dotenv.config();
const express = require("express")
const cors = require("cors")
// const lowDb = require("lowdb")
// const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
const errorHandler = require('./src/middleware/errorHandler');
const { createConnection } = require("./src/database/configs/lowdb")
const swaggerjsdoc = require("swagger-jsdoc")
const swaggerui = require("swagger-ui-express")


const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

 const database  = createConnection();

let getConnection =() =>  { return database};

 if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./src/database/localStorage');
}

//console.log('database', JSON.stringify(database))
localStorage.setItem('database', JSON.stringify(database));
//console.log(JSON.parse(localStorage.getItem('database')));
//localStorage.clear();


const app = express()

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(bodyParser.json())

const PORT = process.env.PORT | 4500;

app.use('/api/user', require('./src/routes/userRoutes'));
app.use('/api/fruit', require('./src/routes/fruitRoutes'));
app.use('/api/client', require('./src/routes/clientRoutes'));



app.use(errorHandler)

const swaggeroptions = {
  definition:{
    openapi : "3.0.0",
    info: {
      title: "Fruits Rest API",
      version: "0.1"

    },
    servers : [
      {
      url : "http://localhost:4500"
      }
    ]
  },
  apis : ["./src/routes/*.js"],
};

const spacs = swaggerjsdoc(swaggeroptions);
app.use("/api-docs", swaggerui.serve,swaggerui.setup(spacs))

app.listen(PORT, ()=> {
  console.log(`Backend is running on http://localhost:${PORT}`)
})

module.exports = { app, getConnection }




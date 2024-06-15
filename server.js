const express = require("express")
const cors = require("cors")
const lowDb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
const errorHandler = require('./src/middleware/errorHandler');

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }


const db = lowDb(new FileSync('./src/database/db.json'))


const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = 4500;

app.use('/api/user', require('./src/routes/userRoutes'));

app.use(errorHandler)


app.listen(PORT, ()=> {
  console.log(`Backend is running on http://localhost:${PORT}`)
})

module.exports = app;
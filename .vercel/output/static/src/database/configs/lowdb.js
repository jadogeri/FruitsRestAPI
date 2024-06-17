const createConnection = () =>{
    const lowdb = require("lowdb")
    const FileSync = require("lowdb/adapters/FileSync")
    const database = lowdb(new FileSync('./src/database/db.json'))  

  return database;
  
}

module.exports = {
    createConnection
}


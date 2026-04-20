// importing server and connecting db code 
const app = require("./src/app.js")
const connectToDb = require("./src/config/database.js")
const nodeModule = require("./src/models/notes.model.js")

// connecting to db with code 


connectToDb()


// starting server 
app.listen(3000, ()=>{
  console.log("server is running on port 3000")
})
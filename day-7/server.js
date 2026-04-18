// importing server 
const app = require("./src/app.js")
const mongoose = require("mongoose")

// connecting to db with code 
async function connectToDb(){
  await mongoose.connect("mongodb+srv://tanishk:Zf5CM6PDxIsDtkj8@cluster0.5witldt.mongodb.net/day-7")
  .then( ()=>{
    console.log("connected to db")
  })
}

connectToDb()


// starting server 
app.listen(3000, ()=>{
  console.log("server is running on port 3000")
})
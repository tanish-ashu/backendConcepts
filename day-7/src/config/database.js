const mongoose = require("mongoose")

async function connectToDb(){
  await mongoose.connect("mongodb+srv://tanishk:Zf5CM6PDxIsDtkj8@cluster0.5witldt.mongodb.net/day-7")
  .then( ()=>{
    console.log("connected to db")
  })
}

module.exports = connectToDb
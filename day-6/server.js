// server ko start krna 1.
// server ko databse se connet krna 2.

const app = require('./src/app.js')
const mongoose =  require("mongoose")

function connectToDb(){
  mongoose.connect("mongodb+srv://tanishk:Zf5CM6PDxIsDtkj8@cluster0.5witldt.mongodb.net/day-6")
  .then(()=>{
    console.log("Connected to Database")
  })
}

connectToDb()


app.listen(3000, ()=>{
  console.log('server is running on port 3000')
})
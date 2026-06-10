const express = require("express")
const noteModel = require("./models/notes.model")

const app = express()

app.use(express.json())

// POST /notes
app.post("/notes", async (req, res) =>{
  const {title, description} = req.body

  const note = await noteModel.create({
    title,description
  })
  
  res.status(201).json({                        // 201 new resource created
    message: "Note created successfully",
    note
  })

})

app.get("/notes", async (req,res) =>{
  const notes = await noteModel.find()         //  find method , reads all the notes data and returns ( always returns data in array of object format)
   
  res.status(200).json({
    message: "Notes Fetched Successfully",
    notes
  })
})

 
module.exports = app
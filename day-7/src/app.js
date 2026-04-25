const express = require("express")
const nodeModule = require("./src/models/notes.model.js")

const app = express()

app.use(express.json)

// POST /notes
app.post("/notes", async (req, res) =>{
  const {title, description} = req.body

  const note = await noteModel.create({
    title,description
  })
  
  res.status(201).json({
    message: "Note created successfully",
    note
  })

})


module.exports = app
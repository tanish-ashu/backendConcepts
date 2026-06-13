 // server create krna

 const express = require("express")
 const noteModel = require("./models/node.model.js")


const app = express()

app.use(express.json())

// post api
app.post('/api/notes', async (req, res) =>{
  const {title, description} = req.body

  const note = await noteModel.create({
    title,description
  })

  res.status(201).json({
    message: "note created successfully",
    note
  })
})

// get api
app.get('/api/notes', async (req,res) =>{
  const notes = await noteModel.find()             // returns data in array of objects format

  res.status(200).json({
    message: "Notes fetched successfully",
    notes
  })
})

// delete api
app.delete('/api/notes/:id', async (req, res) =>{
  const id = req.params.id
  
  const note = await noteModel.findByIdAndDelete(id)

  res.status(200).json({
    message: "note deleted Successfully",
    noteDetails: note
  })
})

// patch api (update api)
app.patch('/api/notes/:id', async (req, res) =>{
  const id = req.params.id
  const {description} = req.body

  const note = await noteModel.findByIdAndUpdate(id, { description })

  res.status(200).json({
    message: "note updated successfully",
    note
  })
})




module.exports = app
const mongoose = require("mongoose")

// defining structure
const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
})

// helps to perform CURD operations later -- Model variable which has whole model is required manditory for perfoming everything
const noteModel = mongoose.model("notes", noteSchema) 

module.exports = noteModel

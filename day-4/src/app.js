// server create krna
const express = require("express")
const app = express()

app.use(express.json())

// server ko config krna

const notes = [ ]

app.get('/', (req, res) =>{
  res.send("hello World")
})

// an api '/notes' -> method 'POST' 
app.post('/notes', (req,res) => {
  notes.push(req.body)
  console.log(notes)
  res.send('note created')
})

// an api '/notes' -> method 'GET' 
app.get('/notes', (req,res) => {
  res.send(notes)
})

// an api '/notes' -> method 'DELETE' -> 'params'
app.delete('/notes/:index', (req, res) =>{
  console.log(req.params.index)
  
  delete notes[ req.params.index]
  res.send('node deleted successfully')
})

// an api '/notes' -> method 'PATCH' -> 'params'   'to parcially replacing the data'
// req.body = {description: "sample description"}
app.patch('/notes/:index', (req, res) =>{
  console.log(req.params.index)

  notes[req.params.index].description = req.body.description

  res.send('note updated Scuccessfully')
} )


// export server
module.exports = app   


// when comming data from api is less we can use 'params' , whereas when the comming data form the api is more we can use 'json body'
const express = require("express")

const app = express() // server instance created

app.get('/', (req, res) =>{   // taking a request and sending a response 
  res.send('hello world')
})

app.get('/about', (req,res) =>{
  res.send('This is about page')
})

app.get('/home', (req, res) =>{
  res.send('Welcome | HomePage !')
})

app.listen(3000) // server started

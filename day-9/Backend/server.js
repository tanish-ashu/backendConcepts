// Do main kaan  1, server start krna -  2, database se connect krna


require('dotenv').config()
const app = require('./src/app')
const connectToDB = require('./src/config/database')


connectToDB()

app.listen(3000, () =>{
  console.log('server is running on port 3000')
})
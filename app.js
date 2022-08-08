const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const { API_PORT } = process.env
const port =  API_PORT || 4000

app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//students
app.get('/students', (req, res) => {
  res.send('Hi, bitches! We are all Britney Bitchs!')
})

app.post('/student', (req, res) => {
  res.send('Hi, bitches! Britney Bitch is alive!')
})

app.patch('/student/:id', (req, res) => {
  res.send(`Hi, bitches! Britney Bitch ${req.params.id} is different!`)
})

app.delete('/student/:id', (req, res) => {
  res.send(`Hi, bitches! Britney Bitch ${req.params.id} is dead!`)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  //TODO: future -> implement method for get all routes and write in console, like METHOD_HTTP /endpoint
})
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./src/queries')

// Constantes da classe
const app = express()
const port = 3030


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })  
)

app.get('/user-list', db.getUsers)
app.get('/user/:id',db.getUserByID)



app.listen(port)
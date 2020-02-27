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
app.get('/user-id',db.getUserByID)
app.get('/user-name', db.getUserByName)
app.get('/user-name-email', db.getUserByNameAndEmail)

// -- Cadastros --

app.post('/cadastra-usuario', db.cadastroUsuario)



app.listen(port)
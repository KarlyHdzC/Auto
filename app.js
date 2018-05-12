//IMPORTAMOS body-parser y express
var bodyParser = require('body-parser')
var express = require('express')

//Declaramos la variable app como instancia de express 
var app = express()

//importamos las rutas del recurso para autos 
var api = require('./routers/auto')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//URL DE LA API
app.use('/api',api);

//Para utilizarlo en otros ficheros, lo estamos exportando 
module.exports = app; 


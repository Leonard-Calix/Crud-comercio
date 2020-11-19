var bodyParser = require("body-parser");
var express = require("express");
var bodyParse = require('body-parser');
var cors = require('cors');
var app = express();

var puerto = process.env.PORT || 4300;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(express.static("public"));

// importar rutas
var rutaComercios = require('./router/comercio');

// Asignar rutas
app.use('/comercio', rutaComercios);

app.listen(puerto, function () {
    console.log(`El api ha arrancado en http://localhost:${ puerto }`);
});
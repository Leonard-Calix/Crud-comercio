var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var sequelize = require('./modules/database');
//require('./modules/asociaciones');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


// Rutas
var comerciosRouter = require('./routers/comercio-router');



app.use('/comercios', comerciosRouter);


app.listen(8888, () => {
    console.log('Servidor del backend levantado en http://localhost:8888');

    try {
        sequelize.sync(force = true  ).then(() => {
            console.log('Conexion establecida.');
        });
    } catch (error) {
        console.error('Ocurrio un error al realizar la conexion :', error);
    }

});
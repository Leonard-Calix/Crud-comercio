var express = require('express');
const ComercioComida = require('../models/comercioComida-model');

var router = express.Router();

//obtener comercios 
router.post('/', function (req, res) {

    console.log(req.body)

    ComercioComida.create({
        nombreComercio: req.body.nombreComercio,
        propietario: req.body.propietario,
        direccion: req.body.direccion,
        fecha: req.body.fecha,
        nombreTipoComercio: req.body.nombreTipoComercio,
        tipoComercio: req.body.tipoComercio,
        opciones: req.body.opciones,
        otro: req.body.otro
    }).then(comercio => {
        res.json(comercio);
        res.end();
    }).catch(error => {
        res.json(error);
        res.end();
    })
});


//obtener comercios 
router.get('/', function (req, res) {

    ComercioComida.findAll( 
    ).then(comercios => {
        res.json(comercios);
        res.end();
    }).catch(error => {
        res.json(error);
        res.end();
    })
});

// Obtener un comercio
router.get('/:id', function (req, res) {

    ComercioComida.findByPk(req.params.id).then(comercio => {

        if (comercio) {
            return res.json(comercio);
        }

        res.json({ mensaje: 'No hay datos' });


    }).catch(error => {
        res.json(error);
        res.end();
    })
});


// Editar un comercio Comida
router.put('/:id', function (req, res) {

    ComercioComida.update({
        nombreComercio: req.body.nombreComercio,
        propietario: req.body.propietario,
        direccion: req.body.direccion,
        fecha: req.body.fecha,
        nombreTipoComercio: req.body.nombreTipoComercio,
        tipoComercio: req.body.tipoComercio,
        opciones: req.body.opciones,
        otro: req.body.otro
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {


        res.send(result);
        res.end();
    }).catch(error => {
        res.json(error);
        res.end();
    });
});

// Eliminar un comercio
router.delete('/:id', function (req, res) {

    ComercioComida.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
        res.end();
    }).catch(error => {
        res.json(error);
        res.end();
    });

});

module.exports = router;

var express = require('express');
const Comercio = require('../models/comercio-model');
var router = express.Router();

//Guardar comercio
router.post('/', function (req, res) {

    Comercio.create({
        nombreComercio: req.body.nombreComercio,
        fechaRegistro: req.body.fechaRegistro,
        direccion: req.body.direccion,
        tipoComercio: req.body.tipoComercio,
    }).then(comercio => {
        res.json(comercio);
        res.end();
    }).catch(err => {
        res.json(err);
        res.end();
    });

});

//obtener comercios
router.get('/', function (req, res) {

    Comercio.findAll().then(comercios => {
        res.json(comercios);
        res.end();
    }).catch(error => {
        res.json(error);
        res.end();
    })

});

// Obtener un comercio
router.get('/:id', function (req, res) {

    Comercio.findByPk(req.params.id).then(comercio => {

        if (comercio) {
            return  res.json(comercio);
        }

        res.json({mensaje: 'No hay datos'});

       
    }).catch(error => {
        res.json(error);
        res.end();
    })
});

// Editar un comercio
router.put('/:id', function (req, res) {

    Comercio.update({
        nombreComercio: req.body.nombreComercio,
        fechaRegistro: req.body.fechaRegistro,
        direccion: req.body.direccion,
        tipoComercio: req.body.tipoComercio
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
    
    Comercio.destroy({
        where:{
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

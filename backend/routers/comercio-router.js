var express = require('express');
var router = express.Router();

//Guardar comercio
router.post('/',function (req, res){
    res.send({mensaje : 'Guardar comercio'});
    res.end();
});

//obtener comercios
router.get('/',function (req, res){
    res.send({mensaje : 'Obtener comercios'});
    res.end();
});

//obtener un comercio
router.get('/:id',function (req, res){
    res.send({mensaje : 'Obtener un comercio'});
    res.end();
});

//obtener un comercio
router.put('/:id',function (req, res){
    res.send({mensaje : 'editar un comercio'});
    res.end();
});

//eliminar un comercio
router.delete('/:id',function (req, res){
    res.send({mensaje : 'Eliminar un comercio'});
    res.end();
});


module.exports = router;

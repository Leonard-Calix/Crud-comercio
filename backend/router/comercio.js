var express = require('express');
var router = express.Router();

// 1. Guardar comercio
router.post('/', (req, res) => {
    res.send({mensaje : 'Guardar comercio'});
    res.end();
});

// 2. Mostrar todos los comercios
router.get('/', (req, res) => {
    res.send({mensaje : 'Obtener todos los comercio'});
    res.end();
});

// 3. Mostrar detalle de un comercio
router.get('/:idComercio', (req, res) => {
    res.send({mensaje : 'Obtener un comercio'});
    res.end();
});

// 4. Editar comercio
router.put('/:idComercio', (req, res) => {
    res.send({mensaje : 'Editar un comercio'});
    res.end();
});

// 5. Eliminar comercio
router.delete('/:idComercio', (req, res) => {
    res.send({mensaje : 'Eliminar comercio'});
    res.end();
});

module.exports = router;
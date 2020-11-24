const Comercio = require('../models/comercioComida-model');
const Comida = require('../models/comida.model');
const ComercioHogar = require('../models/hogar.model');
const Construccion = require('../models/ferreterias.model');


// Un comercio tiene muchas caracteristicas de tipo de comercio Comida
Comercio.hasMany(Comida);
Comida.belongsTo(Comercio);

Comercio.hasMany(ComercioHogar);
ComercioHogar.belongsTo(Comercio);

Comercio.hasMany(Construccion);
Construccion.belongsTo(Comercio)



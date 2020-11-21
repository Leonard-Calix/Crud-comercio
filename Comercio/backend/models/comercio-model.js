var { Model, DataTypes } = require('sequelize');
var sequelize = require('../modules/database');

class Comercio extends Model { }

Comercio.init({
    nombreComercio: DataTypes.STRING,
	propietario: DataTypes.STRING,
	fechaRegistro: DataTypes.DATE,
	direccion: DataTypes.STRING,
	tipoComercio: DataTypes.STRING,
},
    {
        sequelize,
        modelName: 'comercio'
    }
);

module.exports = Comercio;
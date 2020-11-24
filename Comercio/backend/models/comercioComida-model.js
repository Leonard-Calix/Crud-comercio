var { Model, DataTypes } = require('sequelize');
var sequelize = require('../modules/database');

class ComercioComida extends Model { }

ComercioComida.init({
    nombreComercio: DataTypes.STRING,
    propietario: DataTypes.STRING,
    direccion: DataTypes.STRING,
    fecha: DataTypes.DATE,
    nombreTipoComercio: DataTypes.STRING,
    tipoComercio: DataTypes.INTEGER,
    opciones: DataTypes.STRING,
    otro: DataTypes.STRING,
},
    {
        sequelize,
        modelName: 'comercio',
        timestamps: false
    }
);

module.exports =  ComercioComida;
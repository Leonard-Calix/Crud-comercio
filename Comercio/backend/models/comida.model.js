var { Model, DataTypes } = require('sequelize');
var sequelize = require('../modules/database');


class Comida extends Model { }

Comida.init({
    nombre: { type: DataTypes.STRING, defaultValue: 'Comida / Restaurante'},
    cafeterias: DataTypes.BOOLEAN,
    restaurantes: DataTypes.BOOLEAN,
    heladeria: DataTypes.BOOLEAN,
},
    {
        sequelize,
        modelName: 'comida',
        timestamps: false
    }
);


module.exports = Comida;
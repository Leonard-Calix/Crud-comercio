var { Model, DataTypes } = require('sequelize');
var sequelize = require('../modules/database');


class ComercioHogar extends Model { }

ComercioHogar.init({
    nombre: {type: DataTypes.STRING, defaultValue: 'Hogar'},
    muebles: DataTypes.BOOLEAN,
    electrodomesticos: DataTypes.BOOLEAN,
    otro: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'comercioHogar',
        timestamps: false
    }
);

module.exports = ComercioHogar;
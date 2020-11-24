var { Model, DataTypes } = require('sequelize');
var sequelize = require('../modules/database');


class Construccion extends Model { }

Construccion.init({
    ventas: {type: DataTypes.STRING, defaultValue: 'Construccion'},
    ferreterias: DataTypes.BOOLEAN,
    matrialesElectrico: DataTypes.BOOLEAN,
    bombasAgua: DataTypes.BOOLEAN,
    otro: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'construccion',
        timestamps: false
    }
);

module.exports = Construccion;
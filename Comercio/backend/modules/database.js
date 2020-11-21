var { Sequelize } = require('sequelize');


var sequelize = new Sequelize(
    'Comercio_bd',
    'Leo',
    '1234', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize;
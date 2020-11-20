var { Model, DataTypes } = require('sequelize');
var sequelize = require('../modules/database');

class Post extends Model { }

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT
},
    {
        sequelize,
        modelName: 'post'
    }
);

module.exports = Post;
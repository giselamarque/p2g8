const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create class model

class Post extends Model {}

//define class
Post.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
         author: {
            type: DataTypes.STRING,
            allowNull: false
          },
          isbn: {
            type: DataTypes.STRING,
            allowNull: false
          },
        user_id: {
          type: DataTypes.INTEGER,
            references:{
            model: 'user',
            key:'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post
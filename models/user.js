const {Model, DataTypes} = require('sequelize');
const bycrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bycrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
           
        }
    },
    {
        hooks: {
            async beforeCreate(newUserInfo) {
                newUserInfo.password = await bycrypt.hash(newUserInfo.toString(), 10);
                return newUserInfo;
            },
            
                async beforeUpdate(updatedUserInfo) {
                    updatedUserInfo.password = await bycrypt.hash(updatedUserInfo.password.toString(), 10);
                    return updatedUserInfo;
                }
        },
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'user'
    }
);

module.exports = User;
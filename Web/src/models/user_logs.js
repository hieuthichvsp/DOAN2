'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User_log extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User_log.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'user',
            });
        }
    }
    User_log.init({
        user_id: DataTypes.INTEGER,
        action: DataTypes.STRING,
        log_time: DataTypes.DATE,
        details: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User_log',
    });
    return User_log;
};
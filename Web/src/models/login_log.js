'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Login_log extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Login_log.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'user',
            });
        }
    }
    Login_log.init({
        user_id: DataTypes.INTEGER,
        login_time: DataTypes.DATE,
        logout_time: DataTypes.DATE,
        ip_address: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Login_log',
    });
    return Login_log;
};
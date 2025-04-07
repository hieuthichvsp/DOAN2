'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Attendance extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Attendance.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'user',
            });
            Attendance.belongsTo(models.Class_session, {
                foreignKey: 'session_id',
                as: 'session',
            });
        }
    }
    Attendance.init({
        user_id: DataTypes.INTEGER,
        session_id: DataTypes.INTEGER,
        check_time: DataTypes.DATE,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Attendance',
    });
    return Attendance;
};
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Classroom extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Classroom.hasMany(models.class_session, {
                foreignKey: 'classroom_id',
                as: 'class_sessions',
            });
        }
    }
    Classroom.init({
        room_code: DataTypes.INTEGER,
        room_name: DataTypes.STRING,
        capacity: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Classroom',
    });
    return Classroom;
};
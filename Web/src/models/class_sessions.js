'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Class_session extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Class_session.belongsTo(models.Classroom, {
                foreignKey: 'classroom_id',
                as: 'classroom',
            });
            Class_session.belongsTo(models.Subject, {
                foreignKey: 'subject_id',
                as: 'subject',
            });
            Class_session.hasMany(models.Attendance, {
                foreignKey: 'session_id',
                as: 'attendances',
            });
        }
    }
    Class_session.init({
        subject_id: DataTypes.INTEGER,
        session_date: DataTypes.DATE,
        start_time: DataTypes.DATE,
        end_time: DataTypes.DATE,
        classroom_id: DataTypes.INTEGER,
        session_type: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Class_session',
    });
    return Class_session;
};
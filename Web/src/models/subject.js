'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Subject extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Subject.belongsTo(models.User, {
                foreignKey: 'teacher_id',
                as: 'teacher',
            });
            Subject.hasMany(models.Subject_enrollment, {
                foreignKey: 'subject_id',
                as: 'subject_enrollments',
            });
            Subject.hasMany(models.Class_session, {
                foreignKey: 'subject_id',
                as: 'class_sessions',
            });
        }
    }
    Subject.init({
        subject_code: DataTypes.STRING,
        name: DataTypes.STRING,
        credit: DataTypes.INTEGER,
        teacher_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Subject',
    });
    return Subject;
};
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Subject_Enrollment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Subject_Enrollment.belongsTo(models.Subject, {
                foreignKey: 'subject_id',
                as: 'subject',
            });
            Subject_Enrollment.belongsTo(models.User, {
                foreignKey: 'student_id',
                as: 'student',
            });
        }
    }
    Subject_Enrollment.init({
        subject_id: DataTypes.INTEGER,
        student_id: DataTypes.INTEGER,
        enrolled_at: DataTypes.DATE,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        role_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Subject_Enrollment',
    });
    return Subject_Enrollment;
};
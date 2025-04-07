'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: 'role_id',
        as: 'role'
      });
      User.hasOne(models.Rfid, {
        foreignKey: 'user_id',
        as: 'rfid'
      });
      User.hasMany(models.User_log, {
        foreignKey: 'user_id',
        as: 'logs'
      });
      User.hasMany(models.Login_log, {
        foreignKey: 'user_id',
        as: 'login_logs'
      });
      User.hasMany(models.Subject, {
        foreignKey: 'teacher_id',
        as: 'subjects'
      });
      User.hasMany(models.Subject_erollment, {
        foreignKey: 'student_id',
        as: 'subject_enrollments'
      });
      User.hasMany(models.Attendance, {
        foreignKey: 'user_id',
        as: 'attendances'
      });
    }
  }
  User.init({
    user_code: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
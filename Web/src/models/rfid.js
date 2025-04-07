'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rfid extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Rfid.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'user',
            });
        }
    }
    Rfid.init({
        tag_code: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        is_active: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Rfid',
    });
    return Rfid;
};
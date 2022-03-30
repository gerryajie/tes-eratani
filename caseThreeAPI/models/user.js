"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.hasMany(models.belanja, {
        foreignKey: "id_user",
      });
    }
  }
  users.init(
    {
      country: DataTypes.STRING,
      credit_card_type: DataTypes.STRING,
      credit_card: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};

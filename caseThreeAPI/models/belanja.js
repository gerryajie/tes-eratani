"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class belanja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.belanja.belongsTo(models.users, {
        foreignKey: "id_user",
      });
    }
  }
  belanja.init(
    {
      id_user: DataTypes.INTEGER,
      total_buy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "belanja",
    }
  );
  return belanja;
};

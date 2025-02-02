const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../DB/db");

class users extends Model {}

users.init(
  {
  
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "users",
    tableName: "users",
    timeStamps: true,
  }
);

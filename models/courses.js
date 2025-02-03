const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../DB/db");

class courses extends Model {}

courses.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Instructor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "courses",
    tableName: "courses",
    timestamps: true,
  }
);


module.exports = courses

const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../DB/db");

class enrollments extends Model {}

enrollments.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        models: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    courseId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        models: "courses",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "enrollments",
    tableName: "enrollments",
    timeStamps: true,
  }
);


module.exports = enrollments

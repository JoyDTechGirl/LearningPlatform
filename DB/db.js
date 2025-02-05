const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("LearningPlatform", "root", "Jobe7Joy7", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

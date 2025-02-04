const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sql5760455", "sql5760455", "ShKAD5vZHK", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

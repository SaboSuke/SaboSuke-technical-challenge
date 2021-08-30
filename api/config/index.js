require("dotenv").config();

module.exports = {
  HOST: process.env.APP_HOST,
  USER: process.env.APP_USER,
  PASSWORD: process.env.APP_PASSWORD,
  DATABASE: process.env.APP_DATABASE,
  PORT: process.env.APP_PORT || 5000,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

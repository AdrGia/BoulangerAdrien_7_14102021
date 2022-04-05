
const Sequelize = require("sequelize");

const DB_DATABASE = process.env.KEY_DATABASE;
const DB_USERCONNECT = process.env.KEY_USER_CONNECT;
const DB_PASSWORDCONNECT = process.env.KEY_PASSWORD_CONNECT;
const DB_HOST = process.env.KEY_HOST;

const sequelize = new Sequelize("DB_KEYDATABASE", "DB_USERCONNECT", "DB_PASSWORDCONNECT", {
	dialect: "mysql",
	host: "DB_HOST",
});



module.exports = sequelize;

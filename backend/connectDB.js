
const Sequelize = require("sequelize");
require('dotenv').config();

const DB_DATABASE = process.env.KEY_DATABASE
const DB_USERCONNECT = process.env.KEY_USER_CONNECT 
const DB_PASSWORDCONNECT = process.env.KEY_PASSWORD_CONNECT
const DB_HOST = process.env.KEY_HOST
const DB_PORT = process.env.KEY_PORT

const sequelize = new Sequelize(DB_DATABASE, DB_USERCONNECT, DB_PASSWORDCONNECT, {
	dialect: "mysql",
	host: DB_HOST,
	port: DB_PORT,
});



module.exports = sequelize;

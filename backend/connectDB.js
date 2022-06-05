
const Sequelize = require("sequelize");

const DB_DATABASE = 'groupomania'
const DB_USERCONNECT = 'root'
const DB_PASSWORDCONNECT = '@AdrDeal231705@Gia'
const DB_HOST = 'localhost'
const DB_PORT = '3306'

const sequelize = new Sequelize(DB_DATABASE, DB_USERCONNECT, DB_PASSWORDCONNECT, {
	dialect: "mysql",
	host: DB_HOST,
	port: DB_PORT,
});



module.exports = sequelize;

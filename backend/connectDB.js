
const Sequelize = require("sequelize");

const DB_DATABASE = process.env.KEY_DATABASE;
const DB_USERCONNECT = process.env.KEY_USER_CONNECT;
const DB_PASSWORDCONNECT = process.env.KEY_PASSWORD_CONNECT;
const DB_HOST = process.env.KEY_HOST;

const sequelize = new Sequelize("DB_KEYDATABASE", "DB_USERCONNECT", "DB_PASSWORDCONNECT", {
	dialect: "mysql",
	host: "DB_HOST",
});

let connectDB = async() => {
	try {
  		await sequelize.authenticate();
  		console.log('Connection has been established successfully.');
	} catch (error) {
  		console.error('Unable to connect to the database:', error);
	}
}

module.exports = connectDB;

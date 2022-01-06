const mysql = require ('mysql2');
require('dotenv').config();

exports.connect = () => {

	const connection = mysql.createConnection({

		host : process.env.KEY_HOST,
		user : process.env.KEY_USER_CONNECT,
		password : process.env.KEY_PASSWORD_CONNECT,
		database : process.env.KEY_DATABASE,
		timezone : process.env.KEY_TIMEZONE,
		charset : process.env.KEY_CHARSET,
		
	});
	return connection;
}
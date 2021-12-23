const mysql = require ('mysql2');

exports.connect = () => {

	const connection = mysql.createConnection({

		host : 'localhost',
		user : 'root',
		password : '@passdeal2317',
		database : 'groupomania',
		timezone : 'local',
		charset : 'utf8mb4_0900_ai_ci'
		
	});
	return connection;
}
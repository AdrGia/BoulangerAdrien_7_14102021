
const database = require('../connectDB.js');

exports.getNotifs = (req, res, next) => {
	
	const connection = database.connect();
	const userId = res.locals.userId;
	const sql = "SELECT Notifications.id, Notifications.post_id AS postId, Users.name AS initiator, Notification_types.name AS type\
              FROM `Notifications`\
              INNER JOIN Users\
                  ON Notifications.initiator_id = Users.id\
              INNER JOIN Notification_types\
                ON Notifications.type_id = Notification_types.id\
              WHERE user_id = ?";
    const sqlParams = [userId];
    
    connection.execute(sql, sqlParams, (error, notifications, fields) => {
    	if (error) {
    		res.status(500).json({ "error": error.sqlMessage });
    	} else {
    		res.status(200).json({ notifications });
    	}
    })          
    connection.end();
}

exports.deleteOneNotif = (req, res, next) => {

	const connection = database.connect();
	const userId = res.locals.userId;
	const notificationId = req.params.id;
	const sql = "DELETE FROM Notifications WHERE id=?;";
	const sqlParams = [notificationId];

	connection.execute(sql, sqlParams, (error, results, fields) => {
		if (error) {
			res.status(500).json({ "error": error.sqlMessage });
		} else {
			res.status(201).json({ message: "Notification supprimée"})
		}
	})
	connection.end();
}

exports.deleteAllNotifs = (req, res, next) => {
	
	const connection = database.connect();
	const userId = res.locals.userId;
	const slq = "DELETE FROM Notifications WHERE user_id=?;";
	const sqlParams = [userId];

	connection.execute(sql, sqlParams, (error, results, fields) => {
		if(error) {
			res.status(500).json({ "error": error.sqlMessage });
		} else {
			res.status(201).json({ message: "Toutes les notifications ont été supprimées"});
		}
	});

	connection.end();
}
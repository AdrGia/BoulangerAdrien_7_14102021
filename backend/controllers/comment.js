
const database = require('../connectDB.js')

exports.newComment = (req, res, next) => {
	const connection = database.connect();
	const userId = res.locals.userId;
	const postId = req.body.postId;
	const content = req.body.content;
	const sql = "INSERT INTO Comments (user_id, post_id, content)\
  	VALUES (?, ?, ?);";
  	const sqlParams = [userId, postId, content];

  	connection.execute(sql, sqlParams, (error, results, fields) =>{
  		if (error) {
  			res.status(500).json({ "error": error.sqlMessage });
  		} else {
  			notification.addComment(userId, postId)
  				.then(notification.addAnswer(userId, postId))
  				.then(data => {
  					res.status(201).json({ message: "Commentaire ajoutée" });
  				})
  			.catch(error => {
  				res.status(500).json({ "error": error});
  			})	
  		}	
  	});
  	connection.end();
}


exports.deleteComment = (req, res, next) => {
	const connection = data.connect();
	const commentId = parseInt(req.params.id, 10);
	const sql = "DELETE FROM Comments WHERE id=?;";
	const sqlParams = [commentId];

	connection.execute(sql, sqlParams, (error, results, fields) => {
		if (error) {
			res.status(500).json({ "error": error.sqlMessage });
		} else {
			res.status(201).json({ message: "Commentaire supprimée"});
		}
	});

	connection.end();
	
}
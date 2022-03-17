
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const database = require('../connectDB.js');
const { getCommentsOfEachPosts, getLikesOfEachPosts } = require('./post');

exports.signup = (req, res, next) => {
	bcrypt.hash(req.body.password, 10)
	.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	})
	.then(hash => res.status(201).json({ message: "Utilisateur créé !" }))
	.catch(error => res.status(500).json(error.message))
 };
	

exports.login = async (req, res, next) => {

	if(error) {
		return res.status(500).json(error.message);
		} else if (results.length == 0) {
			res.status(401).json({ error: 'Utilisateur non trouvé'});
		}
		bcrypt.compare(password, result[0].password)
			.then(valid => {
				if(!valid) {
					return res.status(401).json({ error: "Mot passe incorrect !"});
				}
				res.status(200).json({
					token: jwt.sign(
					{ userID: result[0].userID },
					process.env.KEY_TOKEN_PASSWORD,
					{ expiresIn: "1d" }
						)
				});
			}) 
			.catch(error => res.status(500).json(error))
};



exports.deleteAccount = (req, res, next) => {

	const connection = database.connect();
	const password = req.body.password;
	const userId = res.locals.userId;
	const sql = "DELETE FROM User WHERE userId=?";
	const sqlParams = [userId];
	connection.execute(sql, sqlParams, (error, results, fields) => {
		if (error) {
			res.status(500).json({ "error": error.sqlMessage});
		} else {
			res.status(201).json({ message: "Utilisateur supprimé"});
		}
	});

	connection.end();
}

exports.changeProfilePassword = (req, res, next) => {

	const connection = database.connect();
	const searchId = req.params.id;
	const sql = "SELECT password FROM Users WHERE id=?";
	const sqlParams = [searchId];
	connection.execute(sql, sqlParams, (error, results, fields) => {
		if(error) {
			res.status(500).json({ "error": error.sqlMessage });
		}
	})
}

exports.changeProfilePicture = (req, res, next) => {

	const connection = database.connect();
	const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
	const userId = req.params.id;
	const sql = "UPDATE User SET avatarUrl=? WHERE userId=?";
	const sqlParams = [avatarUrl, userId];
	connection.execute(sql, sqlParams, (error, results, fields) => {
		if(error) {
			res.status(500).json({ "error": error.sqlMessage });
		} else {
			res.status(201).json({ message: "Photo de profil modifiée" });
		}
	});

	connection.end();
}

exports.changeAdmin = (req, res, next) => {

	const connection = database.connect();
	const isadmin = req.body.isadmin;
	const userId = req.params.id;
	const sql = "UPDATE User SET isAdmin=? WHERE userId=?";
	const sqlParams = [isadmin, userId];
	connection.execute(sql, slqParams, (error, results, fields) =>{
		if (error) {
			res.status(500).json({ "error": error.sqlMessage});
		} else {
			res.status(201).json({ message: "Droits admistrateur modifiée"});
		}
	});
	
	connection.end();
}

exports.profile = (req, res, next) => {
	const connection = database.conenct();
	const userId = req.paramas.id;
	const sql = "SELECT firstName, lastName, email, avatarUrl, FROM User WHERE userId = ?";
	const sqlParams = [userId];
	connection.execute(sql, slqParams, (error, results, fiedls) =>{
		if (error) {
			return res.status(500).json({ "error": error.sqlMessage });
		} else {
			return res.statut(201).json(result);
		}
	});
};
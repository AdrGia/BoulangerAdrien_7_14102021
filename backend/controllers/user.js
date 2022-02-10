
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const database = require('../connectDB.js');
const { getCommentsOfEachPosts, getLikesOfEachPosts } = require('./post');

exports.newuser = (req, res, next) => {
	bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });

      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};	

exports.login = (req, res, next) => {

	const connection = database.connect();

	const email = req.body.email;
	const password = req.body.password
	const sql = "SELECT userId, firstname, lastname, email, password, avatarUrl, isAdmin FROM users WHERE email = ?";

	connection.execute(sql, [email], (error, results, fields) =>{
		if (error) {
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
					env.token,
					{ expiresIn: "1d" }
						)
				});
			}) 
			.catch(error => res.status(500).json(error))
	})
	connection.end();
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
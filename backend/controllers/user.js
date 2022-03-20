
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const database = require('../connectDB.js');
const User = require('../models/user');
const { getCommentsOfEachPosts, getLikesOfEachPosts } = require('./post');

const newToken = user => {
	token = jwt.sign({ userId: result[0].userID}, process.env.KEY_TOKEN_PASSWORD, 
		{ expiresIn: "1d" }
		)
	return { user, token }
};

exports.signup = (req, res, next) => {
	bcrypt.hash(req.body.password, 10)
	User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	})
	.then(hash => res.status(201).json({ message: "Utilisateur créé !" }))
	.catch(error => res.status(500).json(error.message))
 };
	

exports.login = async (req, res, next) => {
	User.findOne({email: req.body.email})
	.then(user => {
		if(!user) {
			return res.status(401).json({ error: 'Utilisateur incorrect !' });
		}
		bcrypt.compare(req.body.password, user.password)
			.then(valid => {
				if(!valid){
					return res.status(401).json({ error: 'Mot de passe non valide !' });
				}
				res.status(201).json(newToken(response.message));
			})
			.catch(error => res.status(500).json({ error }));
	})
	.catch(error => res.status(500).json({ error }));

};

exports.deleteAccount = async (req, res, next) => {
	User.findOne({
		where: { id: req.params.id}
	})
	.then(user => {
		User.destroy({
			where: { id: user.id}
		})
		.then(() => res.status(200).json({ message: "Mon compte supprimé !" }))
		.catch(error => res.status(400).json({ error }))
	})
	.catch(error => res.status(500).json({ error }));
};

/*exports.changeProfilePassword = (req, res, next) => {

	const connection = database.connect();
	const searchId = req.params.id;
	const sql = "SELECT password FROM Users WHERE id=?";
	const sqlParams = [searchId];
	connection.execute(sql, sqlParams, (error, results, fields) => {
		if(error) {
			res.status(500).json({ "error": error.sqlMessage });
		}
	})
}*/

exports.changeProfilePicture = (req, res, next) => {

	try {
		 const userObject = req.file
      ? {
          ...JSON.parse(req.body.user),
          avatarUrl: `${req.protocol}://${req.get('host')}/public/${
            req.file.filename
          }`
        }
      : { ...req.body }

      console.log(userObject)
      req.user.update(userObject).then(user => res.status(200).json({ user }))
	} catch (error) {
		res.staut(400).json({ error })
	}
};


/*exports.profile = (req, res, next) => {
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
};*/
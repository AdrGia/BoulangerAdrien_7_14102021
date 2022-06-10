
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const database = require('../connectDB.js');
const User = require('../models/user');
const getUser = require('../utils/jwtUtils');
/*const { getCommentsOfEachPosts, getLikesOfEachPosts } = require('./post');*/

exports.signup = (req, res, next) => {
	console.log('DEBUG', req.body)
	bcrypt.hash(req.body.password, 10)
	User.create({
		firstname: req.body.firstName,
		lastname: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
		isadmin: false,
	})
		.then(hash => res.status(201).json({ message: "Utilisateur créé !" }))
		.catch(error => res.status(500).json({
	errors:
	{
		code: error.code,
		message: error.message
	}
}))
 };
	

exports.login = async (req, res, next) => {
	console.log(req.body);
	User.findOne({where: {email: req.body.email}})
	.then(user => {
		return res.status(200).json(user);
		if(!user) {
			return res.status(401).json({ error: 'Utilisateur incorrect !' });
		} 
		bcrypt.compare(req.body.password, user.password)
			.then(valid => {
				console.log("DEBUG", valid);
				if(!valid){
					return res.status(401).json({ error: 'Mot de passe non valide !' });
				}
				res.status(201).json({
            		user_id: user._id,
            		token: jwt.sign (
            		{ user_id: user._id },
            		process.env.TOKEN_KEY,
            		{ expiresIn: '1d'}
            		)
          		});
			})
			
	})
	.catch(error => res.status(500).json({
	errors:
	{
		code: error.code,
		message: error.message
	}
}));

};

exports.userProfil = (req, res, next) => {
	let id = utils.getUser(req.headers.authorization)
	User.findOne({
		attributes: ['id', 'firstName', 'lastName', 'email'],
		where: { id: id }
	})
	.then(user => res.status(200).json(user))
	.catch(error => res.status(500).json(error))
}

exports.deleteAccount = async (req, res, next) => {
	User.findOne({
		where: { id: req.params.id }
	})
	.then(user => {
		User.destroy({
			where: { id: user.id }
		})
		.then(() => res.status(200).json({ message: "Mon compte supprimé !" }))
		.catch(error => res.status(400).json({ error }))
	})
	.catch(error => res.status(500).json({ error }));
};

exports.modifyPwd = (req, res, next) => {
	let userId = utils.getUser(req.headers.authorization);
	const newPassword = req.body.newPassword;
	console.log(newPassword)
	User.findOne({
		where: { id: userId }
	})
		.then(user => {
			console.log(user)
			bcrypt.compare(newPassword, user.password, (resComparePassword) => {
				if(resComparePassword) {
					res.status(406).json({ error: "Vous avez entré le même mot de passe" })
				} else {
					bcrypt.hash(newPassword, 10, function (err, bcryptNewPassword) {
						User.update( { password: bcryptNewPassword }, { where: { id: user.id }} )
						.then(() => res.status(201).json({ confirmation: "Mot de passe modifié !" }))
						.catch(error => res.status(500).json(error))
					})
				}
			})
		})
		.catch(error => res.status(406).json(error))
};

exports.modifyAvatar = (req, res, next) => {

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



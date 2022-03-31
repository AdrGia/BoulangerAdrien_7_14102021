
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const database = require('../connectDB.js');
const User = require('../models/user');
const getUser = require('../utils/jwtUtils');
/*const { getCommentsOfEachPosts, getLikesOfEachPosts } = require('./post');*/

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

exports.modifyAvtar = (req, res, next) => {

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



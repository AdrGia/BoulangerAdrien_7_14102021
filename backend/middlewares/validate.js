
const Joi = require('joi');

const userSchema = Joi.object({
	email: Joi.string().trim().email().required(),
	password: Joi.string().trim().min(8).uppercase(2).required(),
});

exports.user = (req, res, next) => {

	let user;
	if (req.file) {
		user = JSON.parse(req.body.user);
	} else {
		user = req.body;
	}

	const {error, value} = userSchema.validate(user);
	if (error) {
		res.status(422).json({ error: "email ou mot de passe invalide" });
	} else {
		next();
	}
};

const changePasswordSchema = Joi.object({
  oldPassword: Joi.string().trim().min(8).uppercase(2).required(),
  newPassword: Joi.string().trim().min(8).uppercase(2).required(),
});

exports.changePassword = (req, res, next) => {
  const {error, value} = changePasswordSchema.validate(req.body);
  if (error) {
    res.status(422).json({ error: "Données saisies invalides" });
  } else {
    next();
  }
};
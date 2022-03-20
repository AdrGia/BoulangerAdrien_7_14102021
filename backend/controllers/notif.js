
const database = require('../connectDB.js');
const Notif = require('../models/notif.js');

exports.getNotif = (req, res, next) => {
	Notif.findAll({ where: { userId: req.user.id}, order: [[ 'createAt', 'DESC' ]]})
	.then(notif => {
		res.status(200).json({ notif })
	})
	.catch(error => {
		console.log(error)
		res.status(400).json({ error })
	})
}

exports.deleteNotif = (req, res, next) => {
	Notif.findOne({ where: { id: req.params.id, userId: req.user.id}})
	.then(notif => {
		if(!notif) {
			res.status(400).json({error: error.message })
		}
		Notif.destroy()
		.then(() => res.status(200).json({ message: 'Notification supprimée !'}))
		.catch(error => res.status(400).json({ error }))
	})
	.catch(erro => res.status(500).json({ error: error.message}))
}
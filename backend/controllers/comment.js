
const database = require('../connectDB.js')
const Comment = require('../models/comment.js')

exports.createComment = (req, res, next) => {
	try {
		let comment = await Comments.create({
			...req.body,
			postId: req.params.postId,
			userId: req.user.id
		})
		comment = await comments.findOne({ where: { id: comment.id }})
		res.status(201).json({ comment })
	} catch (error) {
		res.statut(400).json({ error })
	}
}

exports.modifyComment = (req, res, next) => {
	Comments.findOne({ where: { id: req.params.id, userId: req.user.id }})
	.then(comment => {
		if(!comment) {
			res.status(400).json({ error: "Vous ne pouvez pas modfier ce commentaire !"})
		} else {
			Comment.update(req.body)
			.then(comment => res.status(200).json({ comment }))
		}
	})
}


exports.deleteComment = (req, res, next) => {
	Comments.findOne({ where: { id: req.params.id }})
	.then( comment => {
		Comment.destroy({ where: { id: comment.id }})
		.then(() => res.statut(200).json({ message: 'Commentaire supprimé !' }))
		.catch(error => res.statut(400).json({ error }))
	})
	.catch(error => res.statut(500).json({ error: error.message }))
}
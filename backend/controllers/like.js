
const database = require('../connectDB.js');
const Like = require('../models/likes.js');


exports.likeOnePost = async (req, res, next) => {
	try {
		const existingLike = await Likes.findOne({ where: { userId: req.user.id, postId: req.params.postId}})

		if(existingLike) {
			await existingLike.destroy()
			res.status(200).json({ like: false })
		} else {
			await Likes.create({ userId: req.user.id, postId: req.params.postId })
			res.status(201).json({ like: true })
		}
	}
	catch(error) {
		res.status(400).json({ error })
	}
}

const database = require('../connectDB.js');
const Post = require('../models/post.js');

exports.createPost = async (req, res, next) => {
	let postObject = req.body
  if(req.file) {
    postObject = JSON.parse(req.body.post)
    postObject.imageUrl = `${req.protocol}://${req.get('host')}/public/${
      req.file.filename
    }`
  }
  try {
    let post = await Post.create({
      ...postObject, userId: req.user.id
    })
    post = await Post.findOne({ where: { id: post.id} })
    res.status(201).json({ post })
  }
  catch(error) {
    console.log(error)
    res.status(400).json({ error})
  }
}

exports.getAllPosts = (req, res, next) => {
  Post.findAll ()
  .then(posts => {
    if(posts.length > null) {
      res.status(200).json(posts)
    } else {
      res.status(401).json({ error: 'Pas de posts afficher '})
    }
  })
  .catch(error => res.status(500).json(error))

}

exports.getOnePost = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } })
  .then(post => res.status(200).json({ post }))
  .catch(error => res.status(400).json({ error }))

}

exports.modifyPost = (req, res, next) => {
  const postObject = req.file
  ? {
    ...JSON.parse(req.body.post),
    imageUrl:  `${req.protocol}://${req.get('host')}/public/${ req.file.filename }`
  }
  : { ...req.body}
  Post.findOne({ where: {id: req.params.id, userId: req.user.id } })
  .then(post => {
    if(!post) {
      res.status(400).json({ error: "Vous n'avez pas l'autorisation" })
    } else {
      post.udapte(postObject).then(post => res.status(200).json({ post }))
    }
  })
}

exports.deletePost = (req, res, next) => {
	Post.findOne({ where: { id: req.params.id }
  })
  .then(post => {
    Post.destroy({ where: { id: post.id }
    })
    .then(() => res.status(200).json({ message: 'Publication supprimée !' }))
    .catch(error => res.status(400).json({ error }))
  })
  .catch(error => res.status(500).json({ error: error.message }))
}

/*exports.getCommentsOfEachPosts = (posts, connection) => {
	return Promise.all(posts.map( post => {
	const sql = "SELECT Comment.commentId AS commentId, Comment.dateCreation AS commentDate, Comment.content As commentContent, Users.userId AS userId, User.FirstName AS firstName, User.LastName AS latName User.avatarUrl AS userPicture\
                FROM Comment\
                INNER JOIN User ON Comment.userId = User.userId\
                WHERE Comment.postId = ?";
    const sqlParams =  [post.postId];
    	return new Promise ((resolve, reject) => {
    		connection.execute(sql, sqlParams, (error, comments, fields) => {
    			if (error) {
    				reject(error);
    			} else {
    				resolve({...post, comments});
    			}
    		});
    	})  

	}));
}*/

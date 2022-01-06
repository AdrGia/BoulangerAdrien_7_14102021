
const database = require('../connectDB.js');

exports.newPost = (req, res, next) => {
	const connection = database.connect();
	
	const imageurl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
  console.log(imageurl);
  console.log(req.file.filename);
	const content = req.body.content ? req.body.content : null;
	const sql = "INSERT INTO Post (userId, imageUrl, content)\ VALUES (?, ?, ?);";
	const sqlParams = [userId, imageurl, content];

	connection.execute(sql, sqlParams, (error, results, fields) => {
		if (error) {
			res.status(500).json({ "error": error.sqlMessage });
		} else {
			res.status(201).json({ message: "Publication ajoutée" });
		}
	})

	connection.end();
}

exports.allPosts = (req, res, next) => {
	const connection = database.connect();
	const sql = "SELECT Post.postId AS postId, Post.dateCreation AS postDate, Post.imageUrl AS postImage, Post.content AS postContent, User.userId AS userId, User.firstname AS userFirstName, User.lastname AS userLastName, User.avatarUrl AS userPicture\
  FROM Post\
  INNER JOIN User ON Post.userId = User.userId\
  ORDER BY postDate DESC";
  	connection.execute(sql, (error, rawPosts, fields) => {
  		if(error) {
  			connection.end();
  			res.status(500).json({ "error": error.sqlMessage });
  		} else {
  			this.getCommentsOfEachPosts(rawPosts, connection)
  				.then(postsWithoutLikes => {
  					const userId = res.locals.userId;
  					this.getLikesOfEachPosts(postsWithoutLikes, userId, connection)
  						.then( posts => {
  							res.status(200).json({ posts });
  						})
  					.catch(error =>{
  						res.status(500).json({ "error": "Un problème est survenu" })
  					})	
  				})
  		}
  	});



}

exports.onePost = (req, res, next) => {
	const connection = database.connect();
	const postId = parseInt(req.params.id);
	const sql = "SELECT Post.postId AS postId, Post.dateCreation AS postDate, Post.imageUrl AS postImage, Post.content AS postContent, User.userId AS userId, User.firstname AS userFirstName, User.lastname AS userLastName, User.avatarUrl AS userPicture\
  FROM Post\
  INNER JOIN User ON Post.userId = User.userId\
  WHERE Post.postId = ?\
  ORDER BY postDate DESC";
  	const sqlParams = [postId];

  	connection.execute(sql, sqlParams, (error, rawPosts, fields) => {
  		if (error) {
  			connection.end();
  			res.status(500).json({ "error": error.sqlMessage});
  		} else {
  			this.getCommentsOfEachPosts(rawPosts, connection)
  			.then(postsWithoutLikes => {
  				const userId = res.locals.userId;
  				this.getLikesOfEachPosts(postsWithoutLikes, userId, connection)
  					.then(posts => {
  						res.status(200).json({ post });
  					})
  			})
  		}
  		
  	});


}

exports.deletePost = (req, res, next) => {
	const connection = database.connect();
	const postId = parseInt(req.params.id, 10);
	const sql = "DELETE FROM Post WHERE id=?;";
	const sqlParams = [postId];

	connection.execute(sql, sqlParams, (error, results, fields) => {
		if (error) {
			res.status(500).json({ "error": error.sqlMessage });
		} else {
			res.status(201).json({ message: "Publication supprimée"});
		}
	})

	connection.end();
}

exports.getCommentsOfEachPosts = (posts, connection) => {
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
}

exports.getLikesOfEachPosts = (posts, userId, connection) => {
	return Promise.all(posts.map(post => {
		const postId = post.postId;
		const sql = "SELECT\
                (SELECT COUNT(*) FROM Likes WHERE (post_id=? AND rate=1)) AS LikesNumber,\
                (SELECT COUNT(*) FROM Likes WHERE (post_id=? AND rate=-1)) AS DislikesNumber,\
                (SELECT rate FROM Likes WHERE (post_id=? AND user_id=?)) AS currentUserReaction";
        const sqlParams = [postId, postId, postId, userId];
        return new Promise ((resolve, reject) => {
        	connection.execute(sql, sqlParams, (error, result, fields) => {
        		if (error) {
        			reject(error);
        		} else {
        			resolve({ ...post, likes : result[0] });
        		}
        	});
        })        
	}));
}	
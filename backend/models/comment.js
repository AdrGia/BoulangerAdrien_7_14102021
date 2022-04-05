
const sequelize = require('../connectDB');
const DataTypes = require('sequelize/lib/data-types');

const Comment = sequelize.define('comment', {
	dateCreation: {
		type: DataTypes.DATE,
		allowNull: false
	},
	userId: {
		type: DataTypes.STRING,
		allowNull: false
	},
	postId: {
		type: DataTypes.STRING,
		allowNull: false
	},
	content: {
		type: DataTypes.TEXT,
		allowNull: false
	}

});

module.exports = Comment;

const sequelize = require('../connectDB');
const DataTypes = require('sequelize/lib/data-types');

const Post = sequelize.define('post', {
	dateCreation: {
		type: DataTypes.DATE,
		allowNull : false
	},
	userId: {
		type: DataTypes.STRING,
		allowNull: false
	},
	imageUrl: {
		type: DataTypes.STRING,
		allowNull: false
	},
	content: {
		type: DataTypes.TEXT,
		allowNull: false
	},
});

module.exports = Post;

const sequelize = require('../connectDB');
const DataTypes = require('sequelize/lib/data-types');

const Likes = sequelize.define('likes' {
	rate: {
		type: Datatypes.DECIMAL,
		allowNull: false,
	},
	userId: {
		type: Datatypes.STRING,
		allowNull: false,
	},
	postId: {
		type: Datatypes.STRING,
		allowNull: false,
	}

});

module.exports = Likes;
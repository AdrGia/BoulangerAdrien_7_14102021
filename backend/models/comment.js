
const sequelize = require('../connectDB');
const DataTypes = require('sequelize/lib/data-types');

const Comments = sequelize.define('comment', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	
	date: {
		type: DataTypes.DATE,
		allowNull: false
	},
	user_id: {
		type: DataTypes.STRING,
		allowNull: false
	},
	post_id: {
		type: DataTypes.STRING,
		allowNull: false
	},
	content: {
		type: DataTypes.TEXT,
		allowNull: false
	}

});

module.exports = Comments;
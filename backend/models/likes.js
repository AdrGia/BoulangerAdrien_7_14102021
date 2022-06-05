
const sequelize = require('../connectDB');
const DataTypes = require('sequelize/lib/data-types');

const Likes = sequelize.define('like' {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},

	rate: {
		type: Datatypes.DECIMAL,
		allowNull: false,
	},

	user_id: {
		type: Datatypes.STRING,
		allowNull: false,
	},

	post_id: {
		type: Datatypes.STRING,
		allowNull: false,
	}

});

module.exports = Likes;
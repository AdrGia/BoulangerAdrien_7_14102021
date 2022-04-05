
const sequelize = require('../connectDB');
const DataTypes = require('sequelize/lib/data-types');

const User = sequelize.define('user', {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	imageUrl: {
		type: DataTypes.STRING,
		defaultValue: false
	}

});

module.exports = User;
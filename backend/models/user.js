
const sequelize = require('../connectDB');
const DataTypes = require('sequelize/lib/data-types');

const Users = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},

	firstname: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastname: {
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
	isadmin: {
		type: DataTypes.STRING,
		allowNull: false
	},

});

module.exports = Users;
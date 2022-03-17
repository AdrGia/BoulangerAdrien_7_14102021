const { Model } = require('sequelize');
const sequelize = new Model('sqlite::memory:');


const user = sequelize.define('user', {
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
	};
	password: {
		type: DataTypes.STRING,
		allowNull: false
	};
	imageUrl: {
		type: DataTypes.STRING,
		defaultValue: false
	}

});
console.log(user === sequelize.models.user);
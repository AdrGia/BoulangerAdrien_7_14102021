const { Model } = require('sequelize');
const sequelize = new Model('sqlite::memory:');

const Notif = sequelize.define('notif', {
	userId: {
		types: DataTypes.INTEGER,
		allowNull: false
	}
	postId: {
		types: DataTypes.INTEGER,
		allowNull: false
	}
	content: {
		types: DataTypes.TEXT,
		allowNull: false
	}
});
console.log(notif === sequelize.model.notif);

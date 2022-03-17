
const { Sequelize } = require('@sequelize/core');
const sequelize = new Sequelize('sqlite::memory:');

const post = sequelize.define('post', {
	dateCreation: {
		type: DATE,
		allowNull : false
	};
	userId: {
		type: STRING,
		allowNull: false
	};
	imageUrl: {
		type: STRING,
		allowNull: false
	};
	content: {
		type: TEXT,
		allowNull: false
	};
});

console.log(post === sequelize.models.post);
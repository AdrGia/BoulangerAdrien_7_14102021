
const { Sequelize } = require('@sequelize/core');
const sequelize = new Sequelize('sqlite::memory:');

const comment = sequelize.define('comment' {
	dateCreation: {
		type: DATE,
		allowNull: false
	};
	userId: {
		type: STRING,
		allowNull: false
	};
	postId: {
		type: STRING,
		allowNull: false
	};
	content: {
		type: TEXT,
		allowNull: false
	};

});

console.log(comment === sequelize.models.comment);
/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('thuDemoUserHjamison', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		username: {
			type: DataTypes.STRING(45),
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		date_created: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'thu_demo_user_hjamison',
		timestamps: false
	});
};
